import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, phone } = body;

    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
        to: [process.env.COOKOUT_NOTIFY_EMAIL ?? "artejagrier@movetokenya.org"],
        subject: `Welcome To The Cookout Registration: ${first_name} ${last_name}`,
        text: [
          "New Welcome To The Cookout registration",
          "",
          `Name: ${first_name} ${last_name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cookout registration error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
