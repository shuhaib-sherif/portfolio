import { motion } from "framer-motion";
import React from "react";

function Bar({ Icon, level, name }) {
  const bar_width = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
}

export default Bar;
