'use client';

import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-5 my-20 mx-auto w-[60%]
      max-lg:my-10 max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%]"
    >
      <motion.p
        variants={fadeIn('right', 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="text-xl font-extralight max-lg:text-lg max-md:text-base max-sm:text-sm"
      >
        Minha paixão por <b>tecnologia</b> floresceu desde a infância. A curiosidade sobre o funcionamento dos dispositivos eletrônicos sempre me interessou. Essa afinidade natural me levou para uma carreira dinâmica e desafiadora no <b>universo da tecnologia</b>.
      </motion.p>

      <motion.p
        variants={fadeIn('left', 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="text-xl font-extralight max-lg:text-lg max-md:text-base max-sm:text-sm"
      >
        Minha jornada profissional teve um início prático na área de manutenção de celulares. Essa experiência foi fundamental para aprimorar minhas habilidades técnicas e desenvolver uma <b>mentalidade analítica</b>, essencial na resolução de <b>problemas complexos</b>.
      </motion.p>

      <motion.p
        variants={fadeIn('right', 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="text-xl font-extralight max-lg:text-lg max-md:text-base max-sm:text-sm"
      >
        A constante evolução do cenário tecnológico e minha busca por conhecimento, me motivaram a expandir meus horizontes. Escolhi seguir para o <b>desenvolvimento de sistemas</b>, <b>sites</b> e <b>aplicativos</b>, uma área onde pude aplicar minha experiência técnica de forma mais criativa. Minha formação em <b>Análise e Desenvolvimento de Sistemas</b> solidificou essa transição.
      </motion.p>

      <motion.p
        variants={fadeIn('left', 0.4)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="text-xl font-extralight max-lg:text-lg max-md:text-base max-sm:text-sm"
      >
        Ao adentrar o mundo da <b>programação</b>, minhas habilidades em <b>JavaScript</b> e <b>TypeScript</b> se tornaram pilares. No meu primeiro emprego, tive a oportunidade de liderar o desenvolvimento <b>front-end</b> e também contribuir com o <b>back-end</b>, uma experiência valiosa que me proporcionou uma visão integrada do <b>Desenvolvimento Full Stack</b>.
      </motion.p>

      <motion.p
        variants={fadeIn('right', 0.5)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="text-xl font-extralight max-lg:text-lg max-md:text-base max-sm:text-sm"
      >
        Meu objetivo de carreira é evoluir para a posição de <b>Engenheiro de Software</b>. Essa ambição me impulsiona a buscar constantemente o aprimoramento técnico e aplicar meus conhecimentos.
      </motion.p>
    </section>
  );
}