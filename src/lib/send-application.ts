import { createServerFn } from "@tanstack/react-start";
import { applicationSchema, type ApplicationInput } from "./application-schema";

/**
 * Everything here runs on the server only. The Resend SDK is imported
 * dynamically inside the handler so it never reaches the browser bundle,
 * and the API key is read from the environment at call time.
 */

// Resend’s shared sender: works with no verified domain, but it can only
// deliver to the address that owns the Resend account. Swap this for
// applications@evox.gg once the domain is verified.
const FALLBACK_FROM = "Vibeo Media <onboarding@resend.dev>";
const FALLBACK_TO = "support@evox.gg";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Fields in the order a human would want to read them, skipping empty ones. */
function readableFields(data: ApplicationInput) {
  return [
    ["Name", data.name],
    ["Email", data.email],
    ["WhatsApp / Telegram", data.contact],
    ["Instagram", data.instagram],
    ["Platforms", data.platforms],
    ["Country", data.country],
    ["Current agency", data.agency],
    ["Support requested", data.support],
    ["Message", data.message],
  ].filter((entry): entry is [string, string] => Boolean(entry[1] && entry[1].trim()));
}

function buildText(data: ApplicationInput) {
  const lines = readableFields(data).map(([label, value]) => `${label}:\n${value}`);
  return `New application from the Vibeo Media website\n\n${lines.join("\n\n")}\n`;
}

/**
 * Email HTML is not web HTML: Outlook and Gmail strip <style> blocks, ignore
 * flexbox and grid, and only reliably lay things out with nested tables and
 * inline styles. Everything below is written to those constraints on purpose.
 */
export function buildHtml(data: ApplicationInput) {
  const brandDark = "#15110d";
  const cream = "#f8f3e9";
  const border = "#e6e0d4";
  const muted = "#8a8378";
  const oxblood = "#8b2727";

  // The free-text message gets its own block; the rest reads as a data sheet.
  const fields = readableFields(data).filter(([label]) => label !== "Message");

  const rows = fields
    .map(
      ([label, value], i) => `
              <tr>
                <td style="padding:${i === 0 ? "0" : "14px"} 0 0 0;">
                  <div style="font:600 10px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:${muted};">${escapeHtml(label)}</div>
                  <div style="margin-top:3px;font:400 15px/1.5 Helvetica,Arial,sans-serif;color:${brandDark};word-break:break-word;">${escapeHtml(value)}</div>
                </td>
              </tr>`,
    )
    .join("");

  const messageBlock = data.message?.trim()
    ? `
          <tr>
            <td style="padding:22px 28px 0 28px;">
              <div style="font:600 10px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:${muted};">In their words</div>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:8px;">
                <tr>
                  <td style="background:${cream};border-left:3px solid ${oxblood};border-radius:0 10px 10px 0;padding:14px 16px;font:400 15px/1.6 Georgia,'Times New Roman',serif;color:${brandDark};white-space:pre-wrap;">${escapeHtml(data.message!.trim())}</td>
                </tr>
              </table>
            </td>
          </tr>`
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>New application — ${escapeHtml(data.name)}</title>
  </head>
  <body style="margin:0;padding:0;background:${cream};">
    <!-- Inbox preview line, hidden in the body itself -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      ${escapeHtml(data.name)} · ${escapeHtml(data.support)} · ${escapeHtml(data.email)}
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${cream};">
      <tr>
        <td align="center" style="padding:28px 16px;">

          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;max-width:100%;background:#ffffff;border:1px solid ${border};border-radius:18px;overflow:hidden;">

            <!-- Header -->
            <tr>
              <td style="background:${brandDark};padding:22px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="vertical-align:middle;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="width:34px;height:34px;background:${cream};border-radius:9px;text-align:center;vertical-align:middle;font:700 12px/34px Helvetica,Arial,sans-serif;color:${brandDark};">VM</td>
                          <td style="padding-left:11px;font:600 13px/1.2 Helvetica,Arial,sans-serif;letter-spacing:.16em;color:${cream};">VIBEO MEDIA</td>
                        </tr>
                      </table>
                    </td>
                    <td align="right" style="vertical-align:middle;font:600 10px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:rgba(248,243,233,.55);">
                      New application
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Name + requested track -->
            <tr>
              <td style="padding:26px 28px 0 28px;">
                <div style="font:400 26px/1.25 Georgia,'Times New Roman',serif;color:${brandDark};">${escapeHtml(data.name)}</div>
                <div style="margin-top:9px;">
                  <span style="display:inline-block;background:${cream};border:1px solid ${border};border-radius:999px;padding:5px 12px;font:600 11px/1 Helvetica,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:${oxblood};">${escapeHtml(data.support)}</span>
                </div>
              </td>
            </tr>

            <!-- Reply button -->
            <tr>
              <td style="padding:18px 28px 0 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="background:${brandDark};border-radius:9px;">
                      <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;padding:11px 20px;font:600 13px/1 Helvetica,Arial,sans-serif;color:${cream};text-decoration:none;">Reply to ${escapeHtml(data.name.split(" ")[0] ?? data.name)} &rarr;</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Divider -->
            <tr><td style="padding:22px 28px 0 28px;"><div style="height:1px;background:${border};line-height:1px;font-size:0;">&nbsp;</div></td></tr>

            <!-- Fields -->
            <tr>
              <td style="padding:18px 28px 0 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${rows}</table>
              </td>
            </tr>
${messageBlock}
            <!-- Footer -->
            <tr>
              <td style="padding:24px 28px 26px 28px;">
                <div style="height:1px;background:${border};line-height:1px;font-size:0;margin-bottom:14px;">&nbsp;</div>
                <div style="font:400 12px/1.6 Helvetica,Arial,sans-serif;color:${muted};">
                  Sent from the Vibeo Media website. Replying to this email answers
                  ${escapeHtml(data.name)} directly.
                </div>
              </td>
            </tr>

          </table>

          <div style="margin-top:14px;font:400 11px/1.5 Helvetica,Arial,sans-serif;color:${muted};">
            Vibeo Media · EVOX S.R.L.S. · Verona, Italy
          </div>

        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/**
 * The actual delivery, kept free of the RPC wrapper so it can be exercised
 * on its own. Throws on failure — callers must not report success blindly.
 */
export async function deliverApplication(data: ApplicationInput) {
  // Honeypot tripped: pretend everything is fine, send nothing.
  if (data.company) {
    return { ok: true as const, skipped: "honeypot" as const };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Loud on the server, vague to the visitor — they cannot fix our config.
    console.error("[applications] RESEND_API_KEY is not set: the application was NOT delivered.");
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.APPLICATIONS_FROM_EMAIL ?? FALLBACK_FROM,
    to: (process.env.APPLICATIONS_TO_EMAIL ?? FALLBACK_TO).split(",").map((a) => a.trim()),
    replyTo: data.email,
    subject: `New application — ${data.name} (${data.support})`,
    text: buildText(data),
    html: buildHtml(data),
  });

  if (error) {
    console.error("[applications] Resend refused the message:", error);
    throw new Error("EMAIL_SEND_FAILED");
  }

  return { ok: true as const };
}

export const sendApplication = createServerFn({ method: "POST" })
  .validator(applicationSchema)
  .handler(async ({ data }) => deliverApplication(data));

/** Exported for testing the rendered email without sending anything. */
export const __test = { buildText, buildHtml, escapeHtml };
