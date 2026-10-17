"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";

const serviceOptions = [
  "Launch a Website",
  "Brand & Identity Design",
  "UI/UX Product Design",
  "Reels & Short-Form Video",
  "Meta Ads & Performance",
  "Creative Partnership",
];

interface ShortFormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const initialFormState: ShortFormState = {
  name: "",
  email: "",
  company: "",
  service: "Launch a Website",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ShortFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: [formData.service || "Launch a Website"],
          budget: "Flexible / To Discuss",
          timeline: "Flexible",
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          website: "",
          message: formData.message.trim(),
        }),
      });

      const data: { success?: boolean; message?: string } = await res.json();

      if (!res.ok || !data.success) {
        setServerError(data.message || "Failed to send message. Please try again.");
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setServerError(
        "Network error. Please try again or email hello@fusionfolio.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[#FFF1EB] text-[#FF5500] flex items-center justify-center mb-5">
          <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight mb-2">
          Message Received!
        </h3>
        <p className="text-sm sm:text-base text-[#475467] max-w-sm mb-6 leading-relaxed">
          Thank you, <strong className="text-[#0B1220]">{formData.name}</strong>! We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData(initialFormState);
            setIsSubmitted(false);
          }}
          className="px-6 py-2.5 rounded-full border border-[#DCE7FA] text-sm font-semibold text-[#0B1220] hover:bg-[#F0F5FF] transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Row 1: Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="short-contact-name"
            className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-1.5"
          >
            Name <span className="text-[#FF5500]">*</span>
          </label>
          <input
            id="short-contact-name"
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="short-contact-email"
            className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-1.5"
          >
            Work Email <span className="text-[#FF5500]">*</span>
          </label>
          <input
            id="short-contact-email"
            type="email"
            required
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Company & Service Needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="short-contact-company"
            className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-1.5"
          >
            Company
          </label>
          <input
            id="short-contact-company"
            type="text"
            placeholder="Your company (optional)"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="short-contact-service"
            className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-1.5"
          >
            Service Needed
          </label>
          <div className="relative">
            <select
              id="short-contact-service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full appearance-none rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm sm:text-base text-[#0B1220] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] pr-10 cursor-pointer transition-colors"
            >
              {serviceOptions.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Row 3: Brief Message */}
      <div>
        <label
          htmlFor="short-contact-message"
          className="block text-xs sm:text-sm font-semibold text-[#0B1220] mb-1.5"
        >
          Project Details
        </label>
        <textarea
          id="short-contact-message"
          rows={3}
          placeholder="Tell us briefly about your project or goals..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm sm:text-base text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF5500]/50 focus:border-[#FF5500] resize-y transition-colors"
        />
      </div>

      {serverError && (
        <p className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
          {serverError}
        </p>
      )}

      {/* Submit Button */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full py-4 px-6 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-200 shadow-[0_8px_24px_rgba(255,85,0,0.32)] hover:shadow-[0_12px_28px_rgba(255,85,0,0.42)] active:scale-[0.99] cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] sm:text-xs text-[#64748B] text-center font-light pt-1">
        We respond within 24 hours on business days. Your details are safe with us.
      </p>
    </form>
  );
}

