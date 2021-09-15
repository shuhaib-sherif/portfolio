import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
//import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>  and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Deep Learning",
    about:
      "I have a beginner level knowledge about Deep learning(CNN) and I have worked with <b>keras</b> and <b>tensorflow</b> libraries of <b>Python</b>",
  },

  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "I am a 3 star coder in <b>Codechef</b>  and  I hold a certification for <b>Advanced Problem Solving</b> from <b>Hacker Rank</b> ",
  },

];

export const languages= [
  {
    Icon: BsCircleFill,
    name: "C++",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "50",
  },
 
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "70",
  },
];

export const tools= [
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "55",
  },
];

export const projects = [
  {
    name: "Netflix clone",
    image_path: "/images/net.jpeg",
    deployed_url: "https://netflix-clone-20e85.web.app/",
    github_url: "https://github.com/shuhaib-sherif/netflix_clone",
    category: ["firebase", "react","Redux"],
    description:
      "A simple Netflix Clone made using REACT JS , REDUX and GOOGLE FIREBASE which allows user to login via email and password.",
      
    key_techs: ["react", "firebase","python"],
  },


  { 
    name: "COVID-19 Updates",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/corona.jpeg",
    deployed_url: "https://admiring-hypatia-51c10e.netlify.app/",
    github_url: "https://github.com/shuhaib-sherif/Covid19",
    category: ["JavaScript"],
    key_techs: ["HTML", "JavaScript", "Bootstrap"],
  },




  

  {
    name: "WhatsApp Clone",
    image_path: "/images/wa.jpeg",
    deployed_url: "https://whats-app-clone-26852.web.app/rooms/a1VSJeIna0uZ1ogjrOKV",
    github_url: "https://github.com/shuhaib-sherif/whats-app-clone",
    category: ["react", "firebase","contextApi"],
    description:
      "This is the clone of WhatsApp completely build using react and firebase. This app allows authentication and login via google and allows users to create chat rooms and chat with each other. The users can also delete the chat rooms once they are no longer required.",
    key_techs: ["react", "firebase"],
  },

  {
    name: "Dino Game Using Gesture Control",
    image_path: "/images/dino.jpeg",
   
    github_url: "https://github.com/shuhaib-sherif-2000/dino-game/tree/master/DINO%20game%20gesture%20control",
    category: ["TensorFlow.js","python"],
    description:
      "Controlling the dino using hand gestures",
    key_techs: ["python"],
  },
  
];