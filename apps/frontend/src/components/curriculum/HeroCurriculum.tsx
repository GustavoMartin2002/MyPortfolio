'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variant"

export default function HeroCurriculum() {
  return (
    <motion.section
      variants={fadeIn("up", 0.1)}
      initial={"hidden"}
      animate={"show"}
      className="min-h-screen flex justify-center items-center m-auto gap-20 w-[80%]
      max-xl:w-full max-lg:flex-col max-lg:gap-10"
    >
      <div>
        <Image
          className="w-[300px] h-[300px] shadow-2xl rounded-full
          max-xl:w-[250px] max-xl:h-[250px] max-md:w-[200px] max-md:h-[200px]"
          src={"/profile.webp"}
          width={1600}
          height={1600}
          alt={"Gustavo"}
          priority={true}
        />
      </div>
    
      <div className="w-[60%] max-lg:w-[80%] max-sm:w-[90%]">
        <h1
          className="text-5xl linear-gradient-blue text-shadow-lg text-start font-bold
          max-lg:text-4xl max-lg:text-center max-md:text-3xl max-sm:text-2xl"
        >
          Gustavo Lima Martin
        </h1>

        <p
          className="text-xl text-start text-shadow-lg font-extralight mt-3
          max-lg:text-lg max-lg:text-center max-md:text-base max-sm:text-sm"
        >
          <span className="font-medium">Desenvolvedor Full Stack</span> com uma trajetória focada na criação de <span className="font-medium">soluções completas</span>. Comprometido com o <span className="font-medium">aprendizado constante</span> e a <span className="font-medium">evolução técnica</span>, visando alcançar a <span className="font-medium">excelência</span> como <span className="font-medium">Engenheiro de Software</span>.
        </p>

        <a
          className="btn text-base text-shadow-lg font-bold bg-blue rounded-full p-6 border-0 mt-5
          max-lg:flex max-sm:p-4 max-sm:text-xs"
          href={"https://drive.google.com/file/d/1IpkA1fyFnpQlWYKucrm1WWlZY83daKam/view?usp=drive_link"}
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </motion.section>
  )
}