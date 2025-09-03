'use client';

import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";
import ListBackend from "./ListBackend";
import ListDatabase from "./ListDatabase";
import ListFrontend from "./ListFrontend";
import ListToolsDevops from "./ListToolsDevops";
import ListCloud from "./ListCloud";

export default function Skills() {
  return (
    <section className="flex flex-col justify-center items-center w-[80%] mx-auto my-20 max-sm:w-[90%]">
      <motion.section
        variants={fadeIn('', 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="mb-15 max-sm:mb-10"
      >
        <h1 className="text-center text-3xl font-bold max-lg:text-lg">Front-End</h1>
        <div className="mt-10">
          <ListFrontend/>
        </div>
      </motion.section>
    
      <motion.section
        variants={fadeIn('', 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="my-15 max-sm:my-10"
      >
        <h1 className="text-center text-3xl font-bold max-lg:text-lg">Back-End</h1>
        <div className="mt-10">
          <ListBackend/>
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn('', 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="my-15 max-sm:my-10"
      >
        <h1 className="text-center text-3xl font-bold max-lg:text-lg">Databases</h1>
        <div className="mt-10">
          <ListDatabase/>
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn('', 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="my-15 max-sm:my-10"
      >
        <h1 className="text-center text-3xl font-bold max-lg:text-lg">Tools & DevOps</h1>
        <div className="mt-10">
          <ListToolsDevops/>
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn('', 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="my-15 max-sm:my-10"
      >
        <h1 className="text-center text-3xl font-bold max-lg:text-lg">Cloud</h1>
        <div className="mt-10">
          <ListCloud/>
        </div>
      </motion.section>
    </section>
  );
}