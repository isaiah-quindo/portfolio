"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="experience w-full px-4 lg:px-20 overflow-hidden">
      <div className="experience-container w-full h-auto rounded-4xl p-6">
        <div className="max-w-7xl m-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-18">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase mb-8">
              Experience
            </h2>
            <p className="text-gray-400">
              By combining my expertise in design and development, I bring a
              unique blend of creativity and technical proficiency to every
              project I undertake. Let's collaborate to transform your digital
              vision into a visually stunning and user-friendly reality.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-gray-300 hover:border-blue-300 transition-all duration-300 rounded-lg p-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold uppercase">
                    Open Architects
                  </h3>
                  <p className="text-gray-400">Senior Product Designer</p>
                </div>
                <div className="flex flex-col gap-1 text-left lg:text-right md:text-right sm:text- ">
                  <p className="text-gray-400">USA | Remote</p>
                  <p className="text-gray-400">Nov 2023 - Present</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-gray-300 hover:border-blue-300 transition-all duration-300 rounded-lg p-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold uppercase">
                    Law Advisor Ventures
                  </h3>
                  <p className="text-gray-400">Senior Product Designer</p>
                </div>
                <div className="flex flex-col gap-1 text-left lg:text-right md:text-right sm:text- ">
                  <p className="text-gray-400">UK | Remote</p>
                  <p className="text-gray-400">June 2020 - Dec 2022</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 1, delay: 0.75, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-gray-300 hover:border-blue-300 transition-all duration-300 rounded-lg p-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold uppercase">
                    Investagrams Inc.
                  </h3>
                  <p className="text-gray-400">
                    Senior Product Designer + Frontend Developer
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-left lg:text-right md:text-right sm:text- ">
                  <p className="text-gray-400">Metro Manila</p>
                  <p className="text-gray-400">Nov 2016 - May 2020</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-gray-300 hover:border-blue-300 transition-all duration-300 rounded-lg p-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold uppercase">
                    Cambridge University Press
                  </h3>
                  <p className="text-gray-400">UI Developer</p>
                </div>
                <div className="flex flex-col gap-1 text-left lg:text-right md:text-right sm:text- ">
                  <p className="text-gray-400">Metro Manila</p>
                  <p className="text-gray-400">Nov 2015 - Mar 2016</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 1, delay: 1.25, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-gray-300 hover:border-blue-300 transition-all duration-300 rounded-lg p-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold uppercase">
                    Freelance Web Designer
                  </h3>
                </div>
                <div className="flex flex-col gap-1 text-left lg:text-right md:text-right sm:text- ">
                  <p className="text-gray-400">2011 - 2015</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
