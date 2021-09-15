import { motion } from "framer-motion";
import React from "react";
import { languages, tools } from "../../public/data";
import Bar from "../components/Bar";


function Resume() {

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
    <div className="px-6 py-3">
      {/* //! Education & Experience */}
      <motion.div className="grid gap-6 md:grid-cols-2 bg-gray-700 rounded-lg text-white" variants={variants} initial="initial" animate='animate'> 
        <div>
          <h5 className="my-3 text-2xl font-bold px-3">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-med underline px-3">
             Btech (CSE Core)
            </h5>
            <p className="font-semibold px-3">SRM IST Chennai (2023)</p>
            <p className="my-3 px-3">
             Cgpa : 9.6
            </p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-med underline px-3">
             High School
            </h5>
            <p className="font-semibold px-3">Army Public School Pune Camp(2018)</p>
            <p className="my-3 px-3">
             Percentage : 93 %
            </p>
          </div>
          




        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-med underline">Technical Intern</h5>
            <p className="font-semibold">Purple Tutor (Aug-2021)</p>
            <p className="my-3"></p>
          </div>
        </div>
      </motion.div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language and Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar Icon={language.Icon} level={language.level} name={language.name} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar
                Icon={tool.Icon}
                level={tool.level}
                name={tool.name}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
