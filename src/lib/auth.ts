// import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../../lib/db";
import { emailOTP } from "better-auth/plugins"
import { resend } from "./resend";
// If your Prisma file is located elsewhere, you can change the path
// import { PrismaClient } from "@/generated/prisma";


// const prisma = new PrismaClient();
 
export const auth = betterAuth({
   database: prismaAdapter(prisma,{
      provider: "postgresql"
   }),

   plugins: [
      emailOTP({ 
              async sendVerificationOTP({ email, otp}) { 
               await resend.emails.send({
                  from: 'DataVidhya <onboarding@resend.dev>',
                  to: [email],
                  subject: 'DataVidhya - Verify your email',
                  html: `<p>Your OTP is <strong>${otp}</strong></p>`
                });
          }, 
      }) 
  ]
})