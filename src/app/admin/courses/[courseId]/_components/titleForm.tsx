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

interface TitleFormProps{
   initialData:{
      title: string;
   },
   courseId: string;
}

const formSchema = z.object({
   title: z.string().min(1,{
      message: "Title is required",
   }),
});

export const TitleForm=({initialData, courseId}: TitleFormProps)=>{

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
         toast.error("Sumething went wrong!")
      }
   }
   return(
      <div className='mt-6 border bg-slate-100 rounded-md p-4'>
         <div className='font-medium flex items-center justify-between'>
            Course Title
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
            <p className="text-sm mt-2">
               {initialData.title}
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
                     name="title"
                     render={({field})=>(
                        <FormItem>
                           <FormControl>
                              <Input
                                 disabled={isSubmitting}
                                 placeholder='Python for beginners...'
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