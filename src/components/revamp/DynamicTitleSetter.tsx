"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DynamicTitleSetter() {
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/":
        document.title = "Home | Data Vidhya";
        break;
      case "/combopack":
        document.title = "Combopack | DataVidhya";
        break;
      case "/courses":
        document.title = "Courses | DataVidhya";
        break;
      case "/Projects":
        document.title = "Projects | DataVidhya";
        break;
      case "/admin":
        document.title = "Admin Panel | DataVidhya";
        break;
      case "/admin/courses":
        document.title = "Add Courses | DataVidhya";
        break;
      case "/admin/projects":
        document.title = "Add Projects | DataVidhya";
        break;
      case "/admin/projectFeedback":
        document.title = "Add Project Review | DataVidhya";
        break;
      case "/admin/recently-purchase":
        document.title = "Add Buyers | DataVidhya";
        break;
      case "/admin/testimonial":
        document.title = "Add Testimonial | DataVidhya";
        break;
      default:
        document.title = "Data Vidhya";
    }
  }, [pathname]);

  return null;
}
