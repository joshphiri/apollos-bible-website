import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppPreview from "@/components/AppPreview";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AuthRedirect from "@/components/AuthRedirect";

export const metadata: Metadata = {
  openGraph: {
    title: "Apollos Bible",
    description: "A Bible companion that learns with you.",
    type: "website",
    url: "https://apolloslifebible.com",
    images: [{
      url: "https://apolloslifebible.com/images/share-apollos-invitation.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
      alt: "Apollos Bible with a gold dove and an open Bible in warm sunlight.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollos Bible",
    description: "A Bible companion that learns with you.",
    images: [{
      url: "https://apolloslifebible.com/images/share-apollos-invitation.jpg",
      alt: "Apollos Bible with a gold dove and an open Bible in warm sunlight.",
    }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <AuthRedirect />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AppPreview />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
