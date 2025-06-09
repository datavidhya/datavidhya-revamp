// import { useParams } from 'next/navigation';

const CourseIdPage = ({params}:{params: {courseId:string}}) => {
   //  const { courseId } = useParams(); // Get the courseId from the URL

    return (
        <div>
            <h1>Course ID: {params.courseId}</h1>
            {/* Add more details about the course here */}
        </div>
    );
};

export default CourseIdPage;