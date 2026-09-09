"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://isqkhsigesacnockiprx.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzcWtoc2lnZXNhY25vY2tpcHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0OTE1ODcsImV4cCI6MjA4NzA2NzU4N30.sgp6F8_Jr8CtuAeCW3qnbOBO7-9KM9KPw_7mQNANcfE";

type StatusKind = "info" | "success" | "error";

let supabaseClient: ReturnType<typeof createClient> | null = null;

function getSupabase() {
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  return supabaseClient;
}

function readResetParams() {
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const query = new URLSearchParams(window.location.search);

  return {
    accessToken: hash.get("access_token") || query.get("access_token"),
    refreshToken: hash.get("refresh_token") || query.get("refresh_token"),
    tokenHash: query.get("token_hash") || hash.get("token_hash"),
    type: query.get("type") || hash.get("type"),
    code: query.get("code") || hash.get("code"),
  };
}

export default function ResetPasswordClient() {
  const [intro, setIntro] = useState("Checking your reset link...");
  const [statusKind, setStatusKind] = useState<StatusKind>("info");
  const [statusText, setStatusText] = useState("Checking your reset link...");
  const [isReady, setIsReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const showStatus = useCallback((kind: StatusKind, message: string) => {
    setStatusKind(kind);
    setStatusText(message);
  }, []);

  const markReady = useCallback(() => {
    setIntro(
      "Enter a new password below. After it is saved, you can return to the Apollos Bible app and sign in.",
    );
    showStatus("success", "Reset link verified.");
    setIsReady(true);
  }, [showStatus]);

  useEffect(() => {
    let isMounted = true;

    async function verifyResetLink() {
      const supabase = getSupabase();
      const { accessToken, refreshToken, tokenHash, type, code } = readResetParams();

      try {
        if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });
          if (error) throw error;
          if (isMounted) markReady();
          return;
        }

        if (tokenHash && type === "recovery") {
          const { error } = await supabase.auth.verifyOtp({
            type: "recovery",
            token_hash: tokenHash,
          });
          if (error) throw error;
          if (isMounted) markReady();
          return;
        }

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
          if (isMounted) markReady();
          return;
        }

        if (!isMounted) return;
        setIntro("This reset link is missing its recovery token.");
        showStatus(
          "error",
          "Open the latest password reset email from Apollos Bible, or request a fresh link in the app.",
        );
      } catch (error) {
        if (!isMounted) return;
        setIntro("This reset link could not be verified.");
        showStatus(
          "error",
          error instanceof Error
            ? error.message
            : "The reset link is invalid or expired. Request a fresh link from the app.",
        );
      }
    }

    verifyResetLink();

    return () => {
      isMounted = false;
    };
  }, [markReady, showStatus]);

  useEffect(() => {
    if (isReady) {
      passwordInputRef.current?.focus();
    }
  }, [isReady]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.length < 6) {
      showStatus("error", "Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      showStatus("error", "Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await getSupabase().auth.updateUser({ password });
      if (error) throw error;

      setIsReady(false);
      setIntro("Your password has been updated.");
      showStatus(
        "success",
        "Password updated. You can now return to the Apollos Bible app and sign in with your new password.",
      );
      await getSupabase().auth.signOut();
    } catch (error) {
      showStatus(
        "error",
        error instanceof Error ? error.message : "Could not update your password. Please try again.",
      );
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <p className="mb-5 text-[0.96rem] leading-relaxed text-[#687076]">{intro}</p>

      <div
        className="reset-status mb-4 flex items-start gap-2.5 rounded-xl px-3.5 py-3 text-sm leading-relaxed"
        data-status={statusKind}
        role="status"
      >
        <span>{statusText}</span>
      </div>

      {isReady ? (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-[#142A44]" htmlFor="password">
              New password
            </label>
            <input
              ref={passwordInputRef}
              className="w-full rounded-xl border-[1.5px] border-[#DFD8C8] bg-white px-4 py-3.5 text-base text-[#1F2933] outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
              id="password"
              name="password"
              type="password"
              minLength={6}
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-[#142A44]" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              className="w-full rounded-xl border-[1.5px] border-[#DFD8C8] bg-white px-4 py-3.5 text-base text-[#1F2933] outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
              id="confirm-password"
              name="confirm-password"
              type="password"
              minLength={6}
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          <button
            className="min-h-[52px] w-full rounded-[13px] bg-[linear-gradient(135deg,#D4AF37_0%,#B8960C_100%)] px-5 py-4 text-base font-extrabold text-[#142A44] disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Password"}
          </button>
        </form>
      ) : null}
    </>
  );
}
