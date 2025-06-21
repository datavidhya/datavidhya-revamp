import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend'; // Assuming this imports a configured Resend instance

export async function POST(req: Request) {
  try {
    const { email, type } = await req.json(); // 'type' can be used to customize email subject/content

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Generate a 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // IMPORTANT: In a real application, you MUST store this OTP in your database
    // along with the user's email and an expiration timestamp.
    // This stored OTP will then be used to verify the user when they submit it.
    // For now, we're just logging it for demonstration.
    console.log(`Generated OTP for ${email}: ${otp}`);

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev', // Make sure EMAIL_FROM is set in your .env.local
      to: email,
      subject: type === 'sign-in' ? 'Your DataVidhya Sign-in OTP' : 'Your DataVidhya Verification OTP',
      html: `
        <p>Hello,</p>
        <p>Your One-Time Password (OTP) for DataVidhya is: <strong>${otp}</strong></p>
        <p>This OTP is valid for a short period. Do not share this with anyone.</p>
        <p>If you did not request this, please ignore this email.</p>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);
      return NextResponse.json({ message: 'Error sending verification email', error: error.message }, { status: 500 });
    }

    // Return a success response
    return NextResponse.json({ message: 'Verification email sent successfully!' }, { status: 200 });

  } catch (error: any) {
    console.error("API POST handler error:", error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
} 