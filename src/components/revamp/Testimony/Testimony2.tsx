"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TestimonyCard2 from "./TestimonyCard2";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
interface Testimony {
  id?: number;
  name: string;
  image: string;
  description: string;
  stars: number;
  linkedInUrl: string;
}

const Testimony2 = () => {
  const [testimony, setTestimony] = useState<Testimony[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimony = async () => {
    try {
      const res = await axios.get("/api/v1/admin/testimonial");

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

      setTestimony(testimonyData);
    } catch (err) {
      console.error("Error fetching testimony:", err);
      // console.error("Error details:", err.response?.data);
      setTestimony([]);
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

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center my-6 md:my-28">
        <div className="text-lg">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <div
      className={`w-full flex flex-col items-center justify-center my-14 md:my-28 ${poppins.className}`}
    >
      <h1 className="text-3xl md:text-4xl text-white text-center mt-10 font-bold leading-[120%]">
        Trusted by 1000s of Data Engineers
      </h1>
      <p className="text-lg md:text-xl font-normal leading-[150%] text-center text-neutral-500 my-2 md:mb-10">
        What our customers say about us!
      </p>

      <div
        className="w-full grid grid-cols-3 gap-8 items-center sm-px-1 md:px-10 lg:px-28 xl:px-40
       "
      >
        {testimony.map((item, index) => (
          <TestimonyCard2
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
      </div>
    </div>
  );
};

export default Testimony2;
