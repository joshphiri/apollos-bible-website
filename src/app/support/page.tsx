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
    answer: "See the homepage for launch availability. Once the app is available to you, create an account to begin reading and exploring its features.",
  },
  {
    question: "What Bible translations are available?",
    answer: "Apollos Bible includes NIV, AMP, KJV, and WEB translations. You can switch between translations at any time while reading.",
  },
  {
    question: "How does Ask Apollos work?",
    answer: "Open the Apollos tab and ask about a verse, passage, or biblical word. Ask Apollos provides explanations and Scripture references to support your study. Responses can make mistakes; compare them with Scripture and trusted study resources. Access and usage allowances are shown in the app.",
  },
  {
    question: "How do I record and transcribe sermons?",
    answer: "Open Sermon Transcriber and choose Record New Sermon. With recording access and an internet connection for processing, a saved recording can be transcribed and summarised.",
  },
  {
    question: "Where are my sermon recordings, transcripts and summaries stored?",
    answer: "Original sermon audio is stored on your phone. When you transcribe a recording, a temporary cloud copy is used for processing. Once processing succeeds and the transcript and summary are safely saved, the temporary audio copy becomes eligible for automatic cleanup after 24 hours. Failed or unfinished processing copies are retained to support retry. Your saved transcripts and summaries remain in your account and can be restored when you sign in on another device. Original audio is not restored from the cloud.",
  },
  {
    question: "What's included in Apollos Pro?",
    answer: "Apollos Pro includes Voice Bible, Ask Apollos, sermon transcription and summaries, and chapter summaries. Paid allowances include 20 Voice Minutes and 480 sermon-transcription minutes per month. Subscription options and local pricing are shown in the app before you subscribe.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Manage or cancel Apollos Pro through your Apple account settings. Access normally continues until the current subscription period ends.",
  },
  {
    question: "Is my data private?",
    answer: "Sermon audio is stored on your device and sent for transcription when you use sermon processing. Transcripts and summaries can sync to your account. Ask Apollos and Voice Bible also use service providers to deliver their features. See our Privacy Policy for processing and retention details.",
  },
  {
    question: "How do I delete my account?",
    answer: "Open Settings and choose Delete Account, then follow the confirmation steps. Review the Privacy Policy for deletion and retention details. If you also have an Apple subscription, manage it separately in your Apple Account settings.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-500 to-navy-600 text-white pt-32 pb-16 lg:pt-40">
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
