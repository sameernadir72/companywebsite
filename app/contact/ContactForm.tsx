"use client";

import { useReducer, useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/contact-schema";

const serviceOptions = [
  "Launch a Website",
  "Brand & Identity Design",
  "UI/UX Product Design",
  "Reels & Short-Form Video",
  "Meta Ads & Performance",
  "Full Creative Partnership",
];

const budgetRanges = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

const timelineOptions = [
  "Immediate (< 2 wks)",
  "Next 1–2 months",
  "Next quarter",
  "Exploring / Flexible",
];

interface FormState {
  currentStep: number;
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  serverError: string | null;
}

type FormAction =
  | { type: "SET_STEP"; step: number }
  | { type: "TOGGLE_SERVICE"; service: string }
  | { type: "SET_BUDGET"; budget: string }
  | { type: "SET_TIMELINE"; timeline: string }
  | { type: "SET_FIELD"; field: keyof Pick<FormState, "name" | "email" | "company" | "website" | "message">; value: string }
  | { type: "SET_ERRORS"; errors: Record<string, string> }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; error: string }
  | { type: "RESTORE_DRAFT"; draft: Partial<FormState> }
  | { type: "RESET_FORM" };

const initialState: FormState = {
  currentStep: 1,
  services: ["Launch a Website"],
  budget: "$10,000 – $25,000",
  timeline: "Next 1–2 months",
  name: "",
  email: "",
  company: "",
  website: "",
  message: "",
  errors: {},
  isSubmitting: false,
  isSubmitted: false,
  serverError: null,
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, currentStep: action.step, errors: {}, serverError: null };
    case "TOGGLE_SERVICE": {
      const exists = state.services.includes(action.service);
      const updated = exists
        ? state.services.filter((s) => s !== action.service)
        : [...state.services, action.service];
      return { ...state, services: updated, errors: { ...state.errors, services: "" } };
    }
    case "SET_BUDGET":
      return { ...state, budget: action.budget, errors: { ...state.errors, budget: "" } };
    case "SET_TIMELINE":
      return { ...state, timeline: action.timeline, errors: { ...state.errors, timeline: "" } };
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors, isSubmitting: false };
    case "SUBMIT_START":
      return { ...state, isSubmitting: true, serverError: null };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmitting: false, isSubmitted: true };
    case "SUBMIT_ERROR":
      return { ...state, isSubmitting: false, serverError: action.error };
    case "RESTORE_DRAFT":
      return {
        ...state,
        ...action.draft,
        errors: {},
        isSubmitting: false,
        isSubmitted: false,
        serverError: null,
      };
    case "RESET_FORM":
      return { ...initialState };
    default:
      return state;
  }
}

const DRAFT_STORAGE_KEY = "fusionfolio_contact_draft_v1";

export function ContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const [liveMessage, setLiveMessage] = useState("Step 1 of 4: Select services");
  const [isDraftRestored, setIsDraftRestored] = useState(false);

  // Restore draft from sessionStorage on initial client mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          dispatch({ type: "RESTORE_DRAFT", draft: parsed });
          setIsDraftRestored(true);
        }
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  // Persist draft to sessionStorage on state updates
  useEffect(() => {
    if (state.isSubmitted) {
      try {
        sessionStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch {
        // Ignore
      }
      return;
    }

    try {
      const toSave = {
        currentStep: state.currentStep,
        services: state.services,
        budget: state.budget,
        timeline: state.timeline,
        name: state.name,
        email: state.email,
        company: state.company,
        website: state.website,
        message: state.message,
      };
      sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(toSave));
    } catch {
      // Ignore
    }
  }, [
    state.currentStep,
    state.services,
    state.budget,
    state.timeline,
    state.name,
    state.email,
    state.company,
    state.website,
    state.message,
    state.isSubmitted,
  ]);

  const clearDraft = () => {
    try {
      sessionStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      // Ignore
    }
    dispatch({ type: "RESET_FORM" });
    setIsDraftRestored(false);
  };

  // Move focus to step heading whenever step changes for keyboard/screen-reader users
  useEffect(() => {
    if (stepHeadingRef.current) {
      stepHeadingRef.current.focus();
    }
    const stepNames = ["Services", "Budget", "Timeline", "Contact Details"];
    setLiveMessage(`Step ${state.currentStep} of 4: ${stepNames[state.currentStep - 1]}`);
  }, [state.currentStep]);

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1 && state.services.length === 0) {
      newErrors.services = "Please choose at least one service.";
    }
    if (step === 2 && !state.budget) {
      newErrors.budget = "Please select an estimated budget range.";
    }
    if (step === 3 && !state.timeline) {
      newErrors.timeline = "Please select a target timeline.";
    }
    if (step === 4) {
      if (!state.name || state.name.trim().length < 2) {
        newErrors.name = "Please enter your name (at least 2 characters).";
      }
      if (!state.email || !/^\S+@\S+\.\S+$/.test(state.email)) {
        newErrors.email = "Please enter a valid work email address.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: newErrors });
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(state.currentStep)) {
      dispatch({ type: "SET_STEP", step: state.currentStep + 1 });
    }
  };

  const handleBack = () => {
    if (state.currentStep > 1) {
      dispatch({ type: "SET_STEP", step: state.currentStep - 1 });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    dispatch({ type: "SUBMIT_START" });

    const payload: ContactFormData = {
      services: state.services,
      budget: state.budget,
      timeline: state.timeline,
      name: state.name.trim(),
      email: state.email.trim(),
      company: state.company.trim(),
      website: state.website.trim(),
      message: state.message.trim(),
    };

    // Client-side Zod validation
    const clientValidation = contactFormSchema.safeParse(payload);
    if (!clientValidation.success) {
      const flattened = clientValidation.error.flatten().fieldErrors;
      const formattedErrors: Record<string, string> = {};
      for (const [key, value] of Object.entries(flattened)) {
        if (value && value[0]) formattedErrors[key] = value[0];
      }
      dispatch({ type: "SET_ERRORS", errors: formattedErrors });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        dispatch({
          type: "SUBMIT_ERROR",
          error: data.message || "Failed to submit project inquiry.",
        });
      } else {
        dispatch({ type: "SUBMIT_SUCCESS" });
      }
    } catch {
      dispatch({
        type: "SUBMIT_ERROR",
        error: "Network connection error. Please try again or email hello@fusionfolio.com.",
      });
    }
  };

  if (state.isSubmitted) {
    return (
      <div className="py-16 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-[#FFF1EB] text-[#FF5500] flex items-center justify-center mb-6">
          <CheckCircle2 className="w-11 h-11 stroke-[2.2]" />
        </div>
        <h3 className="font-display text-3xl font-bold text-[#0B1220] tracking-tight mb-3">
          Project Inquiry Received!
        </h3>
        <p className="text-base text-[#475467] max-w-md mb-8 leading-relaxed">
          Thank you, <strong className="text-[#0B1220]">{state.name}</strong>! We&apos;ve logged your scope requirements and will reach out to schedule our discovery call within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET_FORM" })}
          className="px-8 py-3 rounded-full border border-[#DCE7FA] text-sm font-semibold text-[#0B1220] hover:bg-[#F0F5FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] transition-colors"
        >
          Submit Another Scope
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Screen Reader Live Step Announcement */}
      <div className="sr-only" aria-live="polite">
        {liveMessage}
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === state.currentStep
                  ? "w-8 bg-[#FF5500]"
                  : step < state.currentStep
                  ? "w-5 bg-[#0055FF]"
                  : "w-5 bg-slate-200"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          {isDraftRestored && (
            <div className="flex items-center gap-1.5 text-[11px] text-[#FF5500] bg-[#FFF1EB] border border-[#FFD8C7] px-2.5 py-0.5 rounded-full font-medium">
              <span>Draft restored</span>
              <button
                type="button"
                onClick={clearDraft}
                className="underline hover:text-[#D94000] cursor-pointer"
                title="Clear saved draft"
              >
                (Clear)
              </button>
            </div>
          )}
          <span className="font-mono text-xs font-semibold text-slate-500">
            Step {state.currentStep} of 4
          </span>
        </div>
      </div>

      {/* Step 1: Services */}
      {state.currentStep === 1 && (
        <fieldset className="flex flex-col gap-4">
          <legend className="sr-only">Services selection</legend>
          <h2
            ref={stepHeadingRef}
            tabIndex={-1}
            className="font-display text-xl sm:text-2xl font-bold text-[#0B1220] outline-none"
          >
            What services are you looking for?
          </h2>
          <p className="text-xs sm:text-sm text-[#475467]">
            Select all disciplines relevant to your upcoming project.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {serviceOptions.map((svc) => {
              const isSelected = state.services.includes(svc);
              return (
                <button
                  key={svc}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => dispatch({ type: "TOGGLE_SERVICE", service: svc })}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] focus-visible:ring-offset-2 ${
                    isSelected
                      ? "bg-[#FF5500] text-white shadow-md shadow-orange-500/25"
                      : "bg-[#F0F5FF] border border-[#DCE7FA] text-[#0B1220] hover:border-slate-400"
                  }`}
                >
                  {svc}
                </button>
              );
            })}
          </div>

          {state.errors.services && (
            <p className="text-xs text-red-600 font-medium">{state.errors.services}</p>
          )}

          <div className="pt-6 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold px-7 py-3 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] cursor-pointer"
            >
              <span>Next: Budget</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </fieldset>
      )}

      {/* Step 2: Budget */}
      {state.currentStep === 2 && (
        <fieldset className="flex flex-col gap-4">
          <legend className="sr-only">Budget estimation</legend>
          <h2
            ref={stepHeadingRef}
            tabIndex={-1}
            className="font-display text-xl sm:text-2xl font-bold text-[#0B1220] outline-none"
          >
            What is your approximate budget?
          </h2>
          <p className="text-xs sm:text-sm text-[#475467]">
            This helps us tailor our proposal scope to the highest value outputs.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {budgetRanges.map((b) => {
              const isSelected = state.budget === b;
              return (
                <button
                  key={b}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => dispatch({ type: "SET_BUDGET", budget: b })}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium text-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055FF] focus-visible:ring-offset-2 ${
                    isSelected
                      ? "bg-[#0055FF] text-white shadow-md shadow-blue-600/25 font-semibold"
                      : "bg-[#F0F5FF] border border-[#DCE7FA] text-[#0B1220] hover:border-slate-400"
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>

          {state.errors.budget && (
            <p className="text-xs text-red-600 font-medium">{state.errors.budget}</p>
          )}

          <div className="pt-6 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 text-slate-700 font-medium px-5 py-2.5 text-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold px-7 py-3 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] cursor-pointer"
            >
              <span>Next: Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </fieldset>
      )}

      {/* Step 3: Timeline */}
      {state.currentStep === 3 && (
        <fieldset className="flex flex-col gap-4">
          <legend className="sr-only">Timeline selection</legend>
          <h2
            ref={stepHeadingRef}
            tabIndex={-1}
            className="font-display text-xl sm:text-2xl font-bold text-[#0B1220] outline-none"
          >
            When do you want to launch?
          </h2>
          <p className="text-xs sm:text-sm text-[#475467]">
            Select your ideal milestone or delivery window.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {timelineOptions.map((t) => {
              const isSelected = state.timeline === t;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => dispatch({ type: "SET_TIMELINE", timeline: t })}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium text-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055FF] focus-visible:ring-offset-2 ${
                    isSelected
                      ? "bg-[#0055FF] text-white shadow-md shadow-blue-600/25 font-semibold"
                      : "bg-[#F0F5FF] border border-[#DCE7FA] text-[#0B1220] hover:border-slate-400"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          {state.errors.timeline && (
            <p className="text-xs text-red-600 font-medium">{state.errors.timeline}</p>
          )}

          <div className="pt-6 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 text-slate-700 font-medium px-5 py-2.5 text-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold px-7 py-3 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] cursor-pointer"
            >
              <span>Next: Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </fieldset>
      )}

      {/* Step 4: Contact Details & Submit */}
      {state.currentStep === 4 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2
            ref={stepHeadingRef}
            tabIndex={-1}
            className="font-display text-xl sm:text-2xl font-bold text-[#0B1220] outline-none"
          >
            Almost there! How do we reach you?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label htmlFor="contact-name-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name-input"
                type="text"
                required
                placeholder="Alex Mercer"
                value={state.name}
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })}
                className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm text-[#0B1220] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors"
              />
              {state.errors.name && (
                <p className="text-xs text-red-600 mt-1">{state.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email-input"
                type="email"
                required
                placeholder="alex@company.com"
                value={state.email}
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })}
                className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm text-[#0B1220] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors"
              />
              {state.errors.email && (
                <p className="text-xs text-red-600 mt-1">{state.errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-company-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Company Name
              </label>
              <input
                id="contact-company-input"
                type="text"
                placeholder="Acme Inc."
                value={state.company}
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "company", value: e.target.value })}
                className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm text-[#0B1220] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-website-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Current Website
              </label>
              <input
                id="contact-website-input"
                type="url"
                placeholder="https://example.com"
                value={state.website}
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "website", value: e.target.value })}
                className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm text-[#0B1220] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Project Brief or Goal Overview
            </label>
            <textarea
              id="contact-message-input"
              rows={3}
              placeholder="Tell us about the project goals, audience, or target launch date..."
              value={state.message}
              onChange={(e) => dispatch({ type: "SET_FIELD", field: "message", value: e.target.value })}
              className="w-full rounded-xl bg-[#F0F5FF] border border-[#DCE7FA] px-4 py-3 text-sm text-[#0B1220] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors resize-y"
            />
          </div>

          {state.serverError && (
            <p className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
              {state.serverError}
            </p>
          )}

          <div className="pt-4 flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              disabled={state.isSubmitting}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 text-slate-700 font-medium px-5 py-2.5 text-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer disabled:opacity-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              disabled={state.isSubmitting}
              className="group inline-flex items-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold px-8 py-3.5 text-sm sm:text-base shadow-[0_8px_24px_rgba(255,85,0,0.32)] hover:shadow-[0_12px_28px_rgba(255,85,0,0.42)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] cursor-pointer disabled:opacity-50"
            >
              {state.isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry &amp; Book Discovery Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
