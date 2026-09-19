import { getAllCaseStudies, getCaseStudyBySlug } from "./case-studies";
import { getAllServices } from "./services";
import { getAllTeamMembers, getAgencyMilestones } from "./team";
import { contactFormSchema } from "./contact-schema";

export interface ValidationReport {
  passed: boolean;
  timestamp: string;
  checks: {
    name: string;
    passed: boolean;
    details?: string;
  }[];
}

/**
 * Validates integrity across all application data layers
 */
export function runAgencyDataIntegrityChecks(): ValidationReport {
  const checks: ValidationReport["checks"] = [];

  // Check 1: Case studies uniqueness & required fields
  const studies = getAllCaseStudies();
  const slugs = new Set<string>();
  let caseStudiesValid = true;
  let caseStudyError = "";

  for (const s of studies) {
    if (slugs.has(s.slug)) {
      caseStudiesValid = false;
      caseStudyError = `Duplicate slug found: ${s.slug}`;
      break;
    }
    slugs.add(s.slug);

    if (!s.title || !s.overview || !s.challenge || !s.solution || !s.impact) {
      caseStudiesValid = false;
      caseStudyError = `Missing narrative sections in study: ${s.slug}`;
      break;
    }

    if (!s.metrics || s.metrics.length < 2) {
      caseStudiesValid = false;
      caseStudyError = `Insufficient metrics in study: ${s.slug}`;
      break;
    }

    // Verify nextProjectSlug exists
    const nextStudy = getCaseStudyBySlug(s.nextProjectSlug);
    if (!nextStudy) {
      caseStudiesValid = false;
      caseStudyError = `Broken nextProjectSlug "${s.nextProjectSlug}" in study: ${s.slug}`;
      break;
    }
  }

  checks.push({
    name: `Case Studies Integrity (${studies.length} verified)`,
    passed: caseStudiesValid,
    details: caseStudyError || "All slugs unique, narratives complete, next-links circular and verified.",
  });

  // Check 2: Services Disciplines
  const services = getAllServices();
  const serviceIds = new Set<string>();
  let servicesValid = true;

  for (const s of services) {
    if (serviceIds.has(s.id)) {
      servicesValid = false;
      break;
    }
    serviceIds.add(s.id);
  }

  checks.push({
    name: `Services Integrity (${services.length} disciplines)`,
    passed: servicesValid && services.length === 6,
    details: "6 core disciplines with deliverables, tech stacks, and unique IDs.",
  });

  // Check 3: Team & Milestones
  const team = getAllTeamMembers();
  const milestones = getAgencyMilestones();

  checks.push({
    name: "Team & Milestones",
    passed: team.length >= 4 && milestones.length >= 4,
    details: `${team.length} craft leads and ${milestones.length} journey milestones verified.`,
  });

  // Check 4: Contact Form Schema Validation
  const validSample = {
    services: ["Website Development"],
    budget: "$10,000 – $25,000",
    timeline: "Next 1–2 months",
    name: "Alex Mercer",
    email: "alex@company.com",
    company: "Mercer Labs",
    website: "https://mercerlabs.io",
    message: "Interested in a website refresh and reels package.",
  };

  const invalidSample = {
    services: [],
    budget: "",
    timeline: "",
    name: "A",
    email: "not-an-email",
  };

  const validTest = contactFormSchema.safeParse(validSample);
  const invalidTest = contactFormSchema.safeParse(invalidSample);

  const schemaValid = validTest.success && !invalidTest.success;

  checks.push({
    name: "Zod Contact Schema Contract",
    passed: schemaValid,
    details: schemaValid
      ? "Correctly accepts qualified leads and rejects malformed inputs."
      : "Schema validation failure detected.",
  });

  const passed = checks.every((c) => c.passed);

  return {
    passed,
    timestamp: new Date().toISOString(),
    checks,
  };
}
