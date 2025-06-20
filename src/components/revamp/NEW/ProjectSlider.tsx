"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Example components for each slide
const Slide1: React.FC = () => (
  <div className="flex size-full flex-wrap justify-center gap-8 max-2xl:gap-10">
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0001.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0002.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0003.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0004.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0005.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0006.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

const Slide2: React.FC = () => (
  <div className="flex size-full flex-wrap justify-center gap-8 max-xl:gap-10">
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0007.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0008.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Slide8.jpeg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0010.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0011.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[225px] w-[405px] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Airflow+Tutorial.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

const Slide3: React.FC = () => (
  <div className="flex size-full flex-wrap items-center justify-center gap-8">
    <div className=" h-3/4 w-[48%] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Slide6.jpeg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className=" h-3/4 w-[48%] max-xl:w-[385px] max-lg:h-[175px] max-lg:w-[280px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Slide7.jpeg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

const ProjectSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, component: Slide1 },
    { id: 2, component: Slide2 },
    { id: 3, component: Slide3 },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const CurrentSlide = slides[currentIndex].component;

  return (
    <div className="ProjectSliderBg sliderBg Sliderborder relative mx-auto mt-10 w-[90%] p-8  max-2xl:w-4/5  max-xl:w-[90%]  max-md:hidden">
      <div className="h-full overflow-hidden rounded-lg">
        <CurrentSlide />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-[45%] top-full mt-8 -translate-y-1/2 rounded-full border border-dashed border-neutral-500 bg-neutral-800 px-3 py-2 text-white shadow hover:border-neutral-300 max-xl:left-[43%] max-lg:left-[42%]"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-[45%] top-full mt-8 -translate-y-1/2 rounded-full border border-dashed border-neutral-500 bg-neutral-800 px-3 py-2 text-white shadow hover:border-neutral-300 max-xl:right-[43%] max-lg:right-[42%]"
      >
        &#8594;
      </button>
    </div>
  );
};

const MobileSlide1: React.FC = () => (
  <div className="flex size-full flex-wrap items-center justify-center gap-4">
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0001.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0002.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0003.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

const MobileSlide2: React.FC = () => (
  <div className="flex size-full flex-wrap items-center justify-center gap-4">
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0004.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0005.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0006.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

const MobileSlide3: React.FC = () => (
  <div className="flex size-full flex-wrap items-center justify-center gap-4">
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0007.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0008.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Slide8.jpeg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

const MobileSlide4: React.FC = () => (
  <div className="flex size-full flex-wrap items-center justify-center gap-4">
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0010.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/DataVidhya+Projects+(1)_page-0011.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Airflow+Tutorial.jpg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

const MobileSlide5: React.FC = () => (
  <div className="flex size-full flex-wrap items-center justify-center gap-4">
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Slide6.jpeg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
    <div className="sliderCard h-[150px] w-[290px]">
      <img
        src={
          "https://datavidhya-static-content.s3.ap-south-1.amazonaws.com/architecture/Slide7.jpeg"
        }
        height={200}
        width={200}
        alt=""
        className="size-full rounded-[15px]"
      />
    </div>
  </div>
);

export const MoboleProjectSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, component: MobileSlide1 },
    { id: 2, component: MobileSlide2 },
    { id: 3, component: MobileSlide3 },
    { id: 4, component: MobileSlide4 },
    { id: 5, component: MobileSlide5 },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const CurrentSlide = slides[currentIndex].component;

  return (
    <div className="ProjectSliderBg  sliderBg Sliderborder relative mx-auto mt-10 hidden   w-[90%]  max-md:mt-4 max-md:flex max-sm:p-4">
      <div className="h-full overflow-hidden rounded-lg">
        <CurrentSlide />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-[45%] top-[85%] -translate-y-1/2 rounded-full border border-neutral-500 bg-neutral-800 px-3 py-2 text-white shadow hover:border-dashed hover:border-neutral-300 max-md:p-2 max-sm:left-[32%] max-sm:mt-24"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-[45%] top-[85%] -translate-y-1/2 rounded-full border border-neutral-500 bg-neutral-800 px-3 py-2 text-white shadow hover:border-dashed hover:border-neutral-300 max-md:p-2 max-sm:right-[35%] max-sm:mt-24"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default ProjectSlider;
