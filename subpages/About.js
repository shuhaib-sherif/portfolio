import { motion } from "framer-motion";
import React from "react";
import {services} from "../public/data"
import ServiceCard from "../components/ServiceCard";

function About() {
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
  return (
  <div>
  
    <div className="flex flex-col flex-grow px-6 pt-1">

      
      <h6 className="my-3 text-base font-medium">
        Hey There,
        I am currently pursuing B.Tech Degree(3rd Year) in Computer Science and 
        Engineering from SRM IST Chennai. Feel free to contact me anytime and do check out my works.
        
      </h6>
     
      <div
        className="flex-grow p-4 mt-5  bg-dark-100 rounded-lg"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl underline font-bold tracking-wide text-green-500">
          Area of Interests
        </h4>
      </div>
     

      <motion.div className="grid gap-6 my-3 md:grid-cols-2"   variants={variants} initial="initial" animate='animate'>
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service) => (
          <div
            className="col-span-2 p-2  rounded-lg dark:bg-dark-200 md:col-span-1 "
            key={service.title}
          >
            <ServiceCard
              Icon={service.Icon}
              title={service.title}
              about={service.about}
            />
          </div>
        ))}
      </motion.div>

    </div>
    
    </div>
  );
}

export default About;
