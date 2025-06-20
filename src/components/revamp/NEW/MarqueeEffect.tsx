import Marquee from "react-fast-marquee";
import React from "react";
import Image from "next/image";

const companyLogoArray = [
  { src: "/revamp/hero/samsung.svg" },
  { src: "/revamp/hero/monday.svg" },
  { src: "/revamp/hero/oracle.svg" },
  { src: "/revamp/hero/segment.svg" },
  { src: "/revamp/hero/zeppline.svg" },
  { src: "/revamp/hero/proto.svg" },
];

const generateImages = (logoArray: any) => {
  return logoArray.map((logoInfo: any, index: number) => (
    <Image
      src={logoInfo.src}
      height={50}
      width={180}
      key={index}
      alt={logoInfo.src}
      className="mx-4 md:w-[160px]"
    />
  ));
};

const MarqueeComponent = () => {
  return (
    <Marquee autoFill pauseOnHover>
      {generateImages(companyLogoArray)}
    </Marquee>
  );
};

const MarqueeEffect = () => {
  return (
    <div
      className=" flex items-center relative py-4 w-full max-sm:-mt-16 bg-neutral-950"
      style={{ backgroundImage: 'url("Homeicons/marquee/smokeEffect.svg")' }}
    >
      <div className=" w-4/5 mx-auto">
        <h3 className="text-gray-300 font-normal text-3xl text-center">
          Companies Where Our Students Work
        </h3>
        <div className="relative py-2 mt-4 flex items-center">
          <div className="absolute left-0 h-full w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
          <div className="absolute right-0 h-full w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
          <MarqueeComponent />
        </div>
      </div>
    </div>
  );
};

export default MarqueeEffect;
