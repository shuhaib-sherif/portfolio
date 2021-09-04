import React from "react";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoIosMail,
  IoIosPhonePortrait,
} from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Sidenav() {
  return (
    <div class="flex flex-col justify-center gap-4 py-5 px-5">
      <div class="flex flex-row justify-center">
        <img
          src="./assets/mypic3.jpeg"
          alt="image"
          class="rounded-full h-40 w-40 flex items-center justify-center"
        />
      </div>

      <div class="bg-red-200 flex flex-row justify-center">
        <h1 className="font-custom2 text-2xl font-medium"> Shuhaib Sherif </h1>
      </div>
      <div class="flex flex-row justify-center rounded-full py-3 px-6 bg-green-500">
        Front End Web Developer
      </div>
      <div class="flex flex-row justify-center rounded-full py-3 px-6 bg-green-500 cursor-pointer">
        Download Resume
      </div>
      <div class="flex flex-row justify-center gap-10">
        <a href="https://www.linkedin.com/in/shuhaib-sherif-8a75001a6/">
          <IoLogoLinkedin class="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/shuhaib-sherif">
          <IoLogoGithub class="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/shuhaib_sherif/">
          <IoLogoInstagram class="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="mr-2" /> <span>Pune,Maharashtra </span>
        </div>
        <div className="flex items-center justify-center">
          <IoIosMail className="mr-2" /> <span>shuhaibsherif@gmail.com</span>
        </div>
        <div className="flex items-center justify-center">
          < IoIosPhonePortrait className="mr-2" /> <span>9730638068</span>
        </div>
      </div>

      <div class="flex flex-row justify-center rounded-full py-3 px-6 bg-green-500 cursor-pointer">
        <button onClick={()=>{
            window.open("mailto:shuhaibsherif@gmail.com")
        }}>Email Me</button>
      </div>
      <div class="flex flex-row justify-center rounded-full py-3 px-6 bg-green-500 cursor-pointer">
       <button>Light UI</button>
      </div>
    </div>
  );
}

export default Sidenav;
