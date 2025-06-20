// "use client";
// import Link from "next/link"; // Correct import for Next.js Link component
// import Image from "next/image";
// import { FaLinkedin } from "react-icons/fa";

// // Define interface for CoveredImage type
// interface CoveredImage {
//   name: string;
//   profileImg: string;
//   userReview: string;
//   projectImgUrl: string;
//   userProjectUrl: string;
// }
// // 
// // Define interface for Card component props
// interface CardProps {
//   projectReviews: CoveredImage[];
// }

// export const ProjectFeedCard = ({ projectReviews }: CardProps) => {
//   return (
//     <div className="flex w-full flex-wrap justify-center  overflow-hidden">
//       {projectReviews.map((image, index) => (
//         <div
//           key={index}
//           className={`relative m-4 h-[410px] w-[335px] rounded-[10px] border border-[#434343] bg-[#202020] dark:bg-gray-100 max-2xl:m-5 max-lg:w-[310px] max-md:mx-5 max-md:my-2 max-md:h-[410px] max-md:w-full ${index > 5 ? "max-md:hidden" : ""}`}
//         >
//           <Image
//             src={image.projectImgUrl}
//             height={150}
//             width={400}
//             alt={`Project image for ${image.name}`}
//             className="h-[170px] rounded-t-[10px] "
//           />

//           <div className="w-full px-4 py-2">
//             <p className="line-clamp-6 text-left text-[16px] text-white dark:text-black ">
//               {image.userReview}
//             </p>
//           </div>

//           <div className="mt-2 flex h-14 w-full items-center justify-between px-3">
//             <div className="flex gap-2">
//               <div>
//                 <Image
//                   src={`${image.profileImg}`}
//                   height={42}
//                   width={42}
//                   alt=""
//                   className="rounded-full"
//                 ></Image>
//               </div>
//               <div className="flex flex-col">
//                 <p className="text-[18px] text-white">{image.name}</p>
//                 <span className=" mt-[-4px] text-sm text-[#787878]">
//                   Student
//                 </span>
//               </div>
//             </div>
//             <div>
//               <Link target="_blank" href={image.userProjectUrl}>
//                 <FaLinkedin color="#9C9C9C" size={24} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
  import React from 'react'
  
  export default function ProjectFeedCard() {
    return (
      <div>ProjectFeedCard</div>
    )
  }
  