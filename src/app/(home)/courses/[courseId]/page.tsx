import { NextPage } from 'next';


interface CourseIdPageProps {
    params: {
        courseId: string;
    };
}

const CourseIdPage: NextPage<CourseIdPageProps> = async ({ params }) => {
    const { courseId } = await params; 

    return (
        <div>
            <h1>Course ID: {courseId}</h1>
        </div>
    );
};

export default CourseIdPage;