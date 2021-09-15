import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { projects as projectsData } from "../../public/data";
import ProjectCard from "../components/ProjectCard";
import ProjectNav from "../components/ProjectNav";

//import { Category } from "../types";
function Projects() {

  const variants = {
    initial: {
      opacity: 0,
      y:60
    },
    animate: {
      opacity: 1,
      y:0
    },
  };
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category) => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectNav
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={variants} initial="initial" animate='animate'>
        {projects.map((project) => (
          <div className="col-span-12 p-2 bg-gray-200 text-black  rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard 
            
             name= {project.name}
             image_path={project.image_path}
             category={project.category}
             deployed_url={project.deployed_url}
             description={project.description}
             github_url={project.github_url}
             key_techs={project.key_techs}            
            key={project.name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
