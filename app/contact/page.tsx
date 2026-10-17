import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WorkWithUsSection } from "../components/WorkWithUsSection";
import { FAQ } from "../components/FAQ";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project — Fusion Folio",
  description:
    "Connect with Fusion Folio. Share your project idea and receive a response within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white text-[#0A1128]">
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* SECTION 1: Dark Liquid Wave Hero & Short Contact Form (Derived from CTASection) */}
        <section
          id="contact-hero"
          aria-label="Start a Conversation — Contact Fusion Folio"
          className="relative w-full overflow-hidden bg-[#05112F] pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 text-white isolate scroll-mt-28"
        >
          {/* Background Liquid Wave Texture */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/cta_bg.png"
              alt="Contact studio liquid blue wave background"
              fill
              priority
              sizes="100vw"
              quality={100}
              unoptimized
              className="object-cover object-center pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040C20]/65 via-[#05112F]/35 to-[#05112F]/85 pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1340px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Concise Heading, Pitch & Direct Info */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] border border-white/15 px-4 py-1.5 backdrop-blur-md mb-5">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                  <span className="font-manrope text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                    START A CONVERSATION
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.06] mb-6">
                  Let&apos;s make your
                  <br />
                  next move{" "}
                  <span className="font-serif italic font-normal text-[#FF5500]">
                    matter.
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-blue-100/85 leading-relaxed max-w-md font-normal mb-8">
                  Share your idea, challenge, or brief. We&apos;ll help you shape the next step within 24 hours.
                </p>

                {/* Compact Direct Info Pills */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 w-full">
                  <a
                    href="mailto:hello@fusionfolio.com"
                    className="inline-flex items-center gap-3 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 px-4 py-3 text-sm text-white backdrop-blur-md transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span className="font-medium">hello@fusionfolio.com</span>
                  </a>

                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/[0.07] border border-white/15 px-4 py-3 text-sm text-white/90 backdrop-blur-md">
                    <Clock className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>&lt; 24h Response</span>
                  </div>

                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/[0.07] border border-white/15 px-4 py-3 text-sm text-white/90 backdrop-blur-md">
                    <MapPin className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>NY · LDN · SF · SG</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Short White Contact Form Card */}
              <div
                id="inquiry-form"
                className="lg:col-span-6 w-full flex justify-center lg:justify-end scroll-mt-28"
              >
                <div className="w-full max-w-[560px] rounded-[28px] sm:rounded-[32px] bg-white p-7 sm:p-10 text-[#0B1220] shadow-[0_32px_72px_rgba(0,10,40,0.5)] border border-[#E4EBF7]">
                  <h2 className="font-display text-2xl sm:text-[28px] font-bold text-[#0B1220] tracking-tight mb-6">
                    Tell us about your project
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Engagement Tiers (Soft Ice Blue #F0F5FF) */}
        <WorkWithUsSection />

        {/* SECTION 3: FAQ (White bg-white) */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}


