-- CreateTable
CREATE TABLE "purchase" (
    "id" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseDetail" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "content2" TEXT,
    "content3" TEXT,
    "content4" TEXT,
    "content5" TEXT,
    "content6" TEXT,
    "time" TEXT NOT NULL,
    "time2" TEXT,
    "time3" TEXT,
    "time4" TEXT,
    "time5" TEXT,
    "time6" TEXT,
    "mins" INTEGER NOT NULL,
    "Sections" INTEGER NOT NULL,

    CONSTRAINT "CourseDetail_pkey" PRIMARY KEY ("id")
);
