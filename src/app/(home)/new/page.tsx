import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import { ProjectFeedBack } from "@/components/revamp/NEW/Feedbacl";
import LandingPage from "@/components/revamp/NEW/LandingPage";
import MarqueeEffect from "@/components/revamp/NEW/MarqueeEffect";
import ProjectSlider, {
  MoboleProjectSlider,
} from "@/components/revamp/NEW/MoboleProjectSlider";
import TopicCovered from "@/components/revamp/NEW/TopicCovered";
import UltimateCourse2 from "@/components/revamp/NEW/UltimateCourse2";
import ViewCounter2 from "@/components/revamp/NEW/ViewCounter2";
import Testimony2 from "@/components/revamp/Testimony/Testimony2";
import UltimateCourse from "@/components/revamp/UltimateCourseSection/UltimateCourse";
import React, { lazy, Suspense } from "react";

// const Testimonial = lazy(
//   () =>
//     import(
// "."    )
// );

// Fallback component for Suspense
const SuspenseFallback: React.FC = () => <div>Loading...</div>;

const Home: React.FC = () => {
  return (
    <div className=" overflow-hidden bg-black">
      <Suspense fallback={<SuspenseFallback />}>
        <LandingPage />
        <MarqueeEffect />
        <div className="mt-40 w-full max-sm:mt-4">
          <div className="sliderText mx-auto flex w-[72%] justify-between max-lg:w-[90%] md:flex-col items-center gap-6">
            <h3 className="text-white text-5xl font-medium flex items-center justify-center max-lg:w-full ">
              Explore over 14+ extensive projects.
            </h3>
            <p className="w-3/4 flex items-center justify-center text-center text-[20px] text-[#9C9C9C] max-lg:mt-2 mx-auto max-lg:w-full max-md:text-[14.5px]">
              We have curated 14+ extensive Data engineering projects, designed
              to deepen your practical understanding and proficiency in data
              engineering.
            </p>
          </div>
          <ProjectSlider />
          <MoboleProjectSlider />
        </div>
        <Testimony2 />
        {/* <AvailableCourse /> */}
        <UltimateCourse2 />
        {/* <ProjectFeedBack /> */}
        <TopicCovered />
        <ViewCounter2 />
        <div className="flex justify-center my-8 mx-2">
          <img
            src="/revamp/bottomimage.png"
            alt="banner"
            className="hidden md:flex"
          />
          <img
            src="/revamp/mobileBanner.jpeg"
            alt="banner"
            className="block md:hidden mx-2"
          />
        </div>
        <FAQsSection />
      </Suspense>
    </div>
  );
};

export default Home;
