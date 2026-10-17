import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers,
} from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/CTASection";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/case-studies";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { TiltCard } from "../../components/ui/TiltCard";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found — Fusion Folio",
    };
  }

  return {
    title: `${study.client} — ${study.tagline} | Fusion Folio`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const allStudies = getAllCaseStudies();
  const nextStudy = getCaseStudyBySlug(study.nextProjectSlug) || allStudies[0];

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: study.title,
    name: `${study.client} Case Study`,
    description: study.overview,
    image: `https://fusionfolio.com${study.heroImage}`,
    datePublished: `${study.year}-01-01`,
    author: {
      "@type": "Organization",
      name: "Fusion Folio",
      url: "https://fusionfolio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Fusion Folio",
      logo: {
        "@type": "ImageObject",
        url: "https://fusionfolio.com/fusion-folio-logo.png",
      },
    },
    about: {
      "@type": "Thing",
      name: study.client,
      description: study.industry,
    },
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white text-[#0A1128]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* SECTION 1: Dark Liquid Wave Case Study Hero & Featured Showcase */}
        <section
          id="case-study-hero"
          aria-label={`${study.client} Case Study Hero`}
          className="relative w-full overflow-hidden bg-[#07112C] pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 text-white isolate scroll-mt-28"
        >
          {/* Background Liquid Wave Layer */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/services-bg.png"
              alt="Case study liquid blue wave background"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover object-center w-full h-full select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040C20]/70 via-[#07112C]/45 to-[#07112C]/95 pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            {/* Back Link & Breadcrumbs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-[#07112C] border border-white/15 px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur-md transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                <span>Back to All Work</span>
              </Link>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
                <span>/</span>
                <span className="text-[#FF5500] font-semibold">{study.client}</span>
              </div>
            </div>

            {/* Hero Header */}
            <div className="pt-10 pb-12 sm:pb-16 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                  {study.category}
                </span>
                <span className="rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-blue-100">
                  {study.industry}
                </span>
                <span className="rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-mono text-white/80">
                  {study.year}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] max-w-5xl text-white">
                {study.title}
              </h1>

              <p className="font-manrope text-base sm:text-xl text-blue-100/85 max-w-3xl leading-relaxed">
                {study.overview}
              </p>

              {/* Quick Meta Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15 mt-2">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                    Client
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white mt-1">
                    {study.client}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                    Timeline
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FF5500]" />
                    {study.duration}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                    Discipline
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white mt-1">
                    {study.category}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                    Deliverables
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#FF5500]" />
                    {study.deliverables.length} Key Outputs
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Hero Image */}
            <TiltCard maxTilt={3} className="w-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/20 bg-slate-900 shadow-[0_28px_70px_rgba(0,0,0,0.55)] group">
                <Image
                  src={study.heroImage}
                  alt={`${study.client} Showcase`}
                  fill
                  priority
                  quality={100}
                  unoptimized
                  sizes="(max-width: 1360px) 100vw, 1360px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/80 via-transparent to-transparent pointer-events-none" />

                {study.liveUrl && (
                  <div className="absolute bottom-6 right-6 z-20">
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#FF5500] text-[#0B1220] hover:text-white px-6 py-3 text-xs sm:text-sm font-semibold shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>
            </TiltCard>
          </div>
        </section>

        {/* SECTION 2: Verified Impact Metrics on Soft Ice Blue #F0F5FF (Derived from WorkWithUsSection) */}
        <section
          id="impact-metrics"
          aria-label="Verified Commercial Impact"
          className="relative w-full bg-[#F0F5FF] py-16 sm:py-24 text-[#0B1220] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-2">
                  VERIFIED OUTCOMES
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
                  Measurable commercial performance.
                </h2>
              </div>
              <span className="font-mono text-xs font-semibold text-[#1642D0] bg-white border border-[#DCE7FA] px-4 py-2 rounded-full self-start md:self-auto">
                Post-Launch Telemetry · {study.client}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {study.metrics.map((metric, i) => {
                const isHighlighted = i === 1;
                return (
                  <div
                    key={metric.label}
                    className={`rounded-[28px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                      isHighlighted
                        ? "bg-[#0055FF] text-white shadow-[0_20px_48px_rgba(0,85,255,0.28)]"
                        : "bg-white text-[#0B1220] border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.06)]"
                    }`}
                  >
                    <span
                      className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                        isHighlighted ? "text-white" : "text-[#1642D0]"
                      }`}
                    >
                      {metric.value}
                    </span>
                    <div className="mt-4">
                      <span
                        className={`text-base sm:text-lg font-bold block ${
                          isHighlighted ? "text-white" : "text-[#0B1220]"
                        }`}
                      >
                        {metric.label}
                      </span>
                      <p
                        className={`text-sm mt-1.5 leading-relaxed ${
                          isHighlighted ? "text-white/85" : "text-[#475467]"
                        }`}
                      >
                        {metric.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: Editorial Breakdown on Light #FAFAFC Canvas (Derived from AboutSection) */}
        <section
          id="narrative"
          aria-label="Case Study Challenge, Solution, and Impact"
          className="relative w-full overflow-hidden bg-[#FAFAFC] py-20 sm:py-28 lg:py-32 text-[#0A1128] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Scope & Deliverables Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
                <div className="rounded-[28px] bg-white border border-[#E4EBF7] shadow-[0_12px_36px_rgba(0,35,110,0.06)] p-7 sm:p-8">
                  <h3 className="text-xs uppercase tracking-widest text-[#FF5500] font-bold mb-5">
                    Scope &amp; Deliverables
                  </h3>
                  <ul className="space-y-3.5">
                    {study.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm font-medium text-[#0A1128]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {study.testimonial && (
                  <div className="rounded-[28px] bg-[#07112C] text-white border border-white/10 p-7 sm:p-8 shadow-[0_20px_50px_rgba(7,17,44,0.2)]">
                    <span className="text-4xl text-[#FF5500] font-serif leading-none select-none block mb-2">
                      &ldquo;
                    </span>
                    <p className="font-manrope text-sm sm:text-base text-blue-100/90 italic leading-relaxed">
                      {study.testimonial.quote}
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/15">
                      <span className="block text-sm font-bold text-white">
                        {study.testimonial.author}
                      </span>
                      <span className="block text-xs text-white/65">
                        {study.testimonial.title}, {study.testimonial.company}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Narrative Cards */}
              <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
                <div className="rounded-[28px] bg-white border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.04)] p-8 sm:p-10">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-3">
                    01 · The Challenge
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A1128] mb-4">
                    Navigating complexity to uncover clarity.
                  </h2>
                  <p className="font-manrope text-base sm:text-lg text-slate-600 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="rounded-[28px] bg-white border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.04)] p-8 sm:p-10">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1642D0] block mb-3">
                    02 · The Solution
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A1128] mb-4">
                    A connected design &amp; technical direction.
                  </h2>
                  <p className="font-manrope text-base sm:text-lg text-slate-600 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div className="rounded-[28px] bg-white border border-[#E4EBF7] shadow-[0_10px_32px_rgba(0,35,110,0.04)] p-8 sm:p-10">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-3">
                    03 · The Impact
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A1128] mb-4">
                    Measurable transformation.
                  </h2>
                  <p className="font-manrope text-base sm:text-lg text-slate-600 leading-relaxed">
                    {study.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Visual Artifact Gallery on White Canvas */}
        <section
          id="artifacts"
          aria-label="Visual Showcase Artifacts"
          className="relative w-full bg-white py-20 sm:py-28 text-[#0A1128] scroll-mt-28"
        >
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="mb-10 sm:mb-12 flex flex-col">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] mb-2">
                VISUAL SHOWCASE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
                Selected screens &amp; production artifacts.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {study.galleryImages.map((img, idx) => (
                <div
                  key={`${study.slug}-gallery-${idx}`}
                  className="group relative aspect-[16/10] overflow-hidden rounded-[24px] border border-slate-200/90 bg-[#07112C] shadow-[0_14px_40px_rgba(10,17,40,0.08)]"
                >
                  <Image
                    src={img}
                    alt={`${study.client} Artifact ${idx + 1}`}
                    fill
                    quality={100}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Next Project Teaser on Dark Wave Canvas (/background-why-us.png) */}
        <section
          id="next-project"
          aria-label="Next Case Study"
          className="relative isolate w-full overflow-hidden bg-[#05112F] py-20 sm:py-28 text-white scroll-mt-28"
        >
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/background-why-us.png"
              alt="Next project deep blue wave background"
              fill
              sizes="100vw"
              quality={100}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#05112F]/55 pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <Link
              href={`/work/${nextStudy.slug}`}
              className="group relative flex flex-col md:flex-row items-center justify-between gap-8 rounded-[28px] sm:rounded-[32px] bg-white/[0.06] backdrop-blur-xl border border-white/15 p-8 sm:p-12 hover:border-[#FF5500]/60 transition-all duration-300 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] mb-2">
                  NEXT CASE STUDY · {nextStudy.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-[#FF5500] transition-colors">
                  {nextStudy.client} — {nextStudy.tagline}
                </h3>
                <p className="text-sm sm:text-base text-blue-100/80 mt-3 max-w-xl">
                  {nextStudy.overview}
                </p>
              </div>

              <MagneticButton>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5500] text-white shadow-[0_4px_24px_rgba(255,85,0,0.45)] transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </MagneticButton>
            </Link>
          </div>
        </section>

        {/* SECTION 6: Global CTA Section (Dark Wave /cta_bg.png) */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

