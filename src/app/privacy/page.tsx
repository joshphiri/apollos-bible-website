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
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-600 mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-navy-500 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: August 18, 2026</p>

        <div className="prose prose-lg max-w-none text-navy-600">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Apollos Bible is operated by Abundant Life Church. This Privacy Policy explains what
              information we collect, how we use it, and the services that help us run the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">2. Information We Collect</h2>
            <p className="mb-4">Depending on how you use Apollos Bible, we may collect or process:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Account information such as your email address and authentication details.</li>
              <li>
                Subscription and entitlement information from Apple and RevenueCat, such as whether
                Apollos Pro is active. We do not receive or store your full card details.
              </li>
              <li>
                Bible study content you choose to save, including bookmarks, highlights, verse
                notes, journal entries, memory cards, and chat history.
              </li>
              <li>
                Voice Bible data, including voice samples you upload, voice-clone metadata,
                generated narration files, and usage minutes.
              </li>
              <li>
                Sermon content, including recording metadata, transcripts, and AI summaries.
                Original sermon audio is stored locally on your device, but it is sent for
                transcription when you ask the app to transcribe it.
              </li>
              <li>
                AI chat prompts, Bible study questions, selected scripture context, and AI
                responses used to provide Ask Apollos and chapter or sermon summaries.
              </li>
              <li>
                Basic technical information needed for security, support, error diagnosis, rate
                limits, and service reliability.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">3. How We Use Information</h2>
            <p className="mb-4">
              We use information to provide and improve the app, sync your saved Bible study data,
              manage subscriptions, generate Voice Bible narration, transcribe and summarize
              sermons, answer Bible study questions, provide support, protect against abuse, and
              comply with legal or App Store requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">4. Voice, Audio, and AI Processing</h2>
            <p className="mb-4">
              Voice Bible features use your recorded voice sample to create a voice clone and
              generate scripture narration. Sermon transcription sends audio for speech-to-text
              processing, then the transcript may be summarized by AI. Ask Apollos sends your
              questions and relevant scripture context to an AI provider so the app can respond.
            </p>
            <p className="rounded-xl border border-gold-300 bg-gold-50 p-4 text-navy-700">
              Do not upload or record another person&apos;s voice, sermon, or private information unless
              you have permission to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">5. Service Providers</h2>
            <p className="mb-4">Apollos Bible relies on trusted services to operate:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Supabase for authentication, database, storage, and backend edge functions.</li>
              <li>
                Apple App Store and RevenueCat for subscriptions, trials, purchases, restore
                purchases, and entitlement status.
              </li>
              <li>ElevenLabs for voice cloning and text-to-speech narration.</li>
              <li>Deepgram for sermon transcription.</li>
              <li>OpenAI for Ask Apollos and AI-generated summaries, including sermon summaries.</li>
              <li>
                Bible Brain / Faith Comes By Hearing and other Bible content providers for Bible
                audio or text services.
              </li>
              <li>Vercel for the public website, password reset page, Privacy Policy, and Terms pages.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">6. Storage and Retention</h2>
            <p className="mb-4">
              We keep account and synced app data while your account is active or as needed to
              provide the app. Some deleted information may remain for a limited time in backups,
              logs, fraud-prevention records, billing records, or third-party provider systems
              according to their policies and legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">7. Account Deletion</h2>
            <p className="mb-4">
              You can request account deletion from inside the app. Deleting your account removes
              your Apollos account data and synced content from our systems where technically
              possible, including voice clone records and generated Voice Bible cache tied to your
              account. Deleting your account does not automatically cancel an Apple subscription;
              you must manage cancellation through your Apple ID subscriptions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">8. Your Choices</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You can choose not to use Voice Bible, sermon transcription, or Ask Apollos.</li>
              <li>You can delete saved content from inside the app where deletion controls are provided.</li>
              <li>You can manage or cancel subscriptions through your Apple ID settings.</li>
              <li>You can contact us for privacy questions or support.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">9. International Processing</h2>
            <p className="mb-4">
              Our service providers may process data in Australia, the United States, Europe, or
              other regions where they operate. By using the app, you understand that your
              information may be processed outside your country of residence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">10. Children&apos;s Privacy</h2>
            <p className="mb-4">
              Apollos Bible is not directed to children under 13. If you believe a child has
              provided personal information without appropriate consent, contact us so we can review
              and delete it where required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">11. Security</h2>
            <p className="mb-4">
              We use technical and organizational safeguards to protect user data, but no
              internet-connected service can be guaranteed to be completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">12. Changes</h2>
            <p className="mb-4">
              We may update this Privacy Policy as the app, legal requirements, or provider setup
              changes. The latest version will be posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">13. Contact Us</h2>
            <p className="mb-4">
              For privacy questions, contact{" "}
              <a className="text-gold-700 font-semibold" href="mailto:support@apolloslifebible.com">
                support@apolloslifebible.com
              </a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
