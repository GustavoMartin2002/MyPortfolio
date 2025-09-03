'use client';

import PointsLoading from "../PointsLoading";
import ErrorProjects from "../ErrorProjects";
import useHighlights from "../hooks/useHighlights";
import Project from "./Project";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

export default function HighlightProjects() {
  const { latestProjects, loading, error } = useHighlights();

  if (loading) {
    return (
      <section 
        className="py-10 my-20 w-[80%] mx-auto flex flex-col justify-center items-center
        max-sm:w-[90%] max-[450px]:px-5"
      >
      <PointsLoading/>
    </section>
    );
  }
    
  if (error) {
    return (
      <motion.section
        variants={fadeIn("", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="bg-[#00000050] border-[#087ec360] border rounded-lg py-10 my-20 w-[80%] mx-auto flex flex-col justify-center items-center
        max-sm:w-[90%] max-[450px]:px-5"
      >
        <h3
          className="text-3xl text-shadow-lg font-normal rounded-full px-5 py-1
          max-lg:text-2xl max-md:text-xl max-sm:text-lg"
        >
          Destaques
        </h3>
        <ErrorProjects erro={error}/>
      </motion.section>
    );
  }

  if (latestProjects.length === 0) {
    return (
      <motion.section
        variants={fadeIn("", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="min-h-screen bg-[#00000050] border-[#087ec360] border rounded-lg py-10 my-20 w-[80%] mx-auto flex flex-col justify-cente items-center max-sm:w-[90%] max-[450px]:px-5"
      >
        <h3
          className="text-3xl text-shadow-lg font-normal rounded-full px-5 py-1
          max-lg:text-2xl max-md:text-xl max-sm:text-lg"
        >
          Destaques
        </h3>
        <div className="m-auto">
          <h5 className="text-lg text-center font-light max-sm:text-xs">Não há projetos disponíveis no momento.</h5>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      variants={fadeIn("", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once: true, amount: 0}}
      className="bg-[#00000050] border-[#087ec360] border rounded-lg py-10 my-20 w-[80%] mx-auto flex flex-col justify-center items-center
      max-sm:w-[90%] max-[480px]:px-5 max-[480px]:pb-0"
    >
      <h3
        className="text-3xl text-shadow-lg font-normal rounded-full px-5 py-1
        max-lg:text-2xl max-md:text-xl max-sm:text-lg"
      >
        Destaques
      </h3>

      <div 
        className="grid grid-cols-3 flex-wrap gap-20 my-20
        max-[1800px]:grid-cols-2 max-xl:grid-cols-1 max-md:my-10 max-md:gap-10"
      >
        { latestProjects.map(project => (
          <Project key={project._id} _id={project._id} name={project.name} image={project.image} categorie={project.categorie}/>
        )) }
      </div>
    </motion.section>
  );
}