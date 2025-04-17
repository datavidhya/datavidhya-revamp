/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "projectFeedback" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "projectImgUrl" TEXT NOT NULL,
    "userReview" TEXT NOT NULL,
    "userProjectUrl" TEXT NOT NULL,

    CONSTRAINT "projectFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectImgUrl" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "courseImgUrl" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "instructorName" TEXT NOT NULL,
    "instructorImgUrl" TEXT NOT NULL,
    "listingPrice" DOUBLE PRECISION NOT NULL,
    "discountPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "userReview" TEXT NOT NULL,
    "linkedinUrl" TEXT NOT NULL,
    "starRating" INTEGER NOT NULL,

    CONSTRAINT "testimonial_pkey" PRIMARY KEY ("id")
);
