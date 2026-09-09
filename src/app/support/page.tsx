import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, FileText, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Support - Apollos Bible",
  description: "Get help with the Apollos Bible app",
};

const faqs = [
  {
    question: "How do I get started with Apollos Bible?",
    answer: "Download the app from the App Store or Google Play, create an account, and start exploring! The AI study assistant is available to help you understand any passage.",
  },
  {
    question: "What Bible translations are available?",
    answer: "Apollos Bible includes ESV, NIV, KJV, and WEB translations. You can switch between translations at any time while reading.",
  },
  {
    question: "How does the AI study assistant work?",
    answer: "Simply tap the chat icon while reading any passage and ask your question. The AI draws from concordances, dictionaries, lexicons, and commentaries to provide scholarly insights.",
  },
  {
    question: "How do I record and transcribe sermons?",
    answer: "Go to the Sermons tab, tap Record, and start capturing. When finished, your sermon will be automatically transcribed with AI-powered notes and key points.",
  },
  {
    question: "What's included in the Premium subscription?",
    answer: "Premium ($12/month) includes unlimited AI conversations, sermon transcription minutes, advanced study tools, and sync across all your devices.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel anytime through your App Store or Google Play account settings. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. Your sermon recordings stay on your device, and all data is encrypted. We never share your personal information with third parties for marketing. See our Privacy Policy for details.",
  },
  {
    question: "How do I delete my account?",
    answer: "Go to Settings > Account > Delete Account. This will permanently remove all your data from our servers.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-500 to-navy-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
          <p className="text-xl text-navy-100">
            Find answers to common questions or reach out to our support team.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:support@apolloslifebible.com"
              className="flex items-center p-6 bg-cream-100 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-500">Email Support</h3>
                <p className="text-gray-600">support@apolloslifebible.com</p>
              </div>
            </a>
            
            <a
              href="/privacy"
              className="flex items-center p-6 bg-cream-100 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-500">Privacy Policy</h3>
                <p className="text-gray-600">Read our privacy practices</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-navy-500 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <summary className="font-semibold text-navy-500 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-gold-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Note */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            <strong className="text-navy-500">Response Time:</strong> We typically respond to email inquiries within 24-48 hours during business days.
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
