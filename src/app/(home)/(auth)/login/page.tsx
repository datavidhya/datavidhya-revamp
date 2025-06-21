'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Loader2, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage(){

   const router = useRouter();
   const[emailPending, startEmailTransition] = useTransition();
   const[email,setEmail] = useState("");

   function signInWithEmail(){
      startEmailTransition(async()=>{
         await authClient.emailOtp.sendVerificationOtp({
            email: email,
            type:'sign-in',
            fetchOptions:{
               onSuccess:()=>{
                  toast.success("Email sent");
                  router.push(`/verify-request?email=${email}`)
               },
               onError:()=>{
                  toast.error('Error sending email')
               }
            }
         })
      })
   }
   return(
      <Card>
         <CardHeader>
            <CardTitle className="text-xl text-bold">Welcome To DataVidhya</CardTitle>
            <CardDescription className="text-xs">The #1 Platform to become a
            Data Engineer.Data Engineer.</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="grid gap-3 mb-5">
               <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="datavidhya@gmail.com" required/>
               </div>
            </div>
            <Button
               onClick={signInWithEmail}
               disabled={emailPending}
            >
               {emailPending ? (

                  <>
                     <Loader2 className="size-4 animate-spin"/>
                     <span>Loading...</span>
                  </>
               ):(                  <>
                     <Send className="size-4 mr-3"/>
                     Sign in with Email
                  </>
               )}
            </Button>
         </CardContent>
      </Card>
   )
}