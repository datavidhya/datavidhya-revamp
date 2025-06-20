"use client";
import Link from "next/link"; // Correct import for Next.js Link component
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { ProjectFeedBack } from "./Feedbacl";

// Define interface for CoveredImage type
// interface CoveredImage {
//   name: string;
//   profileImg: string;
//   userReview: string;
//   projectImgUrl: string;
//   userProjectUrl: string;
// }
interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  topic: string;
}
//
// Define interface for Card component props
interface CardProps {
  projectReviews: ProjectCardProps[];
}

export const ProjectFeedCard = ({ projectReviews }: CardProps) => {
  return (
    <div className="flex w-full flex-wrap justify-center  overflow-hidden">
      {projectReviews.map((item, id) => (
        <div
          key={item.id}
          className={`relative m-4   w-[355px] rounded-[10px] border border-[#434343] bg-[#202020] dark:bg-gray-100 max-2xl:m-5 max-lg:w-[310px] max-md:mx-5 max-md:my-2 max-md:h-[410px] max-md:w-full p-3 ${
            id > 5 ? "max-md:hidden" : ""
          }`}
        >
          <Image
            src={item.image}
            height={150}
            width={400}
            alt={`Project image for ${item.image}`}
            className="h-[170px] rounded-t-[10px] "
          />

          <div className="w-full px-4 py-2">
            <p className="line-clamp-6 text-left text-[16px] text-white dark:text-black ">
              {item.description}
            </p>
          </div>

          <div className="mt-2 flex h-14 w-full items-center justify-between px-3">
            <div className="flex gap-2">
              <div>
                <Image
                  src={`${item.image}`}
                  height={42}
                  width={42}
                  alt=""
                  className="rounded-full"
                ></Image>
              </div>
              <div className="flex flex-col">
                <p className="text-[18px] text-white">{item.topic}</p>
                <span className=" mt-[-4px] text-sm text-[#787878]">
                  Student
                </span>
              </div>
            </div>
            <div>
              {item.slug}
              {item.title}
              {item.topic}
              <Link target="_blank" href={""}>
                <FaLinkedin color="#9C9C9C" size={28} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
