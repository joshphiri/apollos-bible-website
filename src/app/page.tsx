import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppPreview from "@/components/AppPreview";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AuthRedirect from "@/components/AuthRedirect";

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
