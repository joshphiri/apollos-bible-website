"use client";

import Image from "next/image";
import Link from "next/link";


const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Plans", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Availability", href: "/#download" },
  ],
  company: [

    { label: "Support", href: "/support" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/apollos-logo.png"
                alt="Apollos Bible"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="font-display text-2xl font-semibold text-navy">
                Apollos Bible
              </span>
            </Link>
            <p className="text-navy/60 mb-6 max-w-md">
              Read Scripture, hear it in your own voice, explore Bible questions and keep the messages and reflections that matter.
            </p>

            {/* Store links remain absent until public availability is verified. */}
            <div id="download" className="space-y-2 text-navy/80">
              <h3 className="font-semibold text-lg">Preparing for launch</h3>
              <p>Public download links will be added when availability is confirmed.</p>
              <a href="/support" className="inline-block underline underline-offset-4">Contact Apollos Support</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-navy mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-navy/60 hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-navy mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-navy/60 hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-navy/70 leading-relaxed">
          3D phone: <a className="underline" href="https://sketchfab.com/3d-models/iphone-16-pro-96be8c7e49fa4f949855db3e7f2e64e0" target="_blank" rel="noopener noreferrer">Iphone 16 Pro</a> by <a className="underline" href="https://sketchfab.com/tranminhluan" target="_blank" rel="noopener noreferrer">tranminhluan</a>, <a className="underline" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Screen adapted for Apollos.
        </p>
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy/70 text-sm">
            © {new Date().getFullYear()} Apollos Bible. All rights reserved.
          </p>
          <p className="text-navy/70 text-xs">
            Operated by Abundant Life Church
          </p>
        </div>
      </div>
    </footer>
  );
}
