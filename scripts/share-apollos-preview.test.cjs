const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const pagePath = path.join(root, 'src/app/page.tsx');
const page = fs.readFileSync(pagePath, 'utf8').replace(/\r\n/g, '\n');
const parsed = ts.createSourceFile(pagePath, page, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const metadataStatements = parsed.statements.filter(statement => ts.isVariableStatement(statement)
  && statement.declarationList.declarations.some(declaration => declaration.name.getText(parsed) === 'metadata'));
assert.equal(metadataStatements.length, 1);
const metadataStatement = metadataStatements[0];

// Read literal metadata only. Never import the homepage, components, auth or providers.
function literal(node) {
  if (ts.isStringLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(literal);
  assert.ok(ts.isObjectLiteralExpression(node), 'metadata must be static literal data');
  const value = {};
  for (const property of node.properties) {
    assert.ok(ts.isPropertyAssignment(property) && (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)), 'no calls, spreads, getters or computed keys');
    const key = property.name.text;
    assert.ok(!['__proto__', 'prototype', 'constructor'].includes(key) && !Object.hasOwn(value, key));
    value[key] = literal(property.initializer);
  }
  return value;
}
const metadata = literal(metadataStatement.declarationList.declarations[0].initializer);
const site = 'https://apolloslifebible.com';
const imageUrl = `${site}/images/share-apollos-invitation.jpg`;
const title = 'Apollos Bible';
const description = 'A Bible companion that learns with you.';
const imageAlt = 'Apollos Bible with a gold dove and an open Bible in warm sunlight.';
const imagePath = path.join(root, 'public/images/share-apollos-invitation.jpg');
const image = fs.readFileSync(imagePath);
const hash = data => crypto.createHash('sha256').update(data).digest('hex');

test('homepage metadata is static server-only preview data with no general SEO or routing changes', () => {
  assert.equal(parsed.parseDiagnostics.length, 0);
  assert.ok(metadataStatement.modifiers.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword));
  assert.doesNotMatch(page, /["']use client["']/);
  assert.deepEqual(Object.keys(metadata).sort(), ['openGraph', 'twitter']);
  assert.doesNotMatch(metadataStatement.getText(parsed), /generateMetadata|fetch\(|process\.env|cookies\(|headers\(/);
});

test('approved Open Graph title, promise and canonical object URL replace the old social preview', () => {
  assert.deepEqual(metadata.openGraph, {
    title, description, type: 'website', url: site,
    images: [{ url: imageUrl, width: 1200, height: 630, type: 'image/jpeg', alt: imageAlt }],
  });
});

test('Twitter uses the same approved artwork and accessible wording', () => {
  assert.deepEqual(metadata.twitter, {
    card: 'summary_large_image', title, description,
    images: [{ url: imageUrl, alt: imageAlt }],
  });
});

test('preview links are absolute public HTTPS URLs without tokens, queries or private paths', () => {
  for (const address of [metadata.openGraph.url, ...metadata.openGraph.images.map(item => item.url), ...metadata.twitter.images.map(item => item.url)]) {
    const url = new URL(address);
    assert.equal(url.protocol, 'https:');
    assert.equal(url.hostname, 'apolloslifebible.com');
    assert.equal(url.username + url.password + url.search + url.hash + url.port, '');
    assert.doesNotMatch(address, /localhost|127\.0\.0\.1|file:|data:|\.codex|Downloads/i);
  }
});

function jpegDimensions(bytes) {
  assert.equal(bytes.readUInt16BE(0), 0xffd8, 'JPEG signature');
  for (let offset = 2; offset + 4 <= bytes.length;) {
    assert.equal(bytes[offset], 0xff);
    const marker = bytes[offset + 1];
    assert.ok(![0xe1, 0xed, 0xfe].includes(marker), 'no EXIF, IPTC or comment payload');
    const length = bytes.readUInt16BE(offset + 2);
    assert.ok(length >= 2 && offset + 2 + length <= bytes.length);
    if ([0xc0, 0xc1, 0xc2].includes(marker)) return { width: bytes.readUInt16BE(offset + 7), height: bytes.readUInt16BE(offset + 5) };
    assert.notEqual(marker, 0xda, 'dimensions before image data');
    offset += 2 + length;
  }
  assert.fail('missing JPEG frame');
}

test('approved hero is a compact real 1200 by 630 JPEG with a pinned artwork identity', () => {
  assert.deepEqual(jpegDimensions(image), { width: 1200, height: 630 });
  assert.ok(image.length < 300000, 'keep the preview image lightweight');
  assert.equal(hash(image), '55b7b5ff99d1df79fb0446563cd0131b295fb0762a83829ee3a7d7a8f04a52db');
  assert.equal(image.readUInt16BE(image.length - 2), 0xffd9);
});

test('all pre-existing homepage imports, visible rendering and AuthRedirect placement stay byte-identical', () => {
  const original = (page.slice(0, metadataStatement.getFullStart()) + page.slice(metadataStatement.end))
    .replace(/^import type \{ Metadata \} from "next";\n/, '');
  assert.equal(hash(original), 'e23476efaccd51d077a078385329afce300e720326f825f68459e627a663f85c');
});

test('the new preview is scoped to the homepage, not root layout or sibling routes', () => {
  function inspect(dir) {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const target = path.join(dir, item.name);
      if (item.isDirectory()) inspect(target);
      else if (target !== pagePath && /\.(tsx?|jsx?)$/.test(item.name)) {
        assert.doesNotMatch(fs.readFileSync(target, 'utf8'), /share-apollos-invitation/);
      }
      assert.doesNotMatch(item.name, /^(opengraph-image|twitter-image)\./, 'no root-inherited file convention');
    }
  }
  inspect(path.join(root, 'src/app'));
});

test('the pinned Next.js renderer produces complete social tags offline without running the homepage', () => {
  assert.equal(require('next/package.json').version, '14.2.35', 'review this compatibility check when upgrading Next.js');
  const { resolveOpenGraph, resolveTwitter } = require('next/dist/lib/metadata/resolvers/resolve-opengraph');
  const { OpenGraphMetadata, TwitterMetadata } = require('next/dist/lib/metadata/generate/opengraph');
  const { renderToStaticMarkup } = require('react-dom/server');
  const context = { pathname: '/', trailingSlash: false, isStandaloneMode: true };
  const base = new URL(site);
  const html = renderToStaticMarkup([
    OpenGraphMetadata({ openGraph: resolveOpenGraph(metadata.openGraph, base, context, null) }),
    TwitterMetadata({ twitter: resolveTwitter(metadata.twitter, base, context, null) }),
  ]);
  const tagEntries = Array.from(html.matchAll(/<meta (?:property|name)="([^"]+)" content="([^"]*)"\/>/g), match => [match[1], match[2]]);
  const tags = Object.fromEntries(tagEntries);
  assert.equal(tagEntries.length, Object.keys(tags).length, 'no duplicate tags');
  assert.deepEqual(tags, {
    'og:title': title, 'og:description': description, 'og:url': site,
    'og:image': imageUrl, 'og:image:width': '1200', 'og:image:height': '630',
    'og:image:type': 'image/jpeg', 'og:image:alt': imageAlt, 'og:type': 'website',
    'twitter:card': 'summary_large_image', 'twitter:title': title, 'twitter:description': description,
    'twitter:image': imageUrl, 'twitter:image:alt': imageAlt,
  });
});
