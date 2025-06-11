'use client'

import * as z from 'zod';
import axios from "axios";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


import {Form,
   FormControl,
   FormMessage,
   FormField,
   FormItem
} from "@/components/ui/form"

import {Input} from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Cross, Pencil, X } from 'lucide-react';
import { useState } from 'react';
import { init } from 'next/dist/compiled/webpack/webpack';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FormatCurrency } from '@/lib/formatCurrency';

interface PricingFormProps{
   initialData:{
      originalPrice: number;
   },
   courseId: string;
}

const formSchema = z.object({
   originalPrice: z.coerce.number().min(1,{
      message: "originalPrice is required",
   }),
});

export const PricingForm=({initialData, courseId}: PricingFormProps)=>{

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: initialData,
   });


   const [isEditing, setIsEditing] = useState(false);

   const toggleEdit=()=> setIsEditing((current)=> !current);
   
   const router = useRouter();
   const {isSubmitting, isValid} = form.formState;

   const onSubmit = async (values: z.infer<typeof formSchema>)=>{

      try {
         await axios.patch(`/api/v1/admin/courses/${courseId}`,values);
         toast.success("Course updated");
         toggleEdit();
         router.refresh();
      } catch (error) {
         toast.error("Something went wrong!")
      }
   }
   return(
      <div className='mt-6 border bg-slate-100 rounded-md p-4'>
         <div className='font-medium flex items-center justify-between'>
            Course Pricing($)
            <Button onClick={toggleEdit} variant="ghost">
               {isEditing?(
                  <>
                     <X className='h-4 w-4 mr-2'/>
                     Cancel
                  </>
               ):(
                  <>
                     <Pencil className='h-4 w-4 mr-2'/>
                     Edit Title
                  </>
               )}
            </Button>
         </div>
         {!isEditing &&(
            <p className={cn(
               "text-sm mt-2",
               !initialData.originalPrice && "text-slate-500 italic"
            )}>
               {initialData.originalPrice ? FormatCurrency(initialData.originalPrice) : "No Pricing"}
            </p>
         )}
         {isEditing &&(
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 mt-4"
               >
                  <FormField
                     control={form.control}
                     name="originalPrice"
                     render={({field})=>(
                        <FormItem>
                           <FormControl>
                              <Input
                                 type="number"
                                 step="0.01"
                                 disabled={isSubmitting}
                                 placeholder='Price of your course in $'
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage/>
                        </FormItem>
                     )}
                  />
                  <div className='flex items-center gap-x-2'>
                     <Button type="submit" disabled={!isValid || isSubmitting}>
                        Save
                     </Button>
                  </div>
               </form>
            </Form>
         )}
      </div>
   )
}