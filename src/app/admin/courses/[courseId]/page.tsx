import { IconBadge } from '@/components/ui/icon-badge';
import {  PrismaClient } from '@prisma/client';
import { LayoutDashboard } from 'lucide-react';
import { redirect } from 'next/navigation';
import { TitleForm } from './_components/titleForm';
const prisma = new PrismaClient();

const CourseIdPage= async({params}:{params: {courseId: string}})=>{

   const {courseId} = await params;

    const course = await prisma.course.findUnique({
        where:{
            slug: courseId
        }
    })

    if(!course){
        return redirect('/');
    }
    return(
        <div>
            {/* CourseId: {courseId} */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
               <div>
                  <div className='flex items-center gap-x-2'>
                     <IconBadge icon={LayoutDashboard}/>
                     <h2 className='text-xl'>
                        Customize course
                     </h2>
                  </div>
                  <TitleForm
                    initialData={course}
                    courseId={course.slug}
                  />
               </div>
            </div>
        </div>
        
    )
} 


export default CourseIdPage;

