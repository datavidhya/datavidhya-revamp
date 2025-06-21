import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ message: 'Email and OTP are required' }, { status: 400 });
    }

    // --- IMPORTANT: Placeholder for actual OTP verification logic ---
    // In a real application, you would:
    // 1. Retrieve the stored OTP for the given email from your database.
    // 2. Check if the submitted 'otp' matches the stored OTP.
    // 3. Check if the OTP has expired.
    // If verification fails, return NextResponse.json({ message: 'Invalid or expired OTP' }, { status: 401 });

    console.log(`Verifying OTP for ${email}: ${otp}`);

    // For demonstration, assume OTP is always valid for now.
    // REPLACE THIS WITH ACTUAL DATABASE VERIFICATION
    const isOtpValid = true; // This should come from your database verification

    if (!isOtpValid) {
        return NextResponse.json({ message: 'Invalid or expired OTP' }, { status: 401 });
    }
    // --- End of Placeholder ---

    return NextResponse.json({ message: 'Email verified successfully!' }, { status: 200 });

  } catch (error: any) {
    console.error("API POST handler error:", error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
} 