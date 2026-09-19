import { NextResponse } from "next/server";
import { runAgencyDataIntegrityChecks } from "@/lib/data-validation";

export async function GET() {
  const report = runAgencyDataIntegrityChecks();

  return NextResponse.json(
    {
      status: report.passed ? "healthy" : "degraded",
      environment: process.env.NODE_ENV || "development",
      ...report,
    },
    { status: report.passed ? 200 : 500 }
  );
}
