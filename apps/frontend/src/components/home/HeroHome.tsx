'use client';

import Image from "next/image";
import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";
import TechList from "../TechList";
import { usePathname } from "next/navigation";

export default function HeroHome() {
  const pathname = usePathname();

  return (
    <section className="flex justify-center items-center min-h-screen relative mask-b-from-100% mask-t-from-100%">
      <Image 
        className="-z-10 object-cover pointer-events-none mask-t-from-70% mask-b-from-70%"
        src="/background-home.webp"
        alt="home.webp"
        fill
        quality={100}
        priority={true}
      />
      <motion.div
        key={pathname}
        variants={fadeIn("up", 0.1)}
        initial={"hidden"}
        animate={"show"}
        className="text-center flex flex-col justify-center items-center overflow-hidden"
      >
        <h1 
          className="text-5xl text-shadow-lg font-bold mb-5
          max-lg:text-4xl max-md:text-3xl max-sm:text-xl max-sm:mb-3"
        >
          Desenvolvedor <span className="linear-gradient-blue">{"{Full Stack}"}</span>
        </h1>

        <h2 
          className="text-xl font-light mx-[20%]
          max-lg:mx-[10%] max-lg:text-base max-md:text-sm max-sm:mx-[5%] max-sm:text-xs"
        >
          Experiente em soluções web, com sólida expertise na implementação de aplicações avançadas e escaláveis.
        </h2>

        <div className="w-[640px] flex justify-items-start items-center mt-5 overflow-hidden max-sm:w-[300px]">
          <TechList/>
        </div>
        
        <div className="flex gap-5 justify-start items-center mt-5">
          <a 
            className="btn w-30 p-6 border-0 bg-blue text-shadow-lg font-bold rounded-full max-sm:p-4 max-sm:text-xs"
            href={"https://github.com/GustavoMartin2002"}
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="btn w-30 p-6 border-0 bg-blue text-shadow-lg font-bold rounded-full max-sm:p-4 max-sm:text-xs"
            href={"https://www.linkedin.com/in/gustavo-lima-martin2002"}
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </motion.div>
    </section>
  );
}