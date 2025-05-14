'use client'

import useAllProjects from "../hooks/useAllProjects";
import ErrorProjects from "../ErrorProjects";
import PointsLoading from "../PointsLoading";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { useState } from "react";

export default function AllProjects() {
  const { projects, loading, error } = useAllProjects()
  const [isLoading, setIsLoading] = useState(true)

  if (loading) {
    return (
      <section className="w-full max-h-screen">
        <PointsLoading/>
      </section>
    )
  }

  if (error) {
    return (
      <motion.section
        variants={fadeIn("", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="w-full max-h-screen"
      >
        <ErrorProjects erro={error}/>
      </motion.section>
    )
  }

  if(projects.length === 0) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <h5 className="text-lg text-center font-light max-sm:text-xs">Não há projetos disponíveis no momento.</h5>
      </section>
    )
  }

  return (
    <motion.section
      variants={fadeIn("", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once: true, amount: 0}}      
      className="carousel carousel-vertical w-full max-h-[80vh]"
    >
      { projects.map((project) => (
        <div 
          key={project._id} 
          className="snap-center flex flex-col bg-[#00000050] border border-[#087ec361] rounded-md shadow-lg my-7 w-[600px] h-auto mx-auto
          max-sm:w-[90%]"
        >
          <figure className="p-10 max-sm:p-6 relative">
            { isLoading && (
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
                <span className="loading loading-spinner loading-md"></span>
              </div>
            )}
            <Image
              className={`w-[1920px] h-auto m-auto rounded-sm ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              src={ project.image }
              width={1920}
              height={1080}
              alt={"Projeto"}
              priority={true}
              onLoad={() => setIsLoading(false)}
            />
          </figure>

          <div className="flex flex-col px-10 pb-10 max-sm:px-6 max-sm:pb-6">
            <Link 
              href={`/projeto/${ project._id }`} 
              className="flex justify-between text-shadow-lg
              hover:animate-pulse hover:ease-in-out hover:text-[#0088ff]"
            >
              <h1 
                className="text-3xl font-bold
                max-lg:text-xl max-sm:text-lg"
              >
                {project.name}
              </h1>

              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-up-right-circle-fill text-shadow-lg
                max-lg:w-[25px] max-lg:h-[25px] max-sm:w-[20px] max-sm:h-[20px]"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
              </svg>
            </Link>

            <div className="mt-10">
              <div className="my-1 max-lg:text-sm max-sm:text-xs">
                <span >Data: </span>
                <span className="text-gray-500">{ new Date(project.date).toLocaleDateString('pt-BR') }</span>
              </div>

              <div className="my-1 max-lg:text-sm max-sm:text-xs">
                <span >Categoria: </span>
                <span className="text-gray-500">{ project.categorie.toLocaleUpperCase() }</span>
              </div>

              <div 
                className="my-1 flex flex-wrap gap-2
                max-lg:text-sm max-sm:text-xs"
              >
                <span >Tecnologias: </span>
                { project.technologies.map((tech, index) => (
                  <span key={index} className="text-center text-shadow-lg bg-[#014581] font-bold rounded-full px-2 py-0.5">
                    { tech }
                  </span>
                ))}
              </div>

              <div className="max-lg:text-sm max-sm:text-xs">
                <span>Link: </span>
                <a href={project.link} className="link text-blue break-words overflow-hidden">{ project.link }</a>
              </div> 
            </div>
          </div>
        </div>
      )) }
    </motion.section>
  )
}