import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/ui/icon-badge";
import { PrismaClient } from "@prisma/client";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { ChapterTitleForm } from "./_components/ChapterTitleForm";
import { ChapterDescriptionForm } from "./_components/chapterDescriptionForm";

const prisma = new PrismaClient();

const ChapterIdPage = async ({params}: {params: Promise<{courseId: string; chapterId: string}>}) => {

   const newParams = await params;
   const { courseId: courseSlug, chapterId } = newParams;
   
   const chapter = await prisma.chapter.findUnique({
      where:{
         id: chapterId,
         course: {
            slug: courseSlug,
         },
      },

   })
   return ( 
      <div className="p-6">
         <div className="flex items-center justify-between">
            <div className="w-full">
               <Link
                  href={`/admin/courses/${newParams.courseId}`}
                  className="flex items-center text-sm hover:opacity-75 transition mb-6"
               >
                   <Button>
                      <ArrowLeft
                         className="h-4 w-4 mr-2"
                      />
                      Back to course
                   </Button>
               </Link>
               <div className="flex items-center justify-between w-full">
                   <div className="flex flex-col gap-x-2">
                      <h1 className="text-2xl font-medium">
                         Chapter: {chapter?.title}
                      </h1>
                   </div>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
                  <div>
                     <div className='flex items-center gap-x-2'>
                        <IconBadge icon={LayoutDashboard}/>
                        <h2 className='text-xl'>
                           Customize chapter
                        </h2>
                     </div>
                     <ChapterTitleForm
                        initialData={{title: chapter?.title || ""}}
                        courseId={newParams.courseId}
                        chapterId={newParams.chapterId}
                     />
                     <ChapterDescriptionForm
                        initialData={{description: chapter?.description || ""}}
                        courseId={newParams.courseId}
                        chapterId={newParams.chapterId}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
}
 
export default ChapterIdPage;