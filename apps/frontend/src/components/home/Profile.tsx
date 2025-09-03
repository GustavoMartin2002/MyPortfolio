'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { techStack } from "@/data/techStack";

export default function Profile() {
  return (
    <section 
      className="mx-auto my-20 w-[80%] flex gap-10
      max-sm:w-[90%] max-xl:flex-col"
    >
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="bg-[#00000050] rounded-lg border border-[#087ec360] p-5 flex justify-between items-center w-[70%]
        max-xl:w-[100%] max-[800px]:flex-col"
      >
        <Image
          className="w-[250px] h-[250px] rounded-full border-2 shadow-sm pointer-events-none select-none
          max-sm:w-[200px] max-sm:h-[200px]"
          src={"/profile.webp"}
          width={1600}
          height={1600}
          alt={"profile.webp"}
          loading="lazy"
        />

        <div className="px-10 max-sm:p-5">
          <h1 
            className="text-2xl font-bold text-blue text-shadow-lg mb-3
            max-[800px]:text-center max-[800px]:my-3 max-sm:mt-0 max-sm:text-lg"
          >
            Gustavo Lima Martin
          </h1>

          <p className="font-extralight max-[800px]:text-center max-sm:text-xs">
            Desenvolvedor Full Stack experiente em soluções web, com forte expertise em JavaScript e TypeScript. Capacidade para trabalhar de forma colaborativa, com foco em qualidade e performance, buscando sempre entregar soluções eficientes e escaláveis.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="bg-[#00000050] rounded-lg border border-[#087ec360] p-5 w-[30%]
        max-xl:w-[100%]"
      >
        <h1 className="text-center text-2xl text-blue font-bold text-shadow-lg max-sm:text-lg">Tech Stack</h1>
        <ul className="mt-5 flex flex-wrap gap-2 justify-center items-center max-sm:text-xs">
          { techStack.map((tech) => (
            <li key={tech.name} className="font-bold">
              <a href={tech.link} target="_blank">
                <span className="text-blue">#</span>
                {tech.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}