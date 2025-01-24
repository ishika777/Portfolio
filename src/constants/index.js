import coderhouse from "../assets/projects/coderhouse.png";
import uber_pc from "../assets/projects/uber-pc.png";
import jobhunt from "../assets/projects/jobhunt.png";
import codesync from "../assets/projects/codesync.png";
import aidev from "../assets/projects/aidev.png";
import tastybites from "../assets/projects/tastybites.png";

export const HERO_CONTENT = `Sophomore at IGDTUW with a passion for turning ideas into reality. I am dedicated to creating innovative and scalable web applications that provide exceptional user experiences. Always eager to learn and grow, I strive to contribute to projects that make a meaningful impact.`;

export const PROJECTS = [
    {
        title: "UberRide",
        image: uber_pc,
        description:
          "Developed a real-time ride-hailing app that enables efficient ride matching through real-time booking and automatic suggestion generation. To ensure security and accuracy, I integrated OTP verification for ride confirmation. Additionally, I implemented user and captain authentication using JWT for secure login and authorization, ensuring a seamless and protected experience for all users.",
        technologies: ["Socket.io", "MERN"],
        demo : "https://uber-mekk.onrender.com",
        code : "https://github.com/ishika777/Uber"
    },
    {
        title: "AIDevConnect",
        image: aidev,
        description:
          "Developed a real-time chat application that enables multiple users to collaborate on a project. By integrating the Google Generative API, the platform offers AI-driven code generation and assistance. It also features in-browser code execution with web-containers, allowing seamless collaboration and instant feedback during development.",
        technologies: ["Socket.io", "Redux", "MERN"],
        demo : "https://chat-app-gemini.onrender.com",
        code : "https://github.com/ishika777/chat-app-gemini"
    },
    {
        title: "CodeSync",
        image: codesync,
        description:
          "Built a real-time code editor that allows multiple users to collaborate simultaneously with synchronized code editing. The platform also supports in-platform code compilation and execution through the Judge0 API, providing an integrated environment for users to write, test, and debug code together in real time. This solution fosters seamless teamwork and efficient development.",
        technologies: ["Socket.io", "Express.js", "React.js", "Node.js"],
        demo : "https://code-sync-mkty.onrender.com",
        code : "https://github.com/ishika777/code-sync"
    },
    {
        title: "TastyBites",
        image: tastybites,
        description:
          "I built a responsive food e-commerce platform that includes essential features like email verification and password reset for secure user management. The platform also offers a restaurant search functionality, enhancing user navigation and experience. Additionally, I integrated a payment gateway, developed an admin dashboard for efficient order management, and enabled real-time menu updates, ensuring smooth operations for both customers and administrators.",
        technologies: ["TypeScript", "Zustand", "Zod", "MERN"],
        demo : "https://tasty-bites-9f9m.onrender.com",
        code : "https://github.com/ishika777/tasty-bites"
    },
  {
    title: "Coderhouse",
    image: coderhouse,
    description:
      "Developed a platform featuring JWT-based authentication, allowing users to securely sign up and join rooms for open discussions and long meetings. To manage application state efficiently, I implemented Redux, ensuring smooth data flow across the platform. Additionally, I integrated Socket.io to enable real-time user joining and facilitate seamless communication within the rooms, enhancing the overall user experience.",
    technologies: ["Socket.io", "Redux", "MERN"],
    demo : "https://coderhouse-nw8l.onrender.com",
    code : "https://github.com/ishika777/Coderhouse"
  },
  {
    title: "JobHunt",
    image: jobhunt,
    description:
      "Developed a Job Application platform with JWT-based authentication, enabling users to apply for jobs and admins to post and view applications. The platform features efficient state management using Redux and a clean user interface designed with ShadCN for a seamless user experience.",
    technologies: ["Redux", "MERN"],
    demo : "https://jobhunt-v736.onrender.com",
    code : "https://github.com/ishika777/JobHunt"
  },
];

export const CONTACT = {
  address: "Delhi, India",
  phoneNo: "+91 9599151398",
  email: "ishikakansal05@gmail.com",
};
