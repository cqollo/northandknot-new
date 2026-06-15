import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  console.log("=== API ROUTE TRIGGERED ===");

  // 1. Verify API Key exists on Vercel
  if (!process.env.RESEND_API_KEY) {
    console.error("CRITICAL ERROR: RESEND_API_KEY is missing from Vercel Environment Variables!");
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    console.log("Incoming Payload Data:", body);

    const { firstName, lastName, email, enquiryType, budget, message } = body;

    if (!firstName || !lastName || !email) {
      console.warn("Validation Failed: Missing required fields", { firstName, lastName, email });
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    // Determine the business owner's email destination safely
    const businessOwnerEmail = process.env.OWNER_EMAIL || 'hello@northandknot.co.ke';

    console.log(`Attempting to dispatch email to business owner (${businessOwnerEmail})...`);
    
    // Email TO the business owner
    const ownerEmailPayload = await resend.emails.send({
      from: 'North & Knot <onboarding@resend.dev>',
      to: businessOwnerEmail, 
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}${enquiryType ? ` — ${enquiryType}` : ''}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2a2a2a;">
          <div style="background: #0F1510; padding: 32px; text-align: center;">
            <h1 style="color: #C8A96E; font-size: 24px; margin: 0; font-family: Georgia, serif;">North & Knot</h1>
            <p style="color: #8C7D6B; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; margin: 8px 0 0;">New Website Enquiry</p>
          </div>
          <div style="padding: 32px; background: #fafafa;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #8C7D6B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Name</td><td style="padding: 8px 0; font-size: 15px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px 0; color: #8C7D6B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #A8893E;">${email}</a></td></tr>
              ${enquiryType ? `<tr><td style="padding: 8px 0; color: #8C7D6B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Enquiry type</td><td style="padding: 8px 0; font-size: 15px;">${enquiryType}</td></tr>` : ''}
              ${budget ? `<tr><td style="padding: 8px 0; color: #8C7D6B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td><td style="padding: 8px 0; font-size: 15px;">${budget}</td></tr>` : ''}
            </table>
            ${message ? `
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
              <p style="color: #8C7D6B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">Message</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>` : ''}
          </div>
          <div style="background: #0F1510; padding: 20px 32px; text-align: center;">
            <p style="color: #6B6055; font-size: 11px; margin: 0;">northandknot.co.ke · Nairobi, Kenya</p>
          </div>
        </div>
      `,
    });

    if (ownerEmailPayload.error) {
      console.error("Resend rejected the primary owner email:", ownerEmailPayload.error);
    } else {
      console.log("Primary owner email accepted successfully. ID:", ownerEmailPayload.data?.id);
    }

    // Safe handling for the Sandbox Confirmation Email
    // Only attempts to send confirmation if you are emailing yourself during dev testing
    if (!email.includes('@example.com')) {
      console.log(`Attempting to dispatch auto-receipt to client (${email})...`);
      try {
        await resend.emails.send({
          from: 'North & Knot <onboarding@resend.dev>',
          to: email, // This will only work smoothly once your domain is verified!
          subject: 'We received your enquiry — North & Knot',
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2a2a2a;">
              <div style="background: #0F1510; padding: 32px; text-align: center;">
                <h1 style="color: #C8A96E; font-size: 24px; margin: 0; font-family: Georgia, serif;">North & Knot</h1>
                <p style="color: #8C7D6B; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; margin: 8px 0 0;">Bespoke furniture · Nairobi</p>
              </div>
              <div style="padding: 40px 32px; background: #fafafa;">
                <h2 style="font-size: 22px; margin: 0 0 16px; font-family: Georgia, serif; color: #1a1a1a;">Thank you, ${firstName}.</h2>
                <p style="font-size: 15px; line-height: 1.75; color: #555; margin: 0 0 16px;">We've received your enquiry and will be in touch within 48 hours.</p>
                <p style="font-size: 15px; line-height: 1.75; color: #555; margin: 0 0 32px;">In the meantime, feel free to browse more of our work at <a href="https://northandknot.co.ke" style="color: #A8893E;">northandknot.co.ke</a>.</p>
                <a href="https://northandknot.co.ke" style="display: inline-block; background: #C8A96E; color: #0F1510; text-decoration: none; padding: 14px 28px; font-size: 12px; font-family: Inter, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500;">View our portfolio</a>
              </div>
              <div style="background: #0F1510; padding: 20px 32px; text-align: center;">
                <p style="color: #6B6055; font-size: 11px; margin: 0;">North & Knot · Nairobi, Kenya</p>
              </div>
            </div>
          `,
        });
      } catch (clientEmailErr) {
        console.warn("Client auto-receipt failed (Likely due to unverified Resend account restrictions):", clientEmailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('SERVER FATAL: Entire API process crashed:', err);
    return NextResponse.json({ error: 'Internal Server Failure', details: err.message }, { status: 500 });
  }
}