import {  PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
// import { NextPage } from 'next';

// import { Prisma } from "@prisma/client";


// interface CourseIdPageProps {
//     params: {
//         courseId: string;
//     };
// }

const prisma = new PrismaClient();

// const CourseIdPage: NextPage<CourseIdPageProps> = async ({ params }) => {
//     const { courseId } =  params;

//     console.log('CourseId:', courseId)
//     const course = await prisma.course.findUnique({
//         where: {
//             id: Number(courseId),
//         },
//     });

//     if (!course) {
//         return <div>Course not found</div>; // Handle case where course is not found
//     }

//     return (
//         <div>
//             <h1>Course ID: {courseId}</h1>
//         </div>
//     );
// };

const CourseIdPage= async({params}:{params: {courseId: string}})=>{

    const {courseId} = await params
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
            CourseId: {courseId}
        </div>
    )
} 


export default CourseIdPage;

