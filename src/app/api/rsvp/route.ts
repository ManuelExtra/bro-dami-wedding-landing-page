import { NextResponse } from "next/server";

function formatToE164(phone?: string | null): string | null {
  if (!phone) return null;
  const trimmed = phone.trim();
  if (!trimmed) return null;

  // If already in international format starting with +
  if (trimmed.startsWith("+")) {
    const digitsOnly = trimmed.substring(1).replace(/\D/g, "");
    if (digitsOnly.length >= 7 && digitsOnly.length <= 15) {
      return `+${digitsOnly}`;
    }
    return null;
  }

  // Remove non-digit characters
  let digits = trimmed.replace(/\D/g, "");
  if (!digits) return null;

  // Handle Nigerian numbers starting with 0 (e.g., 07072182999 -> 2347072182999)
  if (digits.startsWith("0")) {
    digits = "234" + digits.substring(1);
  }

  // Validate E.164 length (between 7 and 15 digits total)
  if (digits.length >= 7 && digits.length <= 15) {
    return `+${digits}`;
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      attendance,
      familySide,
      specialMessage,
    } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email address are required" },
        { status: 400 }
      );
    }

    const ticketId = `OO-${Math.floor(100000 + Math.random() * 900000)}`;

    const formattedPhone = formatToE164(phone);

    const rsvpEntry = {
      ticketId,
      fullName,
      email,
      phone: formattedPhone || phone || "",
      attendance,
      familySide: familySide || "General Guest / Well Wisher",
      specialMessage: specialMessage || "",
      createdAt: new Date().toISOString(),
    };

    // Brevo API Integration
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (brevoApiKey) {
      try {
        // Parse list ID if provided in environment variables
        const listIdEnv = process.env.BREVO_LIST_ID;
        const listIds = listIdEnv ? [parseInt(listIdEnv, 10)] : undefined;

        // 1. Add / Update Contact in Brevo with full RSVP details & list assignment
        const attributes: Record<string, unknown> = {
          FIRSTNAME: fullName,
          FAMILY_SIDE: familySide,
          ATTENDANCE: attendance,
          SPECIAL_MESSAGE: specialMessage,
          TICKET_ID: ticketId,
        };

        if (formattedPhone) {
          attributes.SMS = formattedPhone;
          attributes.PHONE = formattedPhone;
        }

        const contactPayload: Record<string, unknown> = {
          email,
          attributes,
          updateEnabled: true,
        };

        if (listIds && !isNaN(listIds[0])) {
          contactPayload.listIds = listIds;
        }

        // 1. Add / Update Contact in Brevo
        const contactPromise = fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify(contactPayload),
          signal: AbortSignal.timeout(6000),
        }).then(async (res) => {
          if (!res.ok) {
            const contactError = await res.json().catch(() => ({}));
            console.warn("⚠️ Brevo Contact List API Warning:", contactError);
          }
        }).catch((err) => {
          console.warn("⚠️ Brevo Contact API Warning:", err?.message || err);
        });

        // 2. Send Confirmation Email via Brevo Transactional Email API
        const senderEmail = process.env.BREVO_SENDER_EMAIL || "damilola.ololade.love@gmail.com";
        const emailPromise = fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify({
            sender: {
              name: "Ololade & Oluwadamilola Wedding Team",
              email: senderEmail,
            },
            to: [{ email, name: fullName }],
            subject: `RSVP Confirmation Pass (${ticketId}) — Ololade & Oluwadamilola's Wedding`,
            htmlContent: `
              <div style="font-family: Arial, sans-serif; background-color: #FAF8F5; padding: 24px; color: #1B4332;">
                <div style="max-w: 580px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 16px; border: 2px solid #D96B27;">
                  <h1 style="color: #1B4332; margin-top: 0; font-size: 24px;">Ololade Martha & Oluwadamilola Ayomide</h1>
                  <h2 style="color: #D96B27; margin-top: 0; font-size: 18px;">Official RSVP Confirmation Pass</h2>
                  <p>Dear <strong>${fullName}</strong>,</p>
                  <p>Your RSVP response (<strong>${attendance.toUpperCase()}</strong>) for our upcoming Holy Matrimony has been successfully recorded in our guest registry.</p>

                  <div style="background: #F3EFEA; padding: 20px; border-radius: 12px; margin: 20px 0; font-size: 14px; border-left: 4px solid #1B4332;">
                    <p style="margin: 6px 0;"><strong>Guest Ticket Code:</strong> <span style="color: #D96B27; font-weight: bold; font-family: monospace; font-size: 16px;">${ticketId}</span></p>
                    <p style="margin: 6px 0;"><strong>Guest Affiliation:</strong> ${familySide}</p>
                    <p style="margin: 6px 0;"><strong>Attendance Status:</strong> ${attendance}</p>
                    <p style="margin: 6px 0;"><strong>Date & Time:</strong> Saturday, 21st Nov 2026 at 12:00 PM</p>
                    <p style="margin: 6px 0;"><strong>Venue:</strong> Eredo LCDA Secretariat, Epe, Lagos State</p>
                    <p style="margin: 6px 0;"><strong>Colours of the Day:</strong> Orange, Green & Chocolate</p>
                  </div>

                  <p style="font-size: 13px; color: #666666;">Note: This event is Strictly By Invitation. Please present this ticket code at entry.</p>
                  <p style="margin-bottom: 0;">With warm love & blessings,<br/><strong>Ololade & Oluwadamilola</strong></p>
                </div>
              </div>
            `,
          }),
          signal: AbortSignal.timeout(6000),
        }).then(async (res) => {
          if (!res.ok) {
            const emailError = await res.json().catch(() => ({}));
            console.warn("⚠️ Brevo Transactional Email Error:", emailError);
          }
        }).catch((err) => {
          console.warn("⚠️ Brevo Email API Warning:", err?.message || err);
        });

        await Promise.allSettled([contactPromise, emailPromise]);
      } catch (brevoErr) {
        console.warn("⚠️ Brevo Integration Warning:", brevoErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "RSVP confirmed and captured on Brevo!",
      ticketId,
      rsvp: rsvpEntry,
      brevoIntegrated: Boolean(brevoApiKey),
    });
  } catch (error) {
    console.error("RSVP Processing Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
