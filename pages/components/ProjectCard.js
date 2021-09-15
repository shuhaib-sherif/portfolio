import React from "react";

import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";

function ProjectCard({
  name,
  image_path,
  category,
  deployed_url,
  description,
  github_url,
  key_techs,
}) {
  const [showDetail, setShowDetail] = useState(false);
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div>

      <motion.div variants={variants} initial="initial" animate='animate' >
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
   </motion.div>
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={variants} initial="initial" animate='animate'>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-500 text-black dark:bg-dark-200 rounded-lg
                hover:bg-gray-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-500 dark:bg-dark-200 rounded-lg hover:bg-gray-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </motion.div >

          <motion.div variants={variants} initial="initial" animate='animate'>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default ProjectCard;
