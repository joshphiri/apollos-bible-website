import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - Apollos Bible",
  description: "Terms of Service for the Apollos Bible app",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-600 mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-navy-500 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: August 18, 2026</p>

        <div className="prose prose-lg max-w-none text-navy-600">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              These Terms of Service govern your use of Apollos Bible. By using the app, you agree
              to these terms. If you do not agree, do not use the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">2. About Apollos Bible</h2>
            <p className="mb-4">
              Apollos Bible is a Bible study app operated by Abundant Life Church. The app includes
              Bible reading, saved notes and study content, AI Bible study tools, Voice Bible
              narration, sermon transcription and summaries, and subscription features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">3. Accounts</h2>
            <p className="mb-4">
              You are responsible for keeping your account sign-in details secure and for activity
              under your account. You must provide accurate information and must not use the app in
              a way that harms other users, the app, or third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">4. Subscriptions, Trials, and Purchases</h2>
            <p className="mb-4">
              Apollos Pro subscriptions are sold through the Apple App Store. Prices, trial
              eligibility, renewal terms, and cancellation options are shown by Apple before
              purchase. Subscriptions renew automatically unless cancelled through your Apple ID
              settings before the renewal date.
            </p>
            <p className="mb-4">
              If Voice Bible top-up minute packs or other consumable purchases are offered, they are
              used to unlock additional app usage as described in the purchase screen. Apple manages
              payment processing. We do not receive or store your full payment card details.
            </p>
            <p className="rounded-xl border border-gold-300 bg-gold-50 p-4 text-navy-700">
              Subscriptions and purchases provide access to app features and services as described
              in the purchase screen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">5. Organisation Behind Apollos Bible</h2>
            <p className="mb-4">
              Apollos Bible is operated by Abundant Life Church.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">6. Voice Bible and Voice Cloning</h2>
            <p className="mb-4">
              You may only upload or record voices that you own or have permission to use. Do not
              use Voice Bible to impersonate another person, mislead others, create harmful content,
              or violate any law or right of another person.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">7. Sermon Recording and Transcription</h2>
            <p className="mb-4">
              You are responsible for obtaining any consent needed before recording, uploading,
              transcribing, summarizing, storing, or sharing sermon audio or spoken content. Do not
              record private conversations or sensitive information without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">8. AI Bible Study Features</h2>
            <p className="mb-4">
              Ask Apollos, chapter summaries, and sermon summaries use AI. AI responses can be
              incomplete or incorrect. Always compare responses with Scripture, pastoral wisdom, and
              trusted study resources. AI responses are not professional, legal, medical, financial,
              or emergency advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">9. Your Content</h2>
            <p className="mb-4">
              You keep ownership of content you create or save in the app, such as notes, journal
              entries, voice samples, sermon transcripts, and chat prompts. You grant us the
              limited permission needed to host, process, transmit, display, sync, transcribe,
              summarize, generate, and back up that content so the app can work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">10. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the app for unlawful, abusive, deceptive, hateful, harassing, or harmful activity.</li>
              <li>Upload content you do not have permission to use.</li>
              <li>Attempt to bypass subscriptions, usage limits, security controls, or provider limits.</li>
              <li>Reverse engineer, overload, scrape, or interfere with the app or its backend services.</li>
              <li>Use AI, voice, or transcription features to violate another person&apos;s privacy, rights, or safety.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">11. Third-Party Services and Content</h2>
            <p className="mb-4">
              The app relies on services including Apple, RevenueCat, Supabase, ElevenLabs,
              Deepgram, OpenAI, Bible Brain / Faith Comes By Hearing, Bible text providers, and
              Vercel. Those services may have their own terms and policies. Some Bible text, audio,
              commentary, dictionary, lexicon, and study resources are provided by third parties and
              may be subject to separate rights and limitations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">12. Account Deletion and Cancellation</h2>
            <p className="mb-4">
              You may request account deletion from inside the app. Account deletion is separate
              from App Store subscription cancellation. To avoid future charges, cancel active
              subscriptions through your Apple ID subscriptions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">13. Apple App Store Terms</h2>
            <p className="mb-4">
              If you downloaded Apollos Bible from the Apple App Store, Apple&apos;s standard terms and
              the{" "}
              <a
                className="text-gold-700 font-semibold"
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              >
                Apple Standard End User License Agreement
              </a>{" "}
              also apply where required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">14. Service Changes</h2>
            <p className="mb-4">
              We may update, add, remove, limit, pause, or discontinue features as needed for
              security, reliability, provider availability, cost control, legal compliance, or
              product improvement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">15. No Warranty</h2>
            <p className="mb-4">
              The app is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do
              not guarantee that the app will always be available, error-free, uninterrupted, or
              that AI responses or generated content will always be accurate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">16. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, we are not liable for indirect, incidental,
              special, consequential, or punitive damages, or for loss of data, profits, goodwill,
              or service availability arising from your use of the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">17. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of Victoria, Australia, except where consumer
              protection or App Store rules require otherwise.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">18. Changes</h2>
            <p className="mb-4">
              We may update these Terms as the app changes. The latest version will be posted on
              this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy-500 mb-4">19. Contact</h2>
            <p className="mb-4">
              For questions about these Terms, contact{" "}
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
