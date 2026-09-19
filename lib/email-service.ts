import { ContactFormData } from "./contact-schema";

export interface EmailDispatchResult {
  dispatchedToClient: boolean;
  dispatchedToTeam: boolean;
  dispatchedToWebhook: boolean;
  provider: "resend" | "mock";
  error?: string;
}

/**
 * Generates responsive, brand-aligned HTML email for client confirmation
 */
export function generateClientConfirmationHtml(data: ContactFormData): string {
  const servicesList = data.services.map((s) => `<li>${s}</li>`).join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Project Inquiry Received — Fusion Folio</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #040C20; color: #FFFFFF; margin: 0; padding: 24px 16px; }
    .container { max-width: 600px; margin: 0 auto; background: #07112C; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.12); overflow: hidden; }
    .header { padding: 36px 32px 24px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    .badge { display: inline-block; padding: 6px 14px; background: rgba(255, 85, 0, 0.15); border: 1px solid rgba(255, 85, 0, 0.4); border-radius: 9999px; font-size: 11px; font-weight: 700; color: #FF5500; text-transform: uppercase; letter-spacing: 1px; }
    .title { font-size: 26px; font-weight: 800; color: #FFFFFF; margin: 16px 0 8px; line-height: 1.2; }
    .content { padding: 32px; font-size: 15px; line-height: 1.6; color: #CBD5E1; }
    .highlight-card { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 20px; margin: 24px 0; }
    .highlight-title { font-size: 13px; font-weight: 700; color: #FF5500; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px; }
    .details-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; }
    .details-label { color: #94A3B8; }
    .details-value { color: #FFFFFF; font-weight: 600; text-align: right; }
    .cta-btn { display: inline-block; background: #FF5500; color: #FFFFFF !important; text-decoration: none; padding: 14px 28px; border-radius: 9999px; font-size: 15px; font-weight: 700; margin-top: 16px; }
    .footer { padding: 24px 32px; background: rgba(0, 0, 0, 0.25); text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid rgba(255, 255, 255, 0.06); }
    ul { margin: 6px 0 0 18px; padding: 0; color: #F8FAFC; }
    li { margin-bottom: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">Inquiry Confirmed</div>
      <h1 class="title">We received your brief, ${data.name}.</h1>
      <p style="margin: 0; color: #94A3B8; font-size: 14px;">Next step: 30-minute discovery call within 24 hours.</p>
    </div>
    <div class="content">
      <p>Thank you for reaching out to <strong>Fusion Folio</strong>. Our senior craft and strategy directors are currently reviewing your scope and technical objectives.</p>
      
      <div class="highlight-card">
        <div class="highlight-title">Your Project Scope Summary</div>
        <div class="details-row"><span class="details-label">Target Budget:</span> <span class="details-value">${data.budget}</span></div>
        <div class="details-row"><span class="details-label">Desired Timeline:</span> <span class="details-value">${data.timeline}</span></div>
        <div class="details-row" style="margin-top: 10px;"><span class="details-label">Selected Disciplines:</span></div>
        <ul>${servicesList}</ul>
      </div>

      <p>We believe in zero hand-off friction. Rather than endless discovery presentations, our first call is tailored specifically to define milestones, deliverables, and architecture.</p>

      <div style="text-align: center; margin: 32px 0 16px;">
        <a href="https://cal.com/fusionfolio/discovery" class="cta-btn">Book Discovery Session Directly &rarr;</a>
      </div>
    </div>
    <div class="footer">
      &copy; 2026 Fusion Folio — Global Creative &amp; Digital Studio.<br />
      New York &middot; London &middot; San Francisco &middot; Singapore
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generates internal agency alert HTML for the leadership team
 */
export function generateTeamAlertHtml(data: ContactFormData, submissionId: string): string {
  const servicesList = data.services.map((s) => `<li>${s}</li>`).join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>New Qualified Lead Alert</title>
  <style>
    body { font-family: monospace; background: #0B1220; color: #E2E8F0; padding: 20px; }
    .card { background: #131E36; border: 1px solid #FF5500; border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; }
    h2 { color: #FF5500; margin-top: 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; }
    .label { color: #94A3B8; font-weight: bold; width: 140px; }
    .val { color: #FFFFFF; }
  </style>
</head>
<body>
  <div class="card">
    <h2>[NEW INQUIRY] ${data.name} &mdash; ${data.company || "Direct Individual"}</h2>
    <p style="font-size: 12px; color: #94A3B8;">Submission ID: ${submissionId} &middot; Received: ${new Date().toUTCString()}</p>
    <table>
      <tr><td class="label">Name</td><td class="val">${data.name}</td></tr>
      <tr><td class="label">Work Email</td><td class="val"><a href="mailto:${data.email}" style="color: #FF5500;">${data.email}</a></td></tr>
      <tr><td class="label">Company</td><td class="val">${data.company || "N/A"}</td></tr>
      <tr><td class="label">Website</td><td class="val">${data.website ? `<a href="${data.website}" style="color: #60A5FA;">${data.website}</a>` : "N/A"}</td></tr>
      <tr><td class="label">Budget</td><td class="val">${data.budget}</td></tr>
      <tr><td class="label">Timeline</td><td class="val">${data.timeline}</td></tr>
      <tr><td class="label">Services</td><td class="val"><ul>${servicesList}</ul></td></tr>
      <tr><td class="label">Message</td><td class="val" style="white-space: pre-wrap;">${data.message || "No additional message provided."}</td></tr>
    </table>
    <div style="margin-top: 20px;">
      <a href="mailto:${data.email}?subject=Fusion%20Folio%20Discovery%20Session" style="background: #FF5500; color: #FFF; padding: 10px 18px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reply to Lead &rarr;</a>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Dispatches contact inquiry through configured channels (Resend, Webhook, or local dev fallback)
 */
export async function dispatchContactInquiry(
  data: ContactFormData,
  submissionId: string
): Promise<EmailDispatchResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const teamEmail = process.env.TEAM_NOTIFICATION_EMAIL || "hello@fusionfolio.com";
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  let dispatchedToClient = false;
  let dispatchedToTeam = false;
  let dispatchedToWebhook = false;
  let provider: "resend" | "mock" = "mock";
  let errorMessage: string | undefined;

  // 1. Dispatch Webhook Notification (Slack / Discord)
  if (discordWebhookUrl) {
    try {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `**New Qualified Project Inquiry Received!**\n**Client:** ${data.name} (${data.company || "Independent"})\n**Email:** ${data.email}\n**Budget:** ${data.budget} | **Timeline:** ${data.timeline}\n**Services:** ${data.services.join(", ")}\n**Note:** ${data.message || "None"}`,
        }),
      });
      dispatchedToWebhook = true;
    } catch (err) {
      console.error("[EmailService] Discord webhook delivery error:", err);
    }
  } else if (slackWebhookUrl) {
    try {
      await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚀 *New Fusion Folio Inquiry!*\n*Lead:* ${data.name} (<mailto:${data.email}|${data.email}>)\n*Company:* ${data.company || "N/A"}\n*Budget:* ${data.budget}\n*Timeline:* ${data.timeline}\n*Services:* ${data.services.join(", ")}`,
        }),
      });
      dispatchedToWebhook = true;
    } catch (err) {
      console.error("[EmailService] Slack webhook delivery error:", err);
    }
  }

  // 2. Dispatch via Resend if API key is provided
  if (resendApiKey) {
    provider = "resend";
    try {
      // Send Confirmation to Client
      const clientRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Fusion Folio <hello@fusionfolio.com>",
          to: [data.email],
          subject: "Project Inquiry Confirmed — Fusion Folio",
          html: generateClientConfirmationHtml(data),
        }),
      });

      if (clientRes.ok) {
        dispatchedToClient = true;
      } else {
        const err = await clientRes.text();
        console.error("[EmailService] Resend client dispatch failed:", err);
      }

      // Send Alert to Team
      const teamRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Fusion Folio Portal <leads@fusionfolio.com>",
          to: [teamEmail],
          reply_to: data.email,
          subject: `[New Lead] ${data.name} - ${data.budget}`,
          html: generateTeamAlertHtml(data, submissionId),
        }),
      });

      if (teamRes.ok) {
        dispatchedToTeam = true;
      }
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : String(err);
      console.error("[EmailService] Resend exception:", errorMessage);
    }
  } else {
    // Development / Mock fallback
    console.log(`[EmailService] Dev Mode: Simulated email dispatch for ${data.email} (ID: ${submissionId})`);
    dispatchedToClient = true;
    dispatchedToTeam = true;
  }

  return {
    dispatchedToClient,
    dispatchedToTeam,
    dispatchedToWebhook,
    provider,
    error: errorMessage,
  };
}
