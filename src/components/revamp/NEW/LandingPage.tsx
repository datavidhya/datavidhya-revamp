import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";

const topics = [
  "AWS",
  "Apache Airflow",
  "Parquet",
  "Avro",
  "Microsoft Azure",
  "Google BigQuery",
  "CSV",
  "Databricks",
  "Azure Data Factory",
  "Docker",
  "Kafka",
  "Google Cloud",
  "GitHub",
  "Apache NiFi",
  "Snowflake",
  "Looker",
  "MAGE",
  "NumPy",
  "Pandas",
  "PostgreSQL",
  "Python",
  "Apache Spark",
  "SQL",
];

export default function LandingPage() {
  return (
    <div className=" bg-neutral-950 text-white dark:bg-white dark:text-black mt-10">
    
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-10 max-md:py-10">
        <div className="mb-20 space-y-8 text-center">
          {/* Main Heading */}
          <div className="relative space-y-6">
            <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
              <div className="mb-4">
                <div>
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    Transform
                  </span>{" "}
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    Your
                  </span>{" "}
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    Career
                  </span>
                </div>
                <div>
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    in
                  </span>{" "}
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    <AuroraText className="mx-0 md:mx- leading-[120%]">
                      Data Engineer{" "}
                    </AuroraText>
                  </span>{" "}
                  {/* <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    Engineering
                  </span> */}
                  <span className="text-blue-600">.</span>
                </div>
              </div>
            </h1>

            {/* Subheading */}
            <div className="mx-auto max-w-2xl space-y-6 mt-8">
              <p className="text-xl text-gray-400 dark:text-gray-600 ">
                Master the art of data engineering with industry-leading courses
                designed for modern tech careers.
              </p>
              <div className="mt-8 flex justify-center gap-4 ">
                <a
                  href="/all-course"
                  className="rounded-md bg-blue-700 px-6 py-2.5 font-medium text-white hover:bg-blue-600"
                >
                  Explore Courses
                </a>
                <a
                  href="/combo-pack"
                  className="rounded-md border border-neutral-600 px-6 py-2.5 font-medium text-white dark:text-black"
                >
                  View Curriculum
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="w-4/5 mx-auto mb-4 flex flex-wrap justify-center gap-3">
          {topics.map((topic) => (
            <Link
              key={topic}
              href="#"
              className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-100 hover:scale-[1.06] transition-transform  hover:bg-white/10 hover:text-white dark:bg-neutral-300 dark:text-neutral-800"
            >
              {topic}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
