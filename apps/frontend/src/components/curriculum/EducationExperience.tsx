'use client'

import { fadeIn } from "@/utils/variant"
import { motion } from "framer-motion"

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
        <ul className="list  my-auto gap-5">
          <li className="list-item list-disc ml-5">
            <time className="font-mono italic">2021 - 2024</time>
            <h1
              className="text-xl font-bold max-lg
              max-lg:text-lg max-sm:text-sm"
            >
              Análise e Desenvolvimento de Sistemas
            </h1>
            <h2
              className="text-lg font-mono
              max-lg:text-base max-sm:text-xs"
            >
              Centro Universitário Estácio da Bahia
            </h2>
          </li>

          <li className="list-item list-disc ml-5">
            <time className="font-mono italic">2024 - 2025</time>
            <h1
              className="text-xl font-bold
              max-lg:text-lg max-sm:text-sm"
            >
              Programação de Sistemas com Aplicações Financeiras
            </h1>
            <h2
              className="text-lg font-mono
              max-lg:text-base max-sm:text-xs"
            >
              Senac Bahia
            </h2>
          </li>
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
        <ul className="list gap-5">
          <li className="list-item list-disc ml-5">
            <time className="font-mono italic">2024 - 2025</time>
            <h1
              className="text-xl font-bold mb-3
              max-lg:text-lg max-sm:text-sm"
            >
              Programador de Sistemas de Informação
            </h1>
            <p className="text-base font-light mb-3 max-sm:text-xs">Durante 10 meses, tive a oportunidade de atuar como Aprendiz de Programação de Sistemas de Informação na <b className="font-medium">Ford Motor Company</b>, em parceria com o <b className="font-medium">Senac Bahia</b>. Nesse período, desenvolvi uma sólida base de competências técnicas e interpessoais, trabalhando diretamente no setor de <b className="font-medium">HIL (Hardware-in-the-loop)</b>.</p>
            <span className="max-sm:text-xs">Tech Stack: </span>
            <span className="max-sm:text-xs">Python, Microsoft Office</span>
          </li>
        </ul>
      </motion.section>      
    </section>
  )
}