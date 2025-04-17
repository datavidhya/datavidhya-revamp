import { ProjectFeedbackCardProps } from "@/context/types";
import { Inter, Roboto } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["greek"], weight: "400" });

const ProjectFeedbackCard: React.FC<ProjectFeedbackCardProps> = ({
  name,
  profileImg,
  projectImgUrl,
  userReview,
  userProjectUrl,
  position,
  companyName,
}) => {
  return (
    <div className="w-[20rem] md:w-[25rem] rounded-[28px] border border-[#D7D7D7] p-4 md:p-6 shadow-sm">
      <div className="mb-4 overflow-hidden rounded-[13px] border border-[#D7D7D7]">
        <img
          src={projectImgUrl}
          alt="Project preview"
          className="h-48 w-full object-cover"
        />
      </div>

      <p
        className={`mb-4 line-clamp-4 text-xs leading-6 text-[#333333B2] ${inter.className}`}
      >
        {userReview}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 overflow-hidden rounded-full">
            <img
              src={profileImg}
              alt={`${name}'s profile`}
              className="size-full object-cover"
            />
          </div>

          <div>
            <h3 className={`font-semibold text-[#000000]  ${roboto.className}`}>
              {name}
            </h3>
            {(position || companyName) && (
              <p className="text-sm text-gray-500">
                {position}
                {position && companyName && ", "}
                {companyName}
              </p>
            )}
          </div>
        </div>

        <a
          href={userProjectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
        >
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectFeedbackCard;
