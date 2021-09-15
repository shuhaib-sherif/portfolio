import React from "react";
import About from "../subpages/About";
import Projects from "../subpages/Projects";
import Resume from "../subpages/Resume";


function Item({ active }) {
  if (active === "about")
    return (
      <div className="">
        <About />
      </div>
    );

  if (active === "Resume")
    return (
      <div>
        <Resume />
      </div>
    );

  if (active === "Projects")
    return (
      <div>
        <Projects />
      </div>
    );
}

export default Item;
