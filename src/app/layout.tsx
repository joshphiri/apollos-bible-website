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
  description: "Your AI-powered Bible study companion. Deep insights, instant answers, and personalized study tools to transform your time in Scripture.",
  keywords: ["Bible app", "Bible study", "AI Bible", "Scripture", "Christian app"],
  openGraph: {
    title: "Apollos Bible - Study Scripture Like Never Before",
    description: "Your AI-powered Bible study companion with deep insights and personalized study tools.",
    type: "website",
    url: "https://apollosbible.com",
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
