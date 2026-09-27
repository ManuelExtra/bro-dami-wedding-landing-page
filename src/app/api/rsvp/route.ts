import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      attendance,
      familySide,
      guestCount,
      mealChoice,
      specialMessage,
    } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email address are required" },
        { status: 400 }
      );
    }

    const ticketId = `OO-${Math.floor(100000 + Math.random() * 900000)}`;

    const rsvpEntry = {
      ticketId,
      fullName,
      email,
      phone: phone || "",
      attendance,
      familySide: familySide || "General Guest / Well Wisher",
      guestCount: guestCount || "1",
      mealChoice: mealChoice || "Smokey Party Jollof & Grilled Croaker Fish",
      specialMessage: specialMessage || "",
      createdAt: new Date().toISOString(),
    };

    console.log("📥 New RSVP Received:", rsvpEntry);

    // Brevo API Integration
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (brevoApiKey) {
      try {
        // Parse list ID if provided in environment variables
        const listIdEnv = process.env.BREVO_LIST_ID;
        const listIds = listIdEnv ? [parseInt(listIdEnv, 10)] : undefined;

        // 1. Add / Update Contact in Brevo with full RSVP details & list assignment
        const contactPayload: Record<string, unknown> = {
          email,
          attributes: {
            FIRSTNAME: fullName,
            SMS: phone || "",
            PHONE: phone || "",
            FAMILY_SIDE: familySide,
            ATTENDANCE: attendance,
            GUEST_COUNT: guestCount,
            MEAL_CHOICE: mealChoice,
            SPECIAL_MESSAGE: specialMessage,
            TICKET_ID: ticketId,
          },
          updateEnabled: true,
        };

        if (listIds && !isNaN(listIds[0])) {
          contactPayload.listIds = listIds;
        }

        const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify(contactPayload),
        });

        if (!contactRes.ok) {
          const contactError = await contactRes.json();
          console.warn("⚠️ Brevo Contact List API Warning:", contactError);
        } else {
          console.log(`✅ Brevo Contact Created/Updated for ${email} (List: ${listIds ? listIds.join(",") : "Default"})`);
        }

        // 2. Send Confirmation Email via Brevo Transactional Email API
        const senderEmail = process.env.BREVO_SENDER_EMAIL || "rsvp@dami-and-ololade.wedding";
        const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
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
                    <p style="margin: 6px 0;"><strong>Party Size:</strong> ${guestCount} Person(s)</p>
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
        });

        if (!emailRes.ok) {
          const emailError = await emailRes.json();
          console.warn("⚠️ Brevo Transactional Email Error:", emailError);
        } else {
          console.log("✅ Confirmation Email Sent via Brevo to:", email);
        }
      } catch (brevoErr) {
        console.error("❌ Brevo API Exception:", brevoErr);
      }
    } else {
      console.log("💡 Brevo integration ready. Set BREVO_API_KEY and BREVO_LIST_ID in .env.local to capture contacts on your Brevo list.");
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
