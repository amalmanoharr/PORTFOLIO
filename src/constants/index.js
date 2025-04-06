import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1+ years of professional experience, I have honed my skills in front-end technologies like React and Redux, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2023 - Present",
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    description: `I have developed REST APIs using Node.js, automated workflows to enhance data accuracy and save time, and created responsive React.js components for a prominent client. I also implemented unit tests to ensure code quality and reliability.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB", "AWS", "MUI"],
  },
  {
    year: "Jan 2023 - July 2023",
    role: "Software Engineer Intern",
    company: "Cognizant Technology Solutions",
    description: `I have transformed Figma designs into responsive React components with Redux for state management. Additionally, I developed secure backend systems using Node.js, MongoDB, and JWT authentication, ensuring smooth integration with frontend components. `,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "MongoDB", "Node.js", "GCP"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS","Javascript", "React", "Node.js", "MongoDB", "JWT"],
    deployedlink: "https://shopperfronten.onrender.com",
  },
  {
    title: "Saas Landing Page",
    image: project3,
    description:
      "A Saas landing page for a platform VirtualR with different sections like features, workflow, price and testimonials.",
    technologies: ["HTML", "TailwindCSS", "React"],
    deployedlink: "https://virtualr-theta-swart.vercel.app/",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "Developed a dynamic drag-and-drop Kanban board using React, TailwindCSS, and @dnd-kit for seamless task and column management",
    technologies: ["HTML", "Tyescript", "React", "TailwindCSS"],
    deployedlink: "https://kanban-board-inpr.vercel.app/",
  },
 
  {
    title: "Time Wise",
    image: project4,
    description:"Developed a Python script utilizing the Google Calendar API to automate event scheduling. Integrated functionalities to dynamically create events and commit hours to efficiently track and store daily event durations in a database.",
    technologies: ["Python", "Google Calender Api", "SQL", "OAuth"],
    deployedlink: "https://github.com/amalmanoharr/Timewise-project",
  },
];

export const CONTACT = {
  phoneNo: "+91 9526813881",
  email: "amal.manoharr@gmail.com",
};
