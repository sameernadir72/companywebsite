import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers,
  Sparkles,
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
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <Navbar />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Back Link & Breadcrumbs */}
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-4 pb-8">
          <div className="flex items-center justify-between">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white/80 transition-all hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to All Work</span>
            </Link>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/40">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/work" className="hover:text-white/80 transition-colors">
                Work
              </Link>
              <span>/</span>
              <span className="text-[#FF5500] font-medium">{study.client}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF5500]">
                <Sparkles className="w-3 h-3" />
                {study.category}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                {study.industry}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-white/60">
                {study.year}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight leading-[1.08] max-w-5xl text-white">
              {study.title}
            </h1>

            <p className="font-manrope text-base sm:text-xl text-blue-100/80 max-w-3xl leading-relaxed">
              {study.overview}
            </p>

            {/* Quick Meta Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10 mt-4">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-white/40 font-mono">Client</span>
                <span className="text-base sm:text-lg font-bold text-white mt-1">{study.client}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-white/40 font-mono">Timeline</span>
                <span className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF5500]" />
                  {study.duration}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-white/40 font-mono">Discipline</span>
                <span className="text-base sm:text-lg font-bold text-white mt-1">{study.category}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-white/40 font-mono">Deliverables</span>
                <span className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#FF5500]" />
                  {study.deliverables.length} Key Outputs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Bleed Featured Hero Image */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pb-16 sm:pb-24">
          <TiltCard maxTilt={3} className="w-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/15 bg-slate-900 shadow-[0_24px_64px_rgba(0,0,0,0.6)] group">
              <Image
                src={study.heroImage}
                alt={`${study.client} Showcase`}
                fill
                priority
                sizes="(max-width: 1360px) 100vw, 1360px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040C20]/80 via-transparent to-transparent pointer-events-none" />

              {study.liveUrl && (
                <div className="absolute bottom-6 right-6 z-20">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white text-[#0B1220] px-5 py-2.5 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          </TiltCard>
        </section>

        {/* Impact & Key Metrics Row */}
        <section className="relative w-full bg-[#07112C] border-y border-white/10 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {study.metrics.map((metric, i) => (
                <div key={i} className={`flex flex-col ${i > 0 ? "pt-6 md:pt-0 md:pl-10" : ""}`}>
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF5500] tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white mt-2">
                    {metric.label}
                  </span>
                  <p className="text-sm text-white/70 mt-1.5 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Breakdown: The Challenge & The Solution */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Scope & Deliverables Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="rounded-[24px] bg-white/[0.03] border border-white/10 p-6 sm:p-8">
                <h3 className="text-xs uppercase tracking-widest text-[#FF5500] font-bold mb-4">
                  Scope &amp; Deliverables
                </h3>
                <ul className="space-y-3.5">
                  {study.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {study.testimonial && (
                <div className="rounded-[24px] bg-gradient-to-br from-[#1C5AEF]/20 to-[#FF5500]/10 border border-white/15 p-6 sm:p-8">
                  <span className="text-4xl text-[#FF5500] font-serif leading-none select-none block mb-2">
                    &ldquo;
                  </span>
                  <p className="font-manrope text-sm sm:text-base text-white/90 italic leading-relaxed">
                    {study.testimonial.quote}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="block text-sm font-bold text-white">
                      {study.testimonial.author}
                    </span>
                    <span className="block text-xs text-white/60">
                      {study.testimonial.title}, {study.testimonial.company}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-12 sm:gap-16">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-3">
                  01 · The Challenge
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-5">
                  Navigating complexity to uncover clarity.
                </h2>
                <p className="font-manrope text-base sm:text-lg text-blue-100/80 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-3">
                  02 · The Solution
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-5">
                  A connected design &amp; technical direction.
                </h2>
                <p className="font-manrope text-base sm:text-lg text-blue-100/80 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-3">
                  03 · The Impact
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-5">
                  Measurable transformation.
                </h2>
                <p className="font-manrope text-base sm:text-lg text-blue-100/80 leading-relaxed">
                  {study.impact}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pb-20 sm:pb-28">
          <div className="mb-8 flex flex-col">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF5500] mb-2">
              Visual Showcase
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Selected screens &amp; artifacts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {study.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[16/10] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-white/10 bg-slate-900 shadow-md"
              >
                <Image
                  src={img}
                  alt={`${study.client} Artifact ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Teaser */}
        <section className="relative w-full bg-[#020B1D] border-t border-white/10 py-16 sm:py-24">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
            <Link
              href={`/work/${nextStudy.slug}`}
              className="group relative flex flex-col md:flex-row items-center justify-between gap-8 rounded-[28px] sm:rounded-[32px] bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 p-8 sm:p-12 hover:border-[#FF5500]/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,85,0,0.15)]"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
                  Next Case Study
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-[#FF5500] transition-colors">
                  {nextStudy.client} — {nextStudy.tagline}
                </h3>
                <p className="text-sm sm:text-base text-white/60 mt-3 max-w-xl">
                  {nextStudy.overview}
                </p>
              </div>

              <MagneticButton>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5500] text-white shadow-[0_4px_24px_rgba(255,85,0,0.4)] transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </MagneticButton>
            </Link>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
