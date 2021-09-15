import React, { useState } from "react";
import Item from "./Item";

function Navbar() {
  const [activeItem, setactiveItem] = useState("about");

  if (activeItem === "about") {
    return (
      <>
        <div className="flex items-center justify-between px-5 py-3 my-3">
          <span className="text-2xl font-extrabold  text-green-600  md:text-2xl ">
            <button
              className="underline"
              onClick={() => {
                setactiveItem("about");
              }}
            >
              About
            </button>
          </span>

          <div className="text-base font-normal md:text-xl">
            <button
              className="
                      dark:text-yellow-100 text2xl px-2 sm:pl-30 "
              onClick={() => {
                setactiveItem("Resume");
              }}
            >
              Resume
            </button>
            <button
              className="
                      dark:text-yellow-100 text2xl px-2 sm:pl-30 "
              onClick={() => {
                setactiveItem("Projects");
              }}
            >
             Projects
            </button>
          </div>
        </div>
        <div className="">
          <Item active={activeItem} />
        </div>
      </>
    );
  }

  if (activeItem === "Resume") {
    return (
      <>
        <div className="flex items-center justify-between px-5 py-3 my-3">
          <span className="text-2xl font-extrabold  text-green-600 underline md:text-2xl">
            <button
              className="underline"
              onClick={() => {
                setactiveItem("Resume");
              }}
            >
              Resume
            </button>
          </span>

          <div className="text-base font-normal md:text-xl">
            <button
              className="
                        dark:text-yellow-100 text2xl px-2 sm:pl-30 "
              onClick={() => {
                setactiveItem("Projects");
              }}
            >
              Projects
            </button>
            <button
              className="
                        dark:text-yellow-100 text2xl px-2 sm:pl-30 "
              onClick={() => {
                setactiveItem("about");
              }}
            >
              About
            </button>
          </div>
        </div>
        <div className="">
          <Item active={activeItem} />
        </div>
      </>
    );
  }

  if (activeItem === "Projects") {
    return (
      <>
        <div className="flex items-center justify-between px-5 py-3 my-3">
          <span className="text-2xl font-extrabold  text-green-600 underline md:text-2xl">
            <button
              className="underline"
              onClick={() => {
                setactiveItem("Projects");
              }}
            >
             Projects
            </button>
          </span>

          <div className="text-base font-normal md:text-xl">
            <button
              className="
                        dark:text-yellow-100 text-xl px-2 sm:pl-30 "
              onClick={() => {
                setactiveItem("about");
              }}
            >
              About
            </button>
            <button
              className="
                        dark:text-yellow-100 text-xl px-2 sm:pl-30 "
              onClick={() => {
                setactiveItem("Resume");
              }}
            >
              Resume
            </button>
          </div>
        </div>
        <div className="">
          <Item active={activeItem} />
        </div>
      </>
    );
  }
}

export default Navbar;
