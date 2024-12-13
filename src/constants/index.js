import coderhouse from "../assets/projects/Screenshot 2024-11-23 100816.png";
import nursury from "../assets/projects/Screenshot 2024-11-23 100803.png";
import wanderlust from "../assets/projects/Screenshot 2024-11-23 100753.png";
import simon from "../assets/projects/Screenshot 2024-11-23 100837.png";
import xo from "../assets/projects/Screenshot 2024-11-23 100855.png";
import music from "../assets/projects/Screenshot 2024-11-23 100909.png";
import password from "../assets/projects/Screenshot 2024-11-23 100953.png";
import jobhunt from "../assets/projects/Screenshot 2024-12-13 164736.png"
import uber from "../assets/projects/Screenshot 2024-12-13 164827.png"
import uber2 from "../assets/projects/Screenshot 2024-12-13 171455.png"

export const HERO_CONTENT = `Sophomore at IGDTUW with a passion for turning ideas into reality. I am dedicated to creating innovative and scalable web applications that provide exceptional user experiences. Always eager to learn and grow, I strive to contribute to projects that make a meaningful impact.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React.js, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
    {
        title: "UberRide",
        image: uber2,
        description:
          "Developed a real-time ride-hailing app that enables efficient ride matching through real-time booking and automatic suggestion generation. To ensure security and accuracy, I integrated OTP verification for ride confirmation. Additionally, I implemented user and captain authentication using JWT for secure login and authorization, ensuring a seamless and protected experience for all users.",
        technologies: ["Socket.io", "JWT", "React.js", "Node.js", "MongoDB", "Express.js"],
        demo : "https://uber-mekk.onrender.com",
        code : "https://github.com/ishika777/Uber"
      },
  {
    title: "Coderhouse",
    image: coderhouse,
    description:
      "Developed a platform featuring JWT-based authentication, allowing users to securely sign up and join rooms for open discussions and long meetings. To manage application state efficiently, I implemented Redux, ensuring smooth data flow across the platform. Additionally, I integrated Socket.io to enable real-time user joining and facilitate seamless communication within the rooms, enhancing the overall user experience.",
    technologies: ["Socket.io", "JWT", "Redux", "React.js", "Node.js", "MongoDB", "Express.js"],
    demo : "https://coderhouse-nw8l.onrender.com",
    code : "https://github.com/ishika777/Coderhouse"
  },
  {
    title: "JobHunt",
    image: jobhunt,
    description:
      "Developed a Job Application platform with JWT-based authentication, enabling users to apply for jobs and admins to post and view applications. The platform features efficient state management using Redux and a clean user interface designed with ShadCN for a seamless user experience.",
    technologies: ["JWT", "Redux", "React.js", "Node.js", "MongoDB", "Express.js"],
    demo : "https://jobhunt-v736.onrender.com",
    code : "https://github.com/ishika777/JobHunt"
  },
  {
    title: "Plant Nursery: E-commerce Website",
    image: nursury,
    description:
      "Developed a e-commerce platform offers a seamless shopping experience with key features like order history, user profiles, and category-based product sorting for easy navigation. Users can save products to their wishlist for future purchases and make informed decisions by reading and writing product reviews. ",
    technologies: ["MongoDB", "Node.js", "Express.js", "EJS"],
    demo : "https://nursery-e-commerce.onrender.com",
    code : "https://github.com/ishika777/Nursery-E-commerce"
  },
  {
    title: "Wanderlust",
    image: wanderlust,
    description:
      "Wanderlust is a platform where users can explore various travel destinations, view their details, and interact with the listings by providing reviews. The platform allows basic CRUD (Create, Read, Update, Delete) operations for managing travel listings and reviews, offering an intuitive interface for both users and administrators",
    technologies: ["MongoDB", "Node.js", "Express.jsS", "EJS"],
    demo : "https://wanderlust-iufb.onrender.com",
    code : "https://github.com/ishika777/WanderLust"
  },
  {
    title: "Simon Says",
    image: simon,
    description:
      "Built a fun and challenging game using HTML, CSS, and JavaScript to test your memory! In this game, players need to remember and repeat a sequence of colors, with a new color being added at each level. The game continues as long as the player successfully repeats the sequence.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/Simon-says/",
    code : "https://github.com/ishika777/Simon-says"
  },
  {
    title: "XO",
    image: xo,
    description:
      "A simple XO game built using HTML, CSS, and JavaScript. The game allows two players to play on the same device, with an animated display when a player wins or the game ends in a draw.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/XO/",
    code : "https://github.com/ishika777/XO"
  },
  {
    title: "Music Player",
    image: music,
    description:
      "A simple music player built using HTML, CSS, and JavaScript. This music player allows users to play, pause, repeat, and shuffle songs",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/music-player/",
    code : "https://github.com/ishika777/music-player"
  },
  {
    title: "Password Validation",
    image: password,
    description:
      "A simple password validator built using HTML, CSS, and JavaScript. This tool validates passwords based on specific criteria such as minimum length, the presence of special characters, and checking for spaces",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/Password-Validation/",
    code : "https://github.com/ishika777/Password-Validation"
  },
];

export const CONTACT = {
  address: "Delhi, India",
  phoneNo: "+91 9599151398",
  email: "ishikakansal05@gmail.com",
};
