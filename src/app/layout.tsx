import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apollos Bible - Study Scripture Like Never Before",
  description: "Read Scripture, explore questions with Ask Apollos, hear the Bible in your own voice, and revisit sermon transcripts and summaries.",
  keywords: ["Bible app", "Bible study", "Ask Apollos", "Voice Bible", "Scripture", "Christian app"],
  openGraph: {
    title: "Apollos Bible - Study Scripture Like Never Before",
    description: "Read Scripture, explore questions with Ask Apollos, and hear the Bible in your own voice.",
    type: "website",
    url: "https://apolloslifebible.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
