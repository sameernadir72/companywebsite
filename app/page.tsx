import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { SocialContentSection } from "./components/SocialContentSection";
import { SelectedWorkSection } from "./components/SelectedWorkSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ProcessSection } from "./components/ProcessSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { MeetFusionFolioSection } from "./components/MeetFusionFolioSection";
import { WorkWithUsSection } from "./components/WorkWithUsSection";
import { Comparison } from "./components/Comparison";
import { CaseStudies } from "./components/CaseStudies";
import { FAQ } from "./components/FAQ";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <SelectedWorkSection />
        <WhyUsSection />
        <ProcessSection />
        <IndustriesSection />
        <SocialContentSection />
        <WorkWithUsSection />
        <MeetFusionFolioSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
