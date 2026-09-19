"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Contact Page Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center bg-[#040C20] text-white px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
        Unable to load contact portal.
      </h1>

      <p className="font-manrope text-sm sm:text-base text-blue-100/70 max-w-md mb-8">
        We encountered an issue preparing the inquiry form. You can retry or email us directly at hello@fusionfolio.com.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white px-7 py-3 text-sm font-semibold shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
        </button>

        <a
          href="mailto:hello@fusionfolio.com"
          className="rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white px-6 py-3 text-sm font-medium transition-all"
        >
          Direct Email
        </a>
      </div>
    </div>
  );
}
