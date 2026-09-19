import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQ } from "../components/FAQ";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project — Fusion Folio",
  description:
    "Connect with Fusion Folio. Share your project vision, choose your deliverables, and receive a tailored proposal and discovery call within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white">
      <Navbar />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-8 pb-14 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5500] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.06] text-white">
              Start a conversation.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7A40] to-[#FF9E70]">
                Make your next move matter.
              </span>
            </h1>

            <p className="mt-6 font-manrope text-base sm:text-lg text-blue-100/80 max-w-xl leading-relaxed">
              Share your project vision, target timeline, and goals. We&apos;ll schedule a 30-minute discovery call and return a tailored proposal within 24 hours.
            </p>
          </div>
        </section>

        {/* Form & Studio Information Container */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Contacts & What Happens Next */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28">
              {/* Contact Card */}
              <div className="rounded-[28px] bg-white/[0.03] border border-white/10 p-7 sm:p-9 flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF5500] font-bold block mb-2">
                    Studio Inquiries
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Direct Contact
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:hello@fusionfolio.com"
                    className="group flex items-center gap-3.5 text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#FF5500] group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>hello@fusionfolio.com</span>
                  </a>

                  <div className="flex items-center gap-3.5 text-sm sm:text-base text-white/80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#FF5500]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-white font-medium">Under 24h Response Guarantee</span>
                      <span className="block text-xs text-white/50">Monday to Friday (Global Coverage)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-sm sm:text-base text-white/80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#FF5500]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-white font-medium">Studio Hubs</span>
                      <span className="block text-xs text-white/50">New York · London · San Francisco · Singapore</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Roadmap */}
              <div className="rounded-[28px] bg-white/[0.03] border border-white/10 p-7 sm:p-9 flex flex-col gap-6">
                <span className="text-xs uppercase tracking-widest text-[#FF5500] font-bold block">
                  What Happens Next?
                </span>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5500] text-white text-xs font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <span className="block text-sm font-bold text-white">Brief Review (24h)</span>
                      <span className="block text-xs text-white/60 leading-relaxed">
                        Our leadership team reviews your goals, tech stack, and scope requirements.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5500] text-white text-xs font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <span className="block text-sm font-bold text-white">30-Min Discovery Session</span>
                      <span className="block text-xs text-white/60 leading-relaxed">
                        We meet directly to clarify questions, align on timeline, and define deliverables.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5500] text-white text-xs font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <span className="block text-sm font-bold text-white">Fixed-Scope Proposal</span>
                      <span className="block text-xs text-white/60 leading-relaxed">
                        You receive a transparent roadmap with milestones, deliverables, and start dates.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Accessible Multi-Step Project Inquiry Client Island */}
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
