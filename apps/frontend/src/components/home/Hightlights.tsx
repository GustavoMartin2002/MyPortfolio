'use client'

import PointsLoading from "../PointsLoading";
import ErrorProjects from "../ErrorProjects";
import useHighlights from "../hooks/useHighlights";
import Project from "./Project";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

export default function Highlights() {
  const { latestProjects, loading, error } = useHighlights();

  if (loading) {
    return (
      <section 
        className="bg-[#00000050] border-[#087ec360] border rounded-lg py-10 my-20 w-[80%] mx-auto flex flex-col justify-center items-center
        max-sm:w-[90%] max-[450px]:px-5"
      >
      <h3 className="text-3xl text-shadow-lg font-bold rounded-full px-5 py-1 max-lg:text-lg">
        Destaques
      </h3>
      <PointsLoading/>
    </section>
    )
  }
    
  if (error) {
    return (
      <section 
        className="bg-[#00000050] border-[#087ec360] border rounded-lg py-10 my-20 w-[80%] mx-auto flex flex-col justify-center items-center
        max-sm:w-[90%] max-[450px]:px-5"
      >
        <h3 className="text-3xl text-shadow-lg font-bold rounded-full px-5 py-1 max-lg:text-lg">Destaques</h3>
        <ErrorProjects erro={error}/>
      </section>
    )
  }

  if (latestProjects.length === 0) {
    return (
      <section
        className="min-h-screen bg-[#00000050] border-[#087ec360] border rounded-lg py-10 my-20 w-[80%] mx-auto flex flex-col justify-cente items-center max-sm:w-[90%] max-[450px]:px-5"
      >
        <h3 className="text-3xl text-shadow-lg font-bold rounded-full px-5 py-1 max-lg:text-lg">Destaques</h3>
        <div className="m-auto">
          <h5 className="text-lg text-center font-light max-sm:text-xs">Não há projetos disponíveis no momento.</h5>
        </div>
      </section>
    )
  }

  return (
    <motion.section
      variants={fadeIn("", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once: true, amount: 0}}
      className="bg-[#00000050] border-[#087ec360] border rounded-lg py-10 my-20 w-[80%] mx-auto flex flex-col justify-center items-center
      max-sm:w-[90%] max-[450px]:px-5"
    >
      <h3 className="text-3xl text-shadow-lg font-bold rounded-full px-5 py-1 max-lg:text-lg">
        Destaques
      </h3>

      <div 
        className="grid grid-cols-3 flex-wrap gap-20 my-20
        max-[1800px]:grid-cols-2 max-xl:grid-cols-1 max-md:my-10 max-md:gap-10"
      >
        { latestProjects.map(project => (
          <Project key={project._id} _id={project._id} title={project.name} image={project.image} categorie={project.categorie}/>
        )) }
      </div>
    </motion.section>
  )
}