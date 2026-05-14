import gallary1 from "../assets/images/gallary1.jpeg";
import gallary2 from "../assets/images/gallary2.jpeg";
import gallary3 from "../assets/images/gallary3.jpeg";
import gallary4 from "../assets/images/gallary4.jpeg";

import image2 from "../assets/images/secondary.jpeg";
import image3 from "../assets/images/secondary.jpeg";
import image4 from "../assets/images/secondary.jpeg";
import teacher from "../assets/images/secondary.jpeg";

export const statsData = [
  {
    id: 1,
    number: "700+",
    label: "Successful graduates",
    description: "Successful graduates over 15 glorious years",
  },
  {
    id: 2,
    number: "4",
    label: "Academy Levels",
    description: "Primary/ Lower Secondary /SEE / +2  ALL at one institution",
  },
  {
    id: 3,
    number: "21+",
    label: "Years of Excellence",
    description: "A reputed educational institution for over the two decades",
  },
  // {
  //   id: 4,
  //   number: "75+",
  //   label: "Districts of Nepal",
  //   description: "Represented among our students",
  // },
];

export const newsData = [
  {
    id: 1,
    title: "Annual Sports Week Successfully Concluded",
    description:
      "Pioneers’ Academy organized its annual sports week with great उत्साह. Students participated in football, basketball, and track events.",
    image: image2,
    date: "2026-03-10",
    category: "Event",
  },
  {
    id: 2,
    title: "New Computer Lab Inaugurated",
    description:
      "A modern computer lab with high-speed internet and latest systems has been inaugurated to enhance students' digital learning experience.",
    image: image3,
    date: "2026-02-18",
    category: "Infrastructure",
  },
  {
    id: 3,
    title: "Scholarship Program Announced",
    description:
      "The academy has announced merit-based scholarships for deserving students in Grade 11 and 12 across Management and Law streams.",
    image: image4,
    date: "2026-01-25",
    category: "Announcement",
  },
];

export const boardMembers = [
  {
    id: 1,
    name: "Mr. Ramesh Sharma",
    position: "Chairman",
    image: teacher,
  },
  {
    id: 2,
    name: "Mrs. Sita Koirala",
    position: "Vice Chairman",
    image: teacher,
  },
  {
    id: 3,
    name: "Mr. Bikash Thapa",
    position: "Managing Director",
    image: teacher,
  },
  {
    id: 4,
    name: "Mrs. Anju Shrestha",
    position: "Academic Director",
    image: teacher,
  },
  {
    id: 5,
    name: "Mr. Dipesh Bhandari",
    position: "Finance Director",
    image: teacher,
  },
  {
    id: 6,
    name: "Mrs. Nirmala Pandey",
    position: "Administration Director",
    image: teacher,
  },
  {
    id: 7,
    name: "Mr. Sagar Joshi",
    position: "IT Director",
    image: teacher,
  },
  {
    id: 8,
    name: "Mrs. Rekha Bhatt",
    position: "Student Affairs Director",
    image: teacher,
  },
  {
    id: 9,
    name: "Mr. Arun Chaudhary",
    position: "Discipline Coordinator",
    image: teacher,
  },
  {
    id: 10,
    name: "Mrs. Sunita Mahato",
    position: "Community Relations Director",
    image: teacher,
  },
  {
    id: 11,
    name: "Mr. Rajendra Yadav",
    position: "Sports Director",
    image: teacher,
  },
  {
    id: 12,
    name: "Mrs. Kavita Singh",
    position: "Cultural Coordinator",
    image: teacher,
  },
];

export const secondaryData = {
  title: "Secondary Level (SEE)",
  description:
    "The Secondary Level (SEE) focuses on building a strong academic foundation and preparing students for the national Secondary Education Examination (SEE). Our approach combines conceptual learning, regular assessments, and practical application of knowledge.",
  features: [
    "Focused preparation for SEE board exams",
    "Strong emphasis on Science, Mathematics, and English",
    "Regular class tests and mock exams",
    "Experienced and dedicated teachers",
    "Career guidance and counseling",
  ],
  subjects: [
    "Compulsory Mathematics",
    "Science",
    "English",
    "Social Studies",
    "Optional Subjects",
  ],
  image: "/images/secondary.jpg",
};

export const higherSecondaryData = {
  title: "Higher Secondary (+2)",
  description:
    "Our Higher Secondary (+2) program offers specialized streams that prepare students for higher education and professional careers.",

  faculties: [
    {
      name: "Management",
      subjects: ["Accountancy", "Business Studies", "Economics", "Marketing"],
      color: "bg-blue-600",
    },
    {
      name: "Science",
      subjects: [
        "Physics",
        "Chemistry",
        "Biology / Computer Science",
        "Mathematics",
      ],
      color: "bg-green-600",
    },
    {
      name: "Law",
      subjects: ["Legal Studies", "Political Science", "Sociology", "English"],
      color: "bg-purple-600",
    },
  ],
};

export const lowerSecondaryData = {
  title: "Lower Secondary Level",
  description:
    "The Lower Secondary Level serves as a bridge between primary and secondary education. It focuses on strengthening core concepts, developing critical thinking, and preparing students for higher academic challenges.",

  features: [
    "Concept-based learning approach",
    "Introduction to core academic subjects",
    "Interactive and practical teaching methods",
    "Regular assessments and feedback",
    "Focus on discipline and skill development",
  ],

  subjects: [
    "Mathematics",
    "Science",
    "English",
    "Social Studies",
    "Optional Subjects",
  ],
};
