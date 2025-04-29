
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';




const projects = [
  {
    id: 1,
    title: "DocMeet - Doctor Appointment Booking System",
    description: "DocMeet is a comprehensive doctor appointment booking system designed to facilitate seamless interactions between patients, doctors, and administrators. The system is built using a modern tech stack and follows a microservices architecture pattern.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/ayeshashaw/DocMeet_Doctor_Appointments_Booking_System",
    liveUrl: "https://docmeet-g0lg.onrender.com",
    featured: true,
    imageUrl: image3
  },
  {
    id: 2,
    title: "InvestFolio – Investment portfolio Tracker",
    description: "A full-stack investment portfolio tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application helps investors manage and track their investment portfolios across multiple asset classes including stocks, commodities, forex, bonds, ETFs, and cryptocurrencies.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/ayeshashaw/Investfolio-Investment-Portfolio-Tracker",
    liveUrl: " https://investfolio.vercel.app",
    featured: true,
    imageUrl: image6
  },
  {
    id: 3,
    title: "Sorting-Visualizer",
    description: "The Sorting Visualizer is an interactive tool designed to help users understand the workings of popular sorting algorithms. By providing a visual representation of the sorting process, this project simplifies the grasp of fundamental concepts in computer science and algorithm design. It serves as an ideal educational resource for students, coding enthusiasts, and anyone curious about how sorting algorithms function.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ayeshashaw/Sorting-Visualizer",
    liveUrl: "https://gentle-sable-3e156f.netlify.app/",
    featured: true,
    imageUrl: image4
  },

  {
    id: 4,
    title: "Calculator",
    description: "A basic yet functional Calculator application built with React.js, enabling users to perform arithmetic operations like addition, subtraction, multiplication, and division. It features a responsive UI, real-time updates using React state, and a clean, user-friendly design.",
    technologies: ["React", "CSS","javaScript"],
    githubUrl: "https://github.com/ayeshashaw/Calculator-using-react",
    liveUrl: "",
    featured: false,
    imageUrl: image5
  },

  {
    id: 5,
    title: "Todo-App",
    description: "A simple and interactive To-Do List application built with React.js that allows users to add, edit, delete, and mark tasks as completed. It uses state management for dynamic updates and offers a clean, responsive UI for effective task tracking.",
    technologies: ["React", "CSS","javaScript"],
    githubUrl: "https://github.com/ayeshashaw/TODO-USING-REACT",
    liveUrl: "",
    featured: false,
    imageUrl: image2
  },
  {
    id: 6,
    title: "Quiz App",
    description: "A dynamic and interactive quiz application built with React, utilizing the Open Trivia Database API. Users can create quizzes with customizable options, including category, difficulty, and the number of questions.",
    technologies: ["React", "CSS", "Axios"],
    githubUrl: "https://github.com/ayeshashaw/Quiz-Game-using-react",
    liveUrl: "https://snazzy-halva-4613ac.netlify.app",
    featured: false,
    imageUrl: image1
  }
];

export default projects;
