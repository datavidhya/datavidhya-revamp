import CombeHeroSection from "@/components/revamp/combopackSection/CombeHeroSection";
import ComboProjectReview from "@/components/revamp/combopackSection/ComboProjectReview";
import CourseDetailSection from "@/components/revamp/combopackSection/CourseDetailSection";
import DataStackSection from "@/components/revamp/combopackSection/DataStackSection";
import { IconGrid } from "@/components/revamp/combopackSection/TechStack";
import YoutubeSection from "@/components/revamp/combopackSection/YoutubeSection";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import React from "react";

const combopack = () => {
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
  return (
    <>
      <NavigationBar />
      <CombeHeroSection />
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <h1 className="text-2xl md:text-4xl text-center text-black font-semibold mb-12">
          Master the High-Demand Data Engineering Tech Stack
        </h1>
        <IconGrid icons={iconList} />
      </div>
      <DataStackSection />
      <YoutubeSection />

      <ComboProjectReview />
      <CourseDetailSection />
      <FAQsSection />
      <Footer />
    </>
  );
};

export default combopack;
