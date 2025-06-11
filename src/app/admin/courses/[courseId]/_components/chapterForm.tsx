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
import { Cross, Pencil, PlusCircle, X } from 'lucide-react';
import { useState } from 'react';
import { init } from 'next/dist/compiled/webpack/webpack';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { course, Chapter } from '@prisma/client';

interface ChapterFormProps{
   initialData: course & {chapters: Chapter[]};
   courseId: string;
};

const formSchema = z.object({
   title: z.string().min(1,{
      message: "Chapter is required",
   }),
});

export const ChapterForm=({initialData, courseId}: ChapterFormProps)=>{

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         title:""
      }
   });

   const [isCreating, setIsCreating] = useState(false)

   const [isUpdating, setIsUpdating] = useState(false);

   const toggleCreating=()=> setIsCreating((current)=> !current);
   
   const router = useRouter();
   const {isSubmitting, isValid} = form.formState;

   const onSubmit = async (values: z.infer<typeof formSchema>)=>{

      try {
         await axios.post(`/api/v1/admin/courses/${courseId}/chapters`,values);
         toast.success("Chapter created");
         toggleCreating();
         router.refresh();
      } catch (error) {
         toast.error("Something went wrong!")
      }
   }
   return(
      <div className='mt-6 border bg-slate-100 rounded-md p-4'>
         <div className='font-medium flex items-center justify-between'>
            Course Chapters
            <Button onClick={toggleCreating} variant="ghost">
               {isCreating?(
                  <>
                     <X className='h-4 w-4 mr-2'/>
                     Cancel
                  </>
               ):(
                  <>
                     <PlusCircle className='h-4 w-4 mr-2'/>
                     Edit Title
                  </>
               )}
            </Button>
         </div>

         {isCreating &&(
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
                                 placeholder='Introduction to course...'
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage/>
                        </FormItem>
                     )}
                  />
                  {/* <div className='flex items-center gap-x-2'> */}
                     <Button type="submit" disabled={!isValid || isSubmitting}>
                        Create
                     </Button>
                  {/* </div> */}
               </form>
            </Form>
         )}
         {!isCreating && (
            <div className={cn(
               "text-sm mt-2",
               !initialData.chapters.length && "text-slate-500 italic"
            )}>
               {!initialData.chapters.length && "No chapters"}
            </div>
         )}
         {!isCreating && (
            <p className='text-xs text-muted-foreground'>
               Drag and drop to change position
            </p>
         )}
      </div>
   )
}