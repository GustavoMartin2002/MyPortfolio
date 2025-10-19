'use client';

import { educations } from "@/data/educations";
import { experiences } from "@/data/experiences";
import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";

export default function EducationExperience() {
  return (
    <section
      className="flex justify-center items-start mx-auto gap-5 w-[80%] my-20
      max-xl:flex-col max-xl:gap-10 max-sm:w-[90%] max-sm:my-10"
    >
      <motion.section
        variants={fadeIn('right', 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="flex flex-col justify-center bg-[#00000050] rounded-lg p-5 w-[50%] min-h-[30vh]
        max-xl:w-full"
      >
        <ul className="list my-auto gap-5 px-5 max-sm:px-2">
          { educations.map((education)=> (
            <li key={education.id}>
              <h1
                className="text-xl font-semibold max-lg
                max-lg:text-lg max-sm:text-xs"
              >
                <a
                  className="underline text-blue"
                  href={education.link}
                  target="_blank"
                >
                  {education.degree}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mx-1 inline" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                </a>
              </h1>
              <time className="text-base max-sm:text-xs">{education.year}</time>
              <h2
                className="text-base
                max-lg:text-base max-sm:text-xs"
              >
                {education.institution}
              </h2>
            </li>
          )) }
        </ul>
      </motion.section>

      <motion.section
        variants={fadeIn('left', 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="flex flex-col justify-center bg-[#00000050] rounded-lg p-5 w-[50%] min-h-[30vh]
        max-xl:w-full"
      >
        <ul className="px-5 max-sm:px-2">
          { experiences.map((experience) => (
            <li className="mb-5" key={experience.id}>
              <h1
                className="text-xl font-semibold text-blue
                max-lg:text-lg max-sm:text-xs"
              >
                {experience.title}
              </h1>
              <time className="text-base max-sm:text-xs">{experience.year}</time>
              <p className="text-base font-light my-2 max-sm:text-xs">{experience.description}</p>
              <span className="font-bold max-sm:text-xs">TechStack: </span>
              <span className="font-mono max-sm:text-xs">{experience.techStack.join(", ")}</span>
            </li>
          )) }
        </ul>
      </motion.section>      
    </section>
  );
}