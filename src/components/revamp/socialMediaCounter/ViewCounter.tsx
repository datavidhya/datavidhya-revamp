import React from "react";
import Counter from "./MediaCounter";
import Link from "next/link";
import Image from "next/image";

interface SocialMediaLinkProps {
  name: string;
  number: number;
  link: string;
  icon: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  name,
  number,
  link,
  icon,
}) => (
  <div className="flex flex-row md:flex-col justify-center max-sm:gap-4 items-center text-black">
    <Counter number={number} />
    <div className="flex items-center gap-2">
      <p className="text-center text-[1rem] font-semibold text-black ">
        {name}
      </p>
      <Link href={link}>
        <Image src={icon} height={20} width={20} alt={`${name} icon`} />
      </Link>
    </div>
  </div>
);

const ViewCounter: React.FC = () => {
  return (
    <div className="mx-auto mb-10 w-4/5 rounded-[20px] py-4 bg- max-md:w-full  max-sm:rounded-none text-black">
      <h3 className="mb-2 text-center text-[40px] font-bold text-black max-md:text-[30px]">
        Join our community...
      </h3>
      <div className="flex w-full justify-around max-md:flex-col max-md:gap-4">
        <SocialMediaLink
          name="Youtube"
          number={160}
          link="https://www.youtube.com/@DarshilParmar"
          icon="/revamp/youtubeIcon.svg"
        />
        <SocialMediaLink
          name="LinkedIn"
          number={100}
          link="https://in.linkedin.com/in/darshil-parmar?trk=public_post-text&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"
          icon="/revamp/linkedin.png"
        />
        <SocialMediaLink
          name="Twitter"
          number={25}
          link="https://x.com/parmardarshil07"
          icon="/revamp/twittericon.svg"
        />
      </div>
    </div>
  );
};

export default ViewCounter;
