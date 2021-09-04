import React, { useState } from "react";
import Item from "./Item";
import About from "../subpages/About";
import Projects from "../subpages/Projects";
import Resume from "../subpages/Resume";

function Navbar() {
  const [activeItem, setactiveItem] = useState("about");

  if (activeItem === "about") {
    return (
      <div className="flex-row">
        <div className="lg:grid grid-cols-12 sm:flex flex-row-3">
          <div className="lg:col-span-10 text-xl font-bold">
            <button
              className="px-2 sm:pl-30"
              onClick={() => {
                setactiveItem("about");
              }}
            >
              About
            </button>
          </div>
          <div className="lg:col-span-1">
            <button
              onClick={() => {
                setactiveItem("Resume");
              }}
            >
              Resume
            </button>
          </div>
          <div className="lg:col-span-1">
            <button
              onClick={() => {
                setactiveItem("Projects");
              }}
            >
              Projects
            </button>
          </div>
        </div>

        <div className="bg-black mt-5">
          <Item active={activeItem} />
        </div>
      </div>
    );
  }

  if (activeItem === "Resume") {
    return (
      <div className="flex-row">
        <div className="lg:grid grid-cols-12 sm:flex flex-row-3">
          <div className="col-span-10 text-xl font-bold">
            <button
              className="pl-3  sm:pl-30"
              onClick={() => {
                setactiveItem("Resume");
              }}
            >
              Resume
            </button>
          </div>
          <div className="col-span-1">
            <button
              onClick={() => {
                setactiveItem("About");
              }}
            >
              About
            </button>
          </div>
          <div className="col-span-1">
            <button
              onClick={() => {
                setactiveItem("Projects");
              }}
            >
              Projects
            </button>
          </div>
        </div>

        <div>
          <Item active={activeItem} />
        </div>
     </div>
    );
  }

  if (activeItem === "Projects") {
    return (
      <div className="flex-row">
        <div className="lg:grid grid-cols-12 sm:flex flex-row-3">
          <div className="col-span-10 text-xl font-bold">
            <button
              className="pl-3 sm:pl-30"
              onClick={() => {
                setactiveItem("Projects");
              }}
            >
              Projects
            </button>
          </div>
          <div className="col-span-1">
            <button
              onClick={() => {
                setactiveItem("about");
              }}
            >
              About
            </button>
          </div>
          <div className="col-span-1">
            <button
              onClick={() => {
                setactiveItem("Resume");
              }}
            >
              Resume
            </button>
          </div>
        </div>
        <div>
          <Item active={activeItem} />
        </div>
      </div>
    );
  }
}

export default Navbar;
