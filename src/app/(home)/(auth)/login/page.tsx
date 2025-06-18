import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage(){
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
                  <Input type="email" placeholder="datavidhya@gmail.com"/>
               </div>
            </div>
            <Button>
               <FaGoogle className="size-4 mr-3"/>
               Sign in with Google
            </Button>
         </CardContent>
      </Card>
   )
}