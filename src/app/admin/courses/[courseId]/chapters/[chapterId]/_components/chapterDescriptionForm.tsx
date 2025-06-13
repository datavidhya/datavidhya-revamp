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

import { Button } from '@/components/ui/button';
import { Cross, Pencil, X } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Editor } from '@/components/editor';
import { PreviewEditor } from '@/components/previewEditor';

interface ChapterDescriptionFormProps{
   initialData: { description: string };
   courseId: string;
   chapterId: string;
}

const formSchema = z.object({
   description: z.string().min(1,{
      message: "Description is required",
   }),
});

export const ChapterDescriptionForm=({initialData, courseId, chapterId}: ChapterDescriptionFormProps)=>{

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
         await axios.patch(`/api/v1/admin/courses/${courseId}/chapters/${chapterId}`,values);
         toast.success("Chapter updated");
         toggleEdit();
         router.refresh();
      } catch (error) {
         toast.error("Something went wrong!")
      }
   }
   return(
      <div className='mt-6 border bg-slate-100 rounded-md p-4'>
         <div className='font-medium flex items-center justify-between'>
            Chapter Description
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
            <div className={cn(
               "text-sm mt-2",
               !initialData.description && "text-slate-500 italic"
            )}>
               {!initialData.description || "No Description"}
               {initialData.description || (
                  <PreviewEditor
                     value={initialData.description}
                  />
               )}
               {/* {initialData.description || "No Description"} */}
            </div>
         )}
         {isEditing &&(
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 mt-4"
               >
                  <FormField
                     control={form.control}
                     name="description"
                     render={({field})=>(
                        <FormItem>
                           <FormControl>
                              <Editor
                                 
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