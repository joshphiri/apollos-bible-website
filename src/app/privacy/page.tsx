import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Apollos Bible",
  description: "Privacy Policy for the Apollos Bible app",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy-500 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: February 17, 2026</p>
        
        <div className="prose prose-lg max-w-none text-navy-600">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Apollos Bible (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains how we 
              collect, use, and safeguard your data when you use our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-navy-400 mb-2">Account Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Email address (for account creation and login)</li>
              <li>Name (optional, for personalization)</li>
            </ul>
            
            <h3 className="text-xl font-medium text-navy-400 mb-2">Usage Data</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bible reading history and preferences</li>
              <li>Bookmarks, highlights, and journal entries</li>
              <li>AI chat conversations (for improving study recommendations)</li>
              <li>Sermon recordings and transcriptions (stored locally on your device)</li>
            </ul>
            
            <h3 className="text-xl font-medium text-navy-400 mb-2">Technical Data</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device type and operating system</li>
              <li>App version</li>
              <li>Anonymous usage analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and improve our Bible study features</li>
              <li>To personalize your study experience</li>
              <li>To sync your data across devices</li>
              <li>To process subscription payments</li>
              <li>To send important service updates (you may opt out of marketing emails)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">4. Data Storage & Security</h2>
            <p className="mb-4">
              Your data is encrypted in transit and at rest. Sermon recordings are stored locally on your 
              device and are never uploaded to our servers. We use industry-standard security measures to 
              protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">5. Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>AI Services:</strong> For Bible study assistance (queries are processed securely)</li>
              <li><strong>Payment Processing:</strong> For subscription management</li>
              <li><strong>Analytics:</strong> For app improvement (anonymized data only)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your data (bookmarks, journal entries, etc.)</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">7. Children&apos;s Privacy</h2>
            <p className="mb-4">
              Our app is not intended for children under 13. We do not knowingly collect personal 
              information from children under the age of 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> privacy@apollosbible.com
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
