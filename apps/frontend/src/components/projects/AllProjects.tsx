'use client';

import useAllProjects from "../hooks/useAllProjects";
import ErrorProjects from "../ErrorProjects";
import PointsLoading from "../PointsLoading";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { useState } from "react";
import { CarouselProjects } from "./CarouselProjects";
import Pagination from "./Pagination";

export default function AllProjects() {
  const { projects, loading, error, totalPages, currentPage, setCurrentPage } = useAllProjects();
  const [isLoading, setIsLoading] = useState(true);

  if (loading) {
    return (
      <section className="w-full max-h-screen">
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
        className="w-full max-h-screen"
      >
        <ErrorProjects erro={error}/>
      </motion.section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <h5 className="text-lg text-center font-light max-sm:text-xs">Não há projetos disponíveis no momento.</h5>
      </section>
    );
  }

  return (
    <motion.section
      variants={fadeIn("", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once: true, amount: 0}}      
      className="m-auto max-h-screen mx-[10%] max-sm:mx-[5%]"
    >
      <CarouselProjects projects={projects} loading={isLoading} setIsLoading={setIsLoading} />
      <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage} />
    </motion.section>
  );
}