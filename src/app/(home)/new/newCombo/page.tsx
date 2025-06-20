"use client";
import React, { lazy } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
// import BlueGlobalBtn from "@/components/shared components/buttons/blueGlobal";
import { courseCovered, courseProjectCovered } from "@/context/GlobalData";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import ZeroToHeroAnimation from "@/components/revamp/NEW/newCombo/ZeroToHeroAnimation";
import Testimony2 from "@/components/revamp/Testimony/Testimony2";
import BlueGlobalBtn from "@/components/revamp/NEW/newCombo/BlueGlobalBtn";
import { IconGrid } from "@/components/revamp/combopackSection/TechStack";
const iconList = [
  "/combopack/iconlist/avro.png",
  "/combopack/iconlist/aws.png",
  "/combopack/iconlist/azure.png",
  "/combopack/iconlist/bigquery.png",
  "/combopack/iconlist/csv.png",
  "/combopack/iconlist/databricks.png",
  "/combopack/iconlist/docker.png",
  "/combopack/iconlist/gcloud.png",
  "/combopack/iconlist/github.png",
  "/combopack/iconlist/kafka.png",
  "/combopack/iconlist/looker.png",
  "/combopack/iconlist/mage.png",
  "/combopack/iconlist/microsoft.png",
  "/combopack/iconlist/nifi.png",
  "/combopack/iconlist/numpy.png",
  "/combopack/iconlist/pandas.png",
  "/combopack/iconlist/parquet.png",
  "/combopack/iconlist/python.png",
  "/combopack/iconlist/snowflake.png",
  "/combopack/iconlist/spark.png",
  "/combopack/iconlist/sql.png",
  "/combopack/iconlist/sqldb.png",
];
// Lazy load heavy components
// const Testimonial = lazy(
//   () =>
//     import(
//       "@/components/shared components/home page components/Testomonial Section/Testomonial"
//     )
// );

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

// Extracted component with SEO-friendly alt text
const InstructorInfo = () => (
  <div className="mx-auto my-2.5 flex items-center gap-3 max-md:mx-auto">
    <Image
      src="/revamp/author.svg"
      alt="Data Engineering Instructor Darshil Parmar - Expert in Big Data and Cloud Technologies"
      height={40}
      width={40}
      className="subInstructorImage dark:rounded-full dark:border"
      loading="lazy"
      priority={false}
    />
    <p className="text-white dark:text-black">
      <span className="subInstructorTitle text-[#787878]">Instructor:</span>{" "}
      <span itemProp="instructor">Darshil Parmar</span>
    </p>
  </div>
);

const ComboCourseInfoPage = () => {
  // SEO metadata
  const pageTitle =
    "Complete Data Engineering Course Bundle | From Zero to Cloud Data Expert";
  const pageDescription =
    "Master Data Engineering with our comprehensive 5-course combo package. Learn SQL, Big Data, Cloud Engineering, and complete 14+ hands-on data projects. Perfect for aspiring Data Engineers and Big Data Experts.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Data Engineering Courses, Hands-on Data Projects, SQL for Data Engineering, Cloud Data Engineer, Big Data Expert, Data Pipeline Development"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://datavidhya.com/data-engineering-combo-course"
        />
      </Head>

      <div
        className="w-full overflow-hidden pt-2 "
        itemScope
        itemType="https://schema.org/Course"
      >
        <div className="mx-auto flex w-[88%] justify-between max-2xl:flex-col max-xl:w-[85%] max-md:w-[90%]">
          <div className="flex flex-row-reverse w-1/2 items-center justify-center max-2xl:w-full">
            <div>
              <h1
                className={`mt-10 ${poppins.className} title w-[78%] text-[60px] font-medium leading-[72px] text-white dark:text-black max-2xl:w-3/5 max-lg:mt-4 max-lg:w-4/5 max-lg:leading-[70px] max-md:mx-auto max-md:w-[97%] max-md:text-center max-md:text-[36px] max-md:leading-[45px]`}
                itemProp="name"
              >
                Zero to Hero Data Engineering Combo Pack
              </h1>
              <h3
                className="subTitle w-3/5 text-[20px] text-[#787878]  max-2xl:w-[47%] max-lg:w-3/5 max-md:mx-auto max-md:mt-2.5 max-md:w-[90%] max-md:text-center max-md:text-[20px] max-md:leading-[24px]"
                itemProp="description"
              >
                Kickstart Your Data Engineering Career with Our Comprehensive
                6-Course Combo!
              </h3>
              <div className="w-full max-md:hidden">
                <InstructorInfo />
              </div>
              <div className="mt-4 flex gap-3 max-md:mx-auto max-md:w-full max-md:justify-center">
                <div className="flex gap-3 max-md:flex-col">
                  <BlueGlobalBtn
                    href="https://com.rpy.club/pdp/combo6?code=COMBO50"
                    text="Enroll Now"
                  />
                </div>
              </div>
              <div className="hidden w-full max-md:flex max-md:items-center max-md:justify-center">
                <InstructorInfo />
              </div>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center max-2xl:w-full max-lg:mt-6 max-md:mt-3">
            <img
              src="/combopack/utube.png"
              height={400}
              width={500}
              alt="Comprehensive Data Engineering Course Bundle Overview - Including SQL, Cloud, and Big Data Projects"
              className="mainImage ml-4 mt-16 h-[395px] w-[607px] max-2xl:w-[750px] max-xl:h-[400px] max-xl:w-full max-lg:ml-0 max-lg:mt-2 max-lg:h-[350px] max-md:h-[260px] max-md:w-[320px] max-sm:h-[190px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 md:mt-20">
          <h1 className="text-2xl md:text-5xl text-center text-white font-semibold mb-12">
            Master the High-Demand Data Engineering Tech Stack
          </h1>
          <IconGrid icons={iconList} />
        </div>
        <div className="mt-6">
          <div className="sliderText mx-auto flex w-4/5 justify-between max-2xl:w-4/5 max-xl:w-[90%] max-lg:flex-col">
            <h3 className="flex w-[45%] items-center justify-center text-[44px] leading-[57px] text-white dark:text-black max-2xl:text-[40px] max-lg:w-full max-md:text-[32px] max-md:leading-[37px]">
              Learn the High-Demand Data Stack
            </h3>
            <p className="flex w-1/2 items-center justify-center text-[20px] text-[#9C9C9C] max-xl:text-[18px] max-lg:mt-2 max-lg:w-[90%] max-md:hidden">
              Gain proficiency with 14+ extensive projects designed to provide
              practical, real-world data engineering experience.
            </p>
            <p className="mt-2 hidden w-[90%] leading-[19.5px] text-[#787878] max-md:flex">
              Become a Cloud Data Engineer through hands-on experience with
              industry-standard tools and practices
            </p>
          </div>
          <div className="ProjectSliderBg sliderBg Sliderborder relative mx-auto mt-10 flex w-[90%] flex-wrap justify-between gap-10 p-8 max-2xl:w-4/5 max-xl:w-[90%] max-lg:gap-4 max-md:mt-4 max-md:gap-4 max-md:p-4">
            {courseProjectCovered.map((item, index) => (
              <div key={index}>
                <Image
                  src={item}
                  alt={`Data Engineering Project ${
                    index + 1
                  } - Real-world Data Pipeline Implementation`}
                  width={400}
                  height={200}
                  className="sliderCard h-[200px] w-[400px] max-2xl:h-[220px] max-2xl:w-[440px] max-xl:h-[200px] max-xl:w-[400px] max-lg:h-[160px] max-lg:w-[280px] max-md:h-[145px] max-md:w-[325px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto mt-8 px-4 md:mt-16">
          <h2 className="mx-auto w-1/2 text-center text-2xl leading-tight text-white max-md:w-[90%] sm:w-[90%] md:w-4/5 md:text-3xl md:leading-snug lg:w-3/5 lg:text-4xl lg:leading-[3.25rem] xl:text-[38px]">
            Total courses covered in our combo Pack
          </h2>

          <div className="mx-auto mt-4 w-full px-4 sm:w-11/12 md:mt-6 md:w-4/5">
            <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
              {courseCovered.map((items, index) => (
                <div key={index} className="w-full">
                  <Image
                    src={items.img}
                    alt={`${items.name} - Data Engineering Course Module`}
                    width={360}
                    height={220}
                    className="courseCardCovered aspect-[360/220] h-auto w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <ComboCourseInfo /> */}
        {/* <ProjectFeedBack /> */}
        <Testimony2 />
        <FAQsSection />
        <ZeroToHeroAnimation />
      </div>
    </>
  );
};

export default ComboCourseInfoPage;
