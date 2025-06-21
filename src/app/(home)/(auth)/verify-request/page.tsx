'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { emailOTP } from "better-auth/plugins";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState, useTransition } from "react";
import toast from "react-hot-toast";

export default function VerifyRequest(){

   const router = useRouter();
   const[otp, setOtp] = useState('');

   const[emailPending, startTransition] =useTransition();

   const params = useSearchParams();
   const email = params.get('email') as string;
   const isOtpCompleted = otp.length === 6;


   function verifyOtp(){
      startTransition(async()=>{
         await authClient.signIn.emailOtp({
            email: email,
            otp: otp,
            fetchOptions:{
               onSuccess:()=>{
                  toast.success("Email verified")
                  router.push("/admin")
               },
               onError:()=>{
                  toast.error("Error verifying email otp")
               }
            }
         })
      })

   }
   return(
      <Card>
         <CardHeader>
            <CardTitle>Please check your email</CardTitle>
            <CardDescription>We have sent a verification email otp to your email </CardDescription>
         </CardHeader>
         <CardContent className="space-y-6">
            <div className="flex  flex-col items-center space-y-2">
               <InputOTP value={otp} onChange={(value)=> setOtp(value)}maxLength={6}>
               <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
               </InputOTPGroup>
                  <InputOTPSeparator />
               <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
               </InputOTPGroup>
               </InputOTP>
            </div>
            <Button onClick={verifyOtp} disabled={emailPending || !isOtpCompleted} className="w-full">
               Verify Account 
            </Button>
         </CardContent>
      </Card>
   )
}