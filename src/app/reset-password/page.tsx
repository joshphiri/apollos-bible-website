import Image from "next/image";
import ResetPasswordClient from "./ResetPasswordClient";

export const metadata = {
  title: "Reset Password - Apollos Bible",
  description: "Set a new password for your Apollos Bible account.",
};

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(160deg,#1E3A5F_0%,#2A4A6F_45%,#B8960C_100%)] px-4 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-5 flex items-center justify-center gap-3" aria-label="Apollos Bible">
          <Image
            src="/apollos-logo.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.28)]"
          />
          <h1 className="font-display text-[1.65rem] font-bold leading-none">
            Apollos <span className="text-[#F4E4A6]">Bible</span>
          </h1>
        </div>

        <section className="rounded-[22px] border border-[rgba(212,175,55,0.32)] bg-[#FFFEF7]/[0.98] p-6 text-[#1F2933] shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#B8960C]">
            Account recovery
          </p>
          <h2 className="mb-2 text-[1.7rem] font-extrabold leading-tight text-[#142A44]">
            Set a new password
          </h2>
          <ResetPasswordClient />

          <a className="mt-4 block text-center text-sm font-bold text-[#1E3A5F]" href="/">
            Back to Apollos Bible
          </a>
        </section>

        <p className="mt-5 text-center text-xs leading-relaxed text-white/75">
          For your security, reset links expire. If this page says your link is invalid, request a fresh reset link from the Apollos Bible app.
        </p>
      </div>

      <style>{`
        .reset-status[data-status=info] {
          background: #E7F0FA;
          color: #1E3A5F;
        }

        .reset-status[data-status=success] {
          background: #D1FAE5;
          color: #059669;
        }

        .reset-status[data-status=error] {
          background: #FEE2E2;
          color: #DC2626;
        }
      `}</style>
    </main>
  );
}
