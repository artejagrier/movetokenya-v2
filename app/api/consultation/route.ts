import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      location,
      passport_status,
      move_timeline,
      interest_type,
      moving_with,
      questions,
    } = body;

    // EMAIL TO YOU
    await resend.emails.send({
      from: "Move To Kenya <onboarding@resend.dev>",
      to: "artejagrier@movetokenya.org",
      subject: "New Move To Kenya Consultation Request",
      html: `
        <h2>New Consultation Request</h2>

        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Passport Status:</strong> ${passport_status}</p>
        <p><strong>Move Timeline:</strong> ${move_timeline}</p>
        <p><strong>Interest Type:</strong> ${interest_type}</p>
        <p><strong>Moving With:</strong> ${moving_with}</p>
        <p><strong>Questions:</strong> ${questions}</p>
      `,
    });

    // AUTO EMAIL TO CUSTOMER
    await resend.emails.send({
      from: "Move To Kenya <onboarding@resend.dev>",
      to: email,
      subject: "We Received Your Consultation Request",
      html: `
        <h2>Hello ${first_name},</h2>

        <p>
          Thank you for reaching out to MoveToKenya.org.
        </p>

        <p>
          We received your consultation request successfully and a member
          of our team will contact you within 24 hours or less.
        </p>

        <p>
          We look forward to helping you explore your relocation journey to Kenya.
        </p>

        <br />

        <p>
          — MoveToKenya.org
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}