export interface ProjectFeedbackCardProps {
    id: string;
    name: string;
    profileImg: string;
    projectImgUrl: string;
    userReview: string;
    userProjectUrl: string;
    position?: string;
    companyName?: string;
  }
  
  export interface ProjectCardProps {
    id: string;
    name: string;
    description: string;
    projectImgUrl: string;
    topic: string;
    courseName: string;
  }