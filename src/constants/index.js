import project1 from "../assets/projects/Screenshot 2024-11-23 100816.png";
import project2 from "../assets/projects/Screenshot 2024-11-23 100803.png";
import project3 from "../assets/projects/Screenshot 2024-11-23 100753.png";
import project4 from "../assets/projects/Screenshot 2024-11-23 100837.png";
import project5 from "../assets/projects/Screenshot 2024-11-23 100855.png";
import project6 from "../assets/projects/Screenshot 2024-11-23 100909.png";
import project7 from "../assets/projects/Screenshot 2024-11-23 100938.png";
import project8 from "../assets/projects/Screenshot 2024-11-23 100953.png";

export const HERO_CONTENT = `I am sophomore at IGDTUW and a passionate MERN stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Coderhouse: Real Time Communication Hub",
    image: project1,
    description:
      "Platform that enables real-time peer-to-peer communication, allowing users to instantly connect and collaborate with others. Users can join existing rooms or create new ones for private or group discussions. The platform uses WebRTC for direct communication and ensures secure user authentication with JWT for privacy and safety.",
    technologies: ["WebRTC", "JWT", "React", "Node.js", "MongoDB", "Express"],
    demo : "https://coderhousefront.onrender.com",
    code : "https://github.com/ishika777/Coderhouse"
  },
  {
    title: "Plant Nursery: E-commerce Website",
    image: project2,
    description:
      "The e-commerce platform offers a seamless shopping experience with key features like order history, user profiles, and category-based product sorting for easy navigation. Users can save products to their wishlist for future purchases and make informed decisions by reading and writing product reviews. ",
    technologies: ["MongoDB", "Node.js", "ExpressS", "JavaScript", "EJS"],
    demo : "https://nursery-e-commerce.onrender.com",
    code : "https://github.com/ishika777/Nursery-E-commerce"
  },
  {
    title: "Wanderlust",
    image: project3,
    description:
      "Wanderlust is a platform where users can explore various travel destinations, view their details, and interact with the listings by providing reviews. The platform allows basic CRUD (Create, Read, Update, Delete) operations for managing travel listings and reviews, offering an intuitive interface for both users and administrators",
    technologies: ["MongoDB", "Node.js", "ExpressS", "JavaScript", "EJS"],
    demo : "https://wanderlust-iufb.onrender.com",
    code : "https://github.com/ishika777/WanderLust"
  },
  {
    title: "Simon Says",
    image: project4,
    description:
      "A fun and challenging game built using HTML, CSS, and JavaScript to test your memory! In this game, players need to remember and repeat a sequence of colors, with a new color being added at each level. The game continues as long as the player successfully repeats the sequence",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/Simon-says/",
    code : "https://github.com/ishika777/Simon-says"
  },
  {
    title: "XO",
    image: project5,
    description:
      "A simple XO game built using HTML, CSS, and JavaScript. The game allows two players to play on the same device, with an animated display when a player wins or the game ends in a draw",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/XO/",
    code : "https://github.com/ishika777/XO"
  },
  {
    title: "Music Player",
    image: project6,
    description:
      "A simple music player built using HTML, CSS, and JavaScript. This music player allows users to play, pause, repeat, and shuffle songs",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/music-player/",
    code : "https://github.com/ishika777/music-player"
  },
  {
    title: "Ask",
    image: project7,
    description:
      "A fun and interactive website built with HTML, CSS, and JavaScript, designed to help users ask their crush to hang out in a creative and playful way. This website offers a unique and lighthearted way to send an invitation and break the ice with someone specias",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo : "https://ishika777.github.io/ask/",
    code : "https://github.com/ishika777/ask"
  },
  {
    title: "Password Validation",
    image: project8,
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
