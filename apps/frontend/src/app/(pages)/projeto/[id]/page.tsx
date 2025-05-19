'use client';

import React, { use, useState } from "react";
import useProject from "@/components/hooks/useProject";
import ErrorProjects from "@/components/ErrorProjects";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import LoadingProject from "./loading";

export default function ProjectPage({ params }: { params:Promise<{id: string}> }) {
  const { id } =  use(params);
  const { project, loading, error } = useProject(id);
  const [isLoading, setIsLoading] = useState(true);

  if (loading) {
    return (
      <LoadingProject/>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex flex-col justify-center w-full">
        <ErrorProjects erro={error}/>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col justify-center w-full">
        <ErrorProjects erro={"ID do projeto invalido."}/>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col justify-center w-full">
      <div
        className="w-[50%] flex flex-col justify-center m-auto p-5 mt-30
        max-2xl:w-[60%] max-xl:w-[65%] max-lg:w-[70%] max-lg:mt-10 max-md:w-[80%] max-sm:w-[95%]"
      >
        <motion.h1
          variants={fadeIn("left", 0.0)}
          initial={"hidden"}
          animate={"show"}
          className="text-shadow-lg text-4xl font-extrabold 
          max-lg:text-2xl max-sm:text-xl"
        > 
          { project.name }
        </motion.h1>
        
        <motion.div
          variants={fadeIn("", 0.2)}
          initial={"hidden"}
          animate={"show"}
          className="relative"
        >
          { isLoading && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          )}
          <Image
            className={`w-auto h-auto rounded-xs my-10 shadow-2xl
            max-md:my-5 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            src={project.image}
            alt={"Projeto"}
            width={1920}
            height={1080}
            priority={true}
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>
        
        <motion.div
          variants={fadeIn("", 0.4)}
          initial={"hidden"}
          animate={"show"}
          className="bg-[#00000050] border border-[#087ec360] p-5 mb-10 rounded-lg max-md:mb-5"
        >
          <h2
            className="text-xl font-bold mb-2
            max-lg:text-lg max-sm:text-base"
          >
            { project.name }
          </h2>
          <p 
            className="font-extralight text-base
            max-sm:text-xs"
          >
            {project.description}
          </p>
        </motion.div>

        <div
          className="w-full m-auto flex justify-center gap-6 mb-10
          max-md:mb-5 max-sm:flex-col"
        >
          <motion.div
            variants={fadeIn("", 0.6)}
            initial={"hidden"}
            animate={"show"}
            className="w-[50%] bg-[#00000050] border border-[#087ec360] rounded-lg p-5
            max-sm:w-full"
          >
            <p className="text-gray-500 max-sm:text-xs">Data</p>
            <time className="block text-base text-center font-bold max-sm:text-sm">{ new Date(project.date).toLocaleDateString('pt-BR') }</time>
          </motion.div>

          <motion.div
            variants={fadeIn("", 0.6)}
            initial={"hidden"}
            animate={"show"}
            className="w-[50%] bg-[#00000050] border border-[#087ec360] rounded-lg p-5
            max-sm:w-full"
          >
            <p className="text-gray-500 max-sm:text-xs">Categoria</p>
            <span className="block text-base text-center font-bold uppercase max-sm:text-sm">{ project.categorie }</span>
          </motion.div>
        </div>
        
        <motion.div
          variants={fadeIn("", 0.8)}
          initial={"hidden"}
          animate={"show"}
          className="w-full bg-[#00000050] border border-[#087ec360] rounded-lg mb-10 p-5 max-md:mb-5"
        >
          <h3 className="text-xl text-center font-bold mb-5 max-lg:text-lg">Tecnologias</h3>

          <ul className="flex flex-wrap gap-2">
            { project.technologies.map((tech, index) => (
              <li
                key={index}
                className="text-base text-center text-shadow-lg bg-[#014581] rounded-full font-bold px-3 py-1.5
                max-lg:text-sm max-sm:text-xs"
              >
                {tech}
              </li>
            )) }
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("", 1.0)}
          initial={"hidden"}
          animate={"show"}
          className="w-full flex gap-5 mt-10 justify-center items-center max-md:my-5"
        >
          <a
            href={ project.link }
            className="btn w-30 text-center text-shadow-lg font-bold bg-blue border-none p-6 rounded-full
            transition ease-in-out max-sm:p-4 max-sm:text-xs"
            target="_blank"
          >
            Acessar
          </a>

          <a
            href={ project.github }
            className="btn w-30 text-center text-shadow-lg font-bold bg-blue border-none p-6 rounded-full
            transition ease-in-out max-sm:p-4 max-sm:text-xs"
            target="_blank"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}