"use client";

import Image from "next/image";
import Link from "next/link";
import { Apple } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Plans", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "iPhone availability", href: "/#download" },
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
              Your companion for daily Scripture. Read, explore questions with Ask Apollos, listen in your own voice, and revisit your sermons.
            </p>

            {/* Pre-launch availability */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/#download"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy hover:bg-navy-600 text-white rounded-lg transition-all text-sm"
              >
                <Apple size={20} />
                <span>Coming soon to iPhone</span>
              </a>
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

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy/40 text-sm">
            © {new Date().getFullYear()} Apollos Bible. All rights reserved.
          </p>
          <p className="text-navy/30 text-xs">
            Operated by Abundant Life Church
          </p>
        </div>
      </div>
    </footer>
  );
}
