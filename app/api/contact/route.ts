import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { dispatchContactInquiry } from "@/lib/email-service";

export async function POST(request: Request) {
  try {
    const json = await request.json();

    // Server-side validation with Zod
    const result = contactFormSchema.safeParse(json);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your submitted inputs.",
          errors,
        },
        { status: 400 }
      );
    }

    const validData = result.data;
    const submissionId = `ff_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Dispatch via configured channel (Resend, Slack, Discord webhook, or local simulated delivery)
    const dispatchResult = await dispatchContactInquiry(validData, submissionId);

    console.log(`[API /contact] Processed inquiry ${submissionId}:`, {
      name: validData.name,
      email: validData.email,
      provider: dispatchResult.provider,
      dispatchedToClient: dispatchResult.dispatchedToClient,
      dispatchedToTeam: dispatchResult.dispatchedToTeam,
      dispatchedToWebhook: dispatchResult.dispatchedToWebhook,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your project inquiry has been received. Our team will contact you within 24 hours.",
        data: {
          submissionId,
          name: validData.name,
          email: validData.email,
          dispatched: dispatchResult.dispatchedToClient,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API /contact] Error processing submission:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected server error occurred. Please try again or email us directly at hello@fusionfolio.com",
      },
      { status: 500 }
    );
  }
}
