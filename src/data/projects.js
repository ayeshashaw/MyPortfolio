import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";



const projects = [
  {
    id: 1,
    title: "CodeAuditAI-Code Reviewer",
    description:
      "This project is an AI-powered code review tool. It leverages Gemini AI 2.0 Flash to analyze code snippets, providing insightful feedback and suggestions. It features a user-friendly frontend with Monaco Editor for code input and a Node.js backend for AI integration.",
    technologies: ["React", "Node.js", "Express.js"],
    githubUrl: "https://github.com/ayeshashaw/CodeAuditAI-AI_Code_Reviewer",
    liveUrl: "https://code-audit-ai-ai-code-reviewer.vercel.app",
    featured: true,
    images: [image7, image10, image9],
  },
  {
    id: 2,
    title: "DocMeet - Doctor Appointment Booking System",
    description:
      "DocMeet is a comprehensive doctor appointment booking system designed to facilitate seamless interactions between patients, doctors, and administrators. The system is built using a modern tech stack and follows a microservices architecture pattern.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl:
      "https://github.com/ayeshashaw/DocMeet_Doctor_Appointments_Booking_System",
    liveUrl: "https://docmeet-g0lg.onrender.com",
    featured: true,
    images: [image3, image13, image14],
  },
  {
    id: 3,
    title: "Flappy Bird Game ",
    description:
      "This is a web-based Flappy Bird game that features user authentication, real-time score tracking, and a leaderboard. It provides an engaging and competitive gameplay experience, built with a full-stack architecture using React, Node.js, and MongoDB.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Nodemailer",
    ],
    githubUrl: "https://github.com/ayeshashaw/Birdie-Flappy-Bird-Game",
    liveUrl: "https://birdie-flappy-bird-game.vercel.app",
    featured: true,
    images: [image8, image11, image12],
  },

  {
    id: 4,
    title: "InvestFolio – Investment portfolio Tracker",
    description:
      "A full-stack investment portfolio tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application helps investors manage and track their investment portfolios across multiple asset classes including stocks, commodities, forex, bonds, ETFs, and cryptocurrencies.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl:
      "https://github.com/ayeshashaw/Investfolio-Investment-Portfolio-Tracker",
    liveUrl: "https://investfolio.vercel.app",
    featured: true,
    images: [image6, image15, image16],
  },

  {
    id: 5,
    title: "Sorting-Visualizer",
    description:"Sorting Visualizer is an interactive tool that visually demonstrates how popular sorting algorithms work. It simplifies complex concepts, making it ideal for students and coding enthusiasts to learn and understand sorting techniques effectively.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ayeshashaw/Sorting-Visualizer",
    liveUrl: "https://gentle-sable-3e156f.netlify.app/",
    featured: false,
    images: [image4],
  },
  {
    id: 6,
    title: "Calculator",
    description:
      "A basic yet functional Calculator application built with React.js, enabling users to perform arithmetic operations like addition, subtraction, multiplication, and division. It features a responsive UI, real-time updates using React state, and a clean, user-friendly design.",
    technologies: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ayeshashaw/Calculator-using-react",
    liveUrl: "",
    featured: false,
    images: [image5],
  },
  {
    id: 7,
    title: "Todo-Manager",
    description:
      "A powerful and user-friendly Todo Manager App built using React and Firebase Realtime Database. It allows users to add, edit, delete, search, filter, and sort tasks, with light/dark theme support and a built-in calendar for due dates.",
    technologies: ["React", "CSS", "JavaScript", "Firebase"],
    githubUrl: "https://github.com/ayeshashaw/TodoList-With-FireBase",
    liveUrl: "https://taskifymaneger.netlify.app",
    featured: false,
    images: [image2],
  },
  {
    id: 8,
    title: "Quiz App",
    description:
      "A dynamic and interactive quiz application built with React, utilizing the Open Trivia Database API. Users can create quizzes with customizable options, including category, difficulty, and the number of questions.",
    technologies: ["React", "CSS", "Axios"],
    githubUrl: "https://github.com/ayeshashaw/Quiz-Game-using-react",
    liveUrl: "https://snazzy-halva-4613ac.netlify.app",
    featured: false,
    images: [image1],
  },

  {
    id: 9,
    title: "Real-time Weather Application",
    description:
      "This real-time weather application is built using HTML, CSS, and JavaScript. It allows users to search for a city, view current weather conditions, access a city map, and see a 5-day weather forecast.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/ayeshashaw/WeatherApp",
    liveUrl: "https://dazzling-capybara-bd64d8.netlify.app",
    featured: false,
    images: [image17,image18],
  },

  {
    id: 10,
    title: "YouTube Clone",
    description:
      "A simplified web application that mimics YouTube, built using HTML, CSS, and JavaScript, now enhanced with real-time data from the YouTube Data API v3. This project demonstrates how to fetch, display, and interact with video content using web technologies.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/ayeshashaw/YouTube-Clone",
    liveUrl: "https://heartfelt-griffin-f654d9.netlify.app",
    featured: false,
    images: [image19],
  }
];

export default projects;
