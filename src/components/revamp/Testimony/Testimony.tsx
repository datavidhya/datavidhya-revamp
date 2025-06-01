"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonyCard from "./TestimonyCard";
import Marquee from "react-fast-marquee";
import axios from "axios";

interface Testimony {
  id?: number;
  name: string;
  image: string;
  description: string;
  stars: number;
  linkedInUrl: string;
}

const Testimony = () => {
  const [testimony, setTestimony] = useState<Testimony[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimony = async () => {
    try {
      const res = await axios.get("/api/v1/admin/testimonial");
      // console.log("Full API response:", res);
      // console.log("Response data:", res.data);
      // console.log("Response data type:", typeof res.data);
      // console.log("Is array?", Array.isArray(res.data));
      // console.log(
      //   "Response data keys:",
      //   res.data ? Object.keys(res.data) : "No keys"
      // );

     
      let testimonyData: Testimony[] = [];

      if (Array.isArray(res.data)) {
        console.log("✅ Found array directly in res.data");
        testimonyData = res.data;
      } else if (res.data && Array.isArray(res.data.testimony)) {
        console.log("✅ Found array in res.data.testimony");
        testimonyData = res.data.testimony;
      } else if (res.data && Array.isArray(res.data.testimonials)) {
        console.log("✅ Found array in res.data.testimonials");
        testimonyData = res.data.testimonials;
      } else if (res.data && Array.isArray(res.data.data)) {
        console.log("✅ Found array in res.data.data");
        testimonyData = res.data.data;
      } else if (
        res.data &&
        res.data.result &&
        Array.isArray(res.data.result)
      ) {
        console.log("✅ Found array in res.data.result");
        testimonyData = res.data.result;
      } else if (res.data && res.data.items && Array.isArray(res.data.items)) {
        console.log("✅ Found array in res.data.items");
        testimonyData = res.data.items;
      } else {
        console.warn("❌ Could not find testimonial array in response");
        console.log(
          "Available data structure:",
          JSON.stringify(res.data, null, 2)
        );
        testimonyData = [];
      }

      // console.log("Final testimony data:", testimonyData);
      // console.log("Number of items:", testimonyData.length);


      // if (testimonyData.length > 0) {
      //   console.log("First item structure:", testimonyData[0]);
      //   console.log("Required fields check:");
      //   console.log("- name:", testimonyData[0]?.name);
      //   console.log("- image:", testimonyData[0]?.image);
      //   console.log("- description:", testimonyData[0]?.description);
      // }

      setTestimony(testimonyData);
    } catch (err) {
      console.error("Error fetching testimony:", err);
      // console.error("Error details:", err.response?.data);
      setTestimony([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimony();
  }, []);

  useEffect(() => {
    console.log("Testimony state updated:", testimony);
    console.log("Number of testimonies:", testimony.length);
  }, [testimony]);

  // Show loading state
  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center my-6 md:my-28">
        <div className="text-lg">Loading testimonials...</div>
      </div>
    );
  }

  // // Show message if no testimonials
  // if (!testimony || testimony.length === 0) {
  //   return (
  //     <div className="w-full flex flex-col items-center justify-center my-6 md:my-28">
  //       <h1 className="description-4xl md:description-5xl description-black description-center font-bold leading-[120%]">
  //         Customer <br className="block md:hidden" />{" "}
  //         <span className="relative inline-block">
  //           Testimonials
  //           <svg
  //             className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
  //             height="35"
  //             viewBox="0 0 200 35"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //             preserveAspectRatio="xMidYMid meet"
  //           >
  //             <path
  //               d="M10,25 Q100,10 190,25"
  //               stroke="#a855f7"
  //               strokeWidth="3"
  //               fill="transparent"
  //             />
  //             <path
  //               d="M10,30 Q100,15 190,30"
  //               stroke="#a855f7"
  //               strokeWidth="3"
  //               fill="transparent"
  //             />
  //           </svg>
  //         </span>
  //       </h1>
  //       <p className="description-lg md:description-xl font-normal leading-[150%] description-center description-black my-6 md:mb-20">
  //         No testimonials available at the moment.
  //       </p>
  //       <div className="text-sm text-gray-500 mt-4">
  //         Debug: Loading = {loading.toString()}, Array length ={" "}
  //         {testimony?.length || 0}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 md:my-28">
      <h1 className="text-4xl md:text-5xl text-black text-center font-bold leading-[120%]">
        Customer <br className="block md:hidden" />{" "}
        <span className="relative inline-block">
          Testimonials
          <svg
            className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
            height="35"
            viewBox="0 0 200 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M10,25 Q100,10 190,25"
              stroke="#a855f7"
              strokeWidth="3"
              fill="transparent"
            />
            <path
              d="M10,30 Q100,15 190,30"
              stroke="#a855f7"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>
        </span>
      </h1>
      <p className="text-lg md:text-xl font-normal leading-[150%] text-center text-black my-6 md:mb-20">
        What our customers say about us!
      </p>

      {/* Temporary Debug Section - Remove this after fixing */}
      {/* <div className="bg-yellow-100 p-4 rounded-lg mb-8 text-sm">
        <p>
          <strong>Debug Info:</strong>
        </p>
        <p>Loading: {loading.toString()}</p>
        <p>Testimony Array Length: {testimony.length}</p>
        <p>
          First Item:{" "}
          {testimony.length > 0 ? JSON.stringify(testimony[0]) : "No items"}
        </p>
      </div> */}

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-around relative max-w-[85vw] h-[100vh] overflow-hidden gap-2 md:gap-4 mb-6 md:mb-28">
        <div className="absolute top-0 w-full h-[10%] bg-gradient-to-b from-white to-transparent z-20"></div>
        <div className="absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-white to-transparent z-20"></div>

        {/* First Column */}
        <div className="w-1/2 xl:w-1/3 h-full overflow-hidden">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -2000 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            {testimony.map((item, index) => (
              <TestimonyCard
                key={item.id || index}
                testimony={{
                  name: item.name,
                  image: item.image,
                  description: item.description,
                  linkedInUrl: item.linkedInUrl,
                  stars: item.stars,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Second Column */}
        <div className="w-1/2 xl:w-1/3 h-full overflow-hidden">
          <motion.div
            initial={{ y: -2000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="flex flex-col"
          >
            {testimony.map((item, index) => (
              <TestimonyCard
                key={`col2-${item.id || index}`}
                testimony={{
                  name: item.name,
                  image: item.image,
                  description: item.description,
                  linkedInUrl: item.linkedInUrl,
                  stars: item.stars,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Third Column (XL screens only) */}
        <div className="w-1/3 overflow-hidden hidden xl:flex flex-col">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -2000 }}
            transition={{
              duration: 32,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            {testimony.map((item, index) => (
              <TestimonyCard
                key={`col3-${item.id || index}`}
                testimony={{
                  name: item.name,
                  image: item.image,
                  description: item.description,
                  linkedInUrl: item.linkedInUrl,
                  stars: item.stars,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden w-full">
        <Marquee direction="left" speed={50}>
          <div className="flex gap-4">
            {testimony
              .slice(0, Math.ceil(testimony.length / 2))
              .map((item, index) => (
                <TestimonyCard
                  key={`mobile1-${item.id || index}`}
                  testimony={{
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    linkedInUrl: item.linkedInUrl,
                    stars: item.stars,
                  }}
                />
              ))}
          </div>
        </Marquee>
        <Marquee direction="right" speed={50}>
          <div className="flex gap-4">
            {testimony
              .slice(Math.ceil(testimony.length / 2))
              .map((item, index) => (
                <TestimonyCard
                  key={`mobile2-${item.id || index}`}
                  testimony={{
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    linkedInUrl: item.linkedInUrl,
                    stars: item.stars,
                  }}
                />
              ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimony;
