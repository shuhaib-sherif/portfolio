import React from "react";

import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoIosMail,
  IoIosPhonePortrait,
} from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { useTheme } from "next-themes";
import TypewriterComponent from "typewriter-effect";

function Sidenav() {
  const { theme, setTheme } = useTheme();

  const determineTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col justify-center gap-4 py-5 px-5">
      <div className="flex flex-row justify-center">
        <img
          src="./assets/mypic3.jpeg"
          alt="image"
          className="rounded-full h-40 w-40 flex items-center justify-center"
        />
      </div>

      <div className="flex flex-row justify-center">
        <h1 className="font-custom2 text-2xl font-large transform motion-safe:hover:scale-110"> Shuhaib Sherif </h1>
      </div>

      <div className="flex flex-row justify-center text-2xl rounded-full py-3 px-1 font-medium text-blue-400 font-custom3 ">
        <TypewriterComponent
          options={{
            strings: ["Web Developer", "Competitive Programmer"],
            autoStart: true,
            loop: true,
          }}
        />


   </div>

      <div className="flex flex-row justify-center rounded-full py-3 px-6 bg-green-500 cursor-pointer hover:bg-green-800">
        
        <a href="/assets/resume.pdf" download="resume">Download Resume</a>
      </div>
      <div className="flex flex-row justify-center gap-10 ">
        <a href="https://www.linkedin.com/in/shuhaib-sherif-8a75001a6/" >
          <IoLogoLinkedin className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="https://github.com/shuhaib-sherif">
          <IoLogoGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/shuhaib_sherif/">
          <IoLogoInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      
      <div
        className="py-4 my-5  dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="mr-2" />{" "}
          <span>Pune,Maharashtra </span>
        </div>
        <div className="flex items-center justify-center">
          <IoIosMail className="mr-2" /> <span>shuhaibsherif@gmail.com</span>
        </div>
        <div className="flex items-center justify-center">
          <IoIosPhonePortrait className="mr-2" /> <span>9730638068</span>
        </div>
      </div>

      <div className="flex flex-row justify-center rounded-full py-3 px-6 bg-green-500 cursor-pointer hover:bg-green-800">
        <button className="w-full"
          onClick={() => {
            window.open("mailto:shuhaibsherif@gmail.com");
          }}
        >
          Email Me
        </button>
      </div>
      <div className="flex flex-row justify-center rounded-full py-3 px-6 bg-green-500 cursor-pointer hover:bg-green-800">
        <button onClick={determineTheme} className="w-full">
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
