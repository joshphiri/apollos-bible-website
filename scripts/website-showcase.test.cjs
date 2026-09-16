const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const digest = file => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, file))).digest("hex").toUpperCase();
const textDigest = file => crypto.createHash("sha256").update(read(file).replace(/\r\n/g, "\n")).digest("hex").toUpperCase();

test("authentication, legal documents, share metadata and dependencies are untouched", () => {
  const identities = {
    "src/components/AuthRedirect.tsx": "A603D54C9B2E993E0AF7EF610305350C831718A0DC9C0E63BC3235EA911C27FE",
    "src/app/reset-password/page.tsx": "BFD059373EF955B5648E54F6AAA85E688E2A04E1A3BC1DD31A9A3813C31516BB",
    "src/app/auth/confirmed/page.tsx": "1D2E8B94365C8FB926749A1A587E6B6C6CB92B66743BE4C10D9DF18ACAA44DCA",
    "src/app/privacy/page.tsx": "0A9E1DFAC7BE2B3A3287A7464AC11D4E8612EA70CD76F0CE67D328002074C69A",
    "src/app/terms/page.tsx": "01700B13BC5BAB444F56A57EA5D37DB60A07F7B1BF273A3B61C878574B9F524C",
    "package-lock.json": "013F9B7F84309BE618EDBF82E976538D7A9246C03895E4636DF50163A990F344",
    "src/app/page.tsx": "79F0B272EE54F175DFF4A6919B56FA0FEDA19014E9B454075827DB9C39D41D9B",
    "src/app/layout.tsx": "7316336519D1AB17506D7F2E97FE3FB695670567632968FB98807868646A247B",
  };
  // Ignore platform line endings; these hashes pin the existing released source.
  for (const [file, hash] of Object.entries(identities)) assert.equal(textDigest(file), hash, file);
});
test("the approved tour starts with Home and uses publication-ready captures", () => {
  const slides = read("src/components/showcaseSlides.ts");
  assert.deepEqual([...slides.matchAll(/label: "([^"]+)"/g)].map(match => match[1]), ["Home", "Voice Bible", "Sermons", "Verse cards"]);
  assert.doesNotMatch(slides, /Checking Access|Older library|Temporary|Replace before/i);
  assert.match(slides, /voice\.png/);
  for (const match of slides.matchAll(/src: "([^"]+)"/g)) assert.ok(fs.existsSync(path.join(root, "public", match[1])));
});
test("hero keeps approved copy, local assets and a still image fallback", () => {
  const hero = read("src/components/Hero.tsx"), phone = read("src/components/PhoneShowcase.tsx");
  assert.match(hero, /Make room<br \/><span>for the Word/);
  assert.match(hero, /prefers-reduced-motion/);
  assert.match(hero, /clearTimeout/);
  assert.match(phone, /visibility: ready \? "hidden" : "visible"/);
  assert.ok(phone.includes("/showcase/vendor/model-viewer.min.js"));
  assert.doesNotMatch(phone, /https?:\/\/|fetch\(|supabase|revenuecat/i);
});
test("camera work is cancellable and cleans up on unmount", () => {
  const phone = read("src/components/PhoneShowcase.tsx");
  for (const token of ["cancelAnimationFrame", "motionTicket !== motionRevision.current", "removeEventListener", "URL.revokeObjectURL", "cache.clear()", "Math.max(0, Math.min"]) assert.ok(phone.includes(token), token);
});
test("marketing no longer claims unsupported downloads, ratings or unlimited use", () => {
  const content = ["Hero", "Features", "HowItWorks", "Pricing", "FAQ", "Footer"].map(name => read("src/components/" + name + ".tsx")).join("\n") + read("src/app/support/page.tsx");
  assert.doesNotMatch(content, /10K\+|5\.0 Rating|Unlimited AI|5 AI questions|\$12|href="#"/);
  for (const copy of ["Apollos Pro", "480", "20 Voice Minutes", "25 Ask Apollos", "30 total", "Psalm 23"]) assert.ok(content.includes(copy), copy);
});
test("navigation returns to homepage sections and no dead About/store links remain", () => {
  for (const name of ["Navbar", "Footer"]) {
    const content = read("src/components/" + name + ".tsx");
    assert.doesNotMatch(content, /href[=:] ?"#|href: "\/about"/);
    assert.match(content, /\/#features/);
  }
  assert.match(read("src/components/Footer.tsx"), /id="download"/);
  assert.match(read("src/components/Navbar.tsx"), /aria-expanded/);
  assert.match(read("src/components/FAQ.tsx"), /aria-expanded/);
});

test("website plans and support keep currency amounts in the app", () => {
  const plans = read("src/components/Pricing.tsx");
  const support = read("src/app/support/page.tsx");
  const content = ["Hero", "Features", "HowItWorks", "Pricing", "FAQ", "Footer"].map(name => read("src/components/" + name + ".tsx")).join("\n") + support;
  assert.doesNotMatch(content, /[$£€¥]\s*\d|\b(?:AUD|USD|GBP|EUR)\s*\d|\d+(?:\.\d+)?\s*(?:AUD|USD|GBP|EUR)\b/);
  assert.doesNotMatch(plans, /plan\.price|plan\.period/);
  assert.match(plans, /No subscription needed/);
  assert.match(plans, /Monthly or yearly/);
  for (const surface of [plans, support]) {
    assert.ok(surface.includes("Subscription options and local pricing are shown in the app before you subscribe."));
  }
  assert.match(plans, /Subscriptions renew unless cancelled/);
});
test("licensed model and unmodified screenshot inputs are retained", () => {
  const originals = {
    "home.jpg": "CB581CB389D55161659CC2D6A6106A3A45D11AE2399DD130226F15A82C2E5DB5",
    "voice.png": "879EF005DB112C326F4D51C01C83143A8C95FBF0C8D91969F90DBF757F63FB14",
    "sermons.jpg": "DB144A59A2D5F15295BA46F3E02FE13110895B4A7C991E55BC57300AE7861496",
    "verse.jpg": "1726F99D5245B5F2BD4ACB1D2597F19B9C766DA335C02C307D4D9714AEEE88B7",
  };
  for (const [name, hash] of Object.entries(originals)) assert.equal(digest("public/showcase/assets/" + name), hash);
  assert.equal(digest("public/showcase/assets/apollos-phone.glb"), "7A0B7415142204FE6D44F314CB95B3ADE385F6E4F49FD03AF2065899604DBB0A");
  const footer = read("src/components/Footer.tsx");
  assert.match(footer, /tranminhluan/); assert.match(footer, /creativecommons.org\/licenses\/by\/4.0/);
  assert.ok(fs.existsSync(path.join(root, "public/showcase/vendor/LICENSE")));
  assert.equal(digest("public/showcase/vendor/model-viewer.min.js"), "283B0672384614B4847636C306FC93FE4B1FCADC76D668B4E47F0CA76BCF033B");
});

test("public marketing uses Ask Apollos and excludes temporary screenshot labels", () => {
  const content = ["Hero", "Features", "HowItWorks", "Pricing", "FAQ", "Footer", "AppPreview", "showcaseSlides"].map(name => read("src/components/" + name + (name === "showcaseSlides" ? ".ts" : ".tsx"))).join("\n") + read("src/app/support/page.tsx") + read("src/app/layout.tsx");
  assert.doesNotMatch(content, /\bAI\b|Checking Access|Checking Voice Access|Older library capture|Replace before|Temporary design/i);
  assert.match(content, /Ask Apollos/);
});
