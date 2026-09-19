"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (leftColRef.current) {
          gsap.fromTo(
            leftColRef.current.children,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: leftColRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        if (cardRef.current) {
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 36, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Start a Conversation — Let's make your next move matter."
      className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-32 bg-[#040C20] text-white isolate"
    >
      {/* Ambient Lighting & Wave Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Subtle background wave image */}
        <Image
          src="/cta_bg.png"
          alt="Glowing wave background"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-screen"
        />

        {/* Top-Right Amber / Copper Lens Glow */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF6B35]/25 via-[#FF5500]/10 to-transparent blur-[140px] pointer-events-none" />

        {/* Center / Bottom Glowing Orange Ribbon Ambience */}
        <div className="absolute -bottom-36 left-1/4 w-[750px] h-[450px] rounded-full bg-gradient-to-t from-[#FF5500]/30 via-[#FF6B35]/15 to-transparent blur-[150px] pointer-events-none" />

        {/* Deep Blue Ambient Glow */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px] pointer-events-none" />

        {/* 3D Wave Ribbon SVG */}
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-[320px] sm:h-[400px] opacity-85 pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 480 C260 360, 460 590, 780 520 C1080 460, 1260 260, 1600 220"
            stroke="url(#orange-glow-gradient)"
            strokeWidth="56"
            strokeLinecap="round"
            className="blur-[24px]"
          />
          <path
            d="M-60 500 C280 380, 480 570, 800 500 C1100 440, 1280 250, 1540 210"
            stroke="url(#orange-copper-gradient)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="orange-glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0038E2" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#FF5500" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#FF7A40" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0055FF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="orange-copper-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E5BFF" stopOpacity="0.7" />
              <stop offset="38%" stopColor="#FF7A38" stopOpacity="1" />
              <stop offset="68%" stopColor="#FF5500" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFA066" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Heading & Pitch */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase mb-5">
              START A CONVERSATION
            </span>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.06] mb-7">
              Let’s make your
              <br />
              next move
              <br />
              <span className="text-[#FF5500]">matter.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-blue-100/80 leading-relaxed max-w-md font-normal">
              Share your idea, challenge or brief.
              <br />
              We’ll help you shape the next step.
            </p>
          </div>

          {/* Right Column: Interactive White Project Card */}
          <div
            ref={cardRef}
            className="lg:col-span-6 w-full flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[560px] rounded-[28px] sm:rounded-[32px] bg-white p-7 sm:p-10 lg:p-11 text-[#0B1220] shadow-[0_32px_72px_rgba(0,10,40,0.5)] border border-[#E4EBF7]">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFF1EB] text-[#FF5500] flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight mb-2">
                    Enquiry Prepared!
                  </h3>
                  <p className="text-sm sm:text-base text-[#475467] max-w-sm mb-6 leading-relaxed">
                    Thank you, {formData.name || "friend"}! We&apos;ve received your request and will reach out to schedule our discovery call.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-[#DCE7FA] text-sm font-semibold text-[#0B1220] hover:bg-[#F0F5FF] transition-colors"
                  >
                    Edit Details
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl sm:text-[28px] font-bold text-[#0B1220] tracking-tight mb-7">
                    Tell us about your project
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Row 1: Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-2"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3.5 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-2"
                        >
                          Work Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="Your work email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3.5 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Company & Service Needed */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-2"
                        >
                          Company
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3.5 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-2"
                        >
                          Service Needed
                        </label>
                        <div className="relative">
                          <select
                            id="contact-service"
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full appearance-none rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3.5 text-sm sm:text-base text-[#0B1220] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] pr-10 cursor-pointer transition-colors"
                          >
                            <option value="">Select a service...</option>
                            <option value="website">Launch a Website</option>
                            <option value="campaign">Build a Campaign</option>
                            <option value="partnership">Creative Partnership</option>
                            <option value="social">Social & Content Direction</option>
                            <option value="branding">Brand & Identity Design</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Project Details */}
                    <div>
                      <label
                        htmlFor="contact-details"
                        className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-2"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="contact-details"
                        rows={4}
                        placeholder="Tell us about your project"
                        value={formData.details}
                        onChange={(e) =>
                          setFormData({ ...formData, details: e.target.value })
                        }
                        className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3.5 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] resize-y transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group w-full py-4 px-6 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-200 shadow-[0_8px_24px_rgba(255,85,0,0.32)] hover:shadow-[0_12px_28px_rgba(255,85,0,0.42)] active:scale-[0.99] cursor-pointer"
                      >
                        <span>Prepare My Enquiry</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Microcopy disclaimer */}
                    <div className="pt-1 flex flex-col gap-2">
                      <p className="text-[11px] sm:text-xs text-[#64748B] text-left font-light">
                        We respond within 24 hours on business days. Your details are safe with us.
                      </p>
                      <p className="text-xs text-slate-500 text-left">
                        Want an instant scope &amp; budget estimate?{" "}
                        <Link href="/contact" className="font-semibold text-[#FF5500] hover:underline inline-flex items-center gap-1">
                          Open 4-Step Scope Builder &rarr;
                        </Link>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
