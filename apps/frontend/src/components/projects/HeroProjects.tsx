'use client';

import Image from "next/image";
import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";

export default function HeroProjects() {
  return (
    <section className="hero min-h-screen relative mask-t-from-100% mask-b-from-100%">
      <Image
        className="-z-10 object-cover pointer-events-none mask-t-from-70% mask-b-from-70%"
        src="/background-projects.webp"
        alt="projects.webp"
        fill
        quality={100}
        priority={true}
      />
      <div className="hero-content">
        <motion.div 
          variants={fadeIn("up", 0.1)}
          initial={"hidden"}
          animate={"show"}
          className="max-w-3xl text-center"
        >
          <h1
            className="text-5xl text-shadow-lg font-bold linear-gradient-blue
            max-lg:text-4xl max-sm:text-3xl"
            >
              Projetos
            </h1>

          <h2 className="text-xl text-shadow-lg font-light mt-3 max-sm:text-sm">
            Nesta seção, você poderá conhecer alguns dos projetos que desenvolvi com dedicação e foco em criar soluções funcionais.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}