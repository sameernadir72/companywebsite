import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function CaseStudyNotFound() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5500] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 — Project Not Found</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
          Case study vanished into the ether.
        </h1>

        <p className="font-manrope text-base sm:text-lg text-blue-100/70 max-w-md mb-8">
          The case study you are looking for might have been archived or moved. Explore our latest featured client transformations instead.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-orange-500/25 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Case Studies</span>
          </Link>
          <Link
            href="/"
            className="rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white px-6 py-3.5 text-sm font-medium transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
