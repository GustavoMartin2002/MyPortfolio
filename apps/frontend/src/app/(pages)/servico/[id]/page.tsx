"use client";

import Contact from "@/components/Contact";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { fadeIn } from "@/utils/variant";
import { use } from "react";

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const service = services.find((service) => service.id === id);

  if (!service) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center w-full">
        <h1
          className="text-3xl font-bold linear-gradient-blue
          max-lg:text-2xl max-md:text-xl max-sm:text-lg"
        >
          Serviço não encontrado
        </h1>
        <p
          className="mt-2 text-center
          max-md:text-sm max-sm:text-xs"
        >
          O serviço que você está procurando não existe.
        </p>
        <Link href={"/servicos"} className="btn text-shadow-lg font-bold bg-blue rounded-full border-0 mt-10">Voltar</Link>
      </section>
    );
  }
  
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center w-full">
        <div
          className="w-[50%] flex flex-col justify-center m-auto p-5 mt-30 max-sm:mt-10
          max-2xl:w-[60%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-[95%]"
        >
          <motion.h1
            variants={fadeIn("left", 0.0)}
            initial={"hidden"}
            animate={"show"}
            className="text-4xl text-start font-extrabold mb-5 linear-gradient-blue
            max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-sm:text-center max-sm:mb-3"
          >
            { service.name }
          </motion.h1>
          <motion.h2
            variants={fadeIn("left", 0.0)}
            initial={"hidden"}
            animate={"show"}
            className="text-lg text-justify font-normal
            max-md:text-base max-sm:text-sm max-sm:text-center"
          >
            { service.resume }
          </motion.h2>

          <motion.figure
            variants={fadeIn("", 0.4)}
            initial={"hidden"}
            animate={"show"}
            className="w-full h-[540px] relative mt-10 max-sm:h-[300px]"
          >
            <Image
              className="object-cover  pointer-events-none select-none"
              src={`/dev_services/${service.image}`}
              alt={"servico.webp"}
              quality={90}
              fill
              priority={true}
              sizes="(max-height: 640px) 100vw"
            />
          </motion.figure>

          <div className="w-full mt-10 text-justify">
            <motion.h3
              variants={fadeIn("", 0.6)}
              initial={"hidden"}
              animate={"show"}
              className="text-lg font-semibold max-sm:text-base"
            >
              Descrição
            </motion.h3>
            <motion.p
              variants={fadeIn("", 0.8)}
              initial={"hidden"}
              animate={"show"}
              className="font-extralight mt-2 max-sm:text-xs"
            >
              { service.description }
            </motion.p>
          </div>

          <div className="w-full mt-10 text-justify max-md:text-start">
            <motion.h3
              variants={fadeIn("", 1.0)}
              initial={"hidden"}
              animate={"show"}
              className="text-lg font-semibold max-sm:text-base"
            >
              Tecnologias
            </motion.h3>
            <motion.ul
              variants={fadeIn("", 1.2)}
              initial={"hidden"}
              animate={"show"}
              className="ml-5"
            >
              { service.technologies.map((technology, index) => (
                <li key={index} className="list-disc flex flex-wrap justify-items-start items-center gap-1 my-1">
                  <span className="list-item font-bold text-base max-sm:text-sm">{ technology.title }</span>
                  { technology.name.map((techName, index) => (
                    <span
                      key={index}
                      className="text-sm text-shadow-lg font-normal bg-[#014581] rounded-full px-3 py-1.5 my-1 max-sm:text-xs"
                    >
                      { techName }
                    </span>
                  ))}
                  
                </li>
              )) }
            </motion.ul>
          </div>

          <div className="w-full mt-10 text-justify max-sm:text-start">
            <motion.h3
              variants={fadeIn("", 1.4)}
              initial={"hidden"}
              animate={"show"}
              className="text-lg font-semibold max-sm:text-base"
            >
              Funcionalidades
            </motion.h3>
              { service.features.map((feature) => (
                <motion.div
                  variants={fadeIn("", 1.6)}
                  initial={"hidden"}
                  animate={"show"}
                  key={feature.title} 
                  className="collapse collapse-arrow bg-[#00000050] border-0 mt-5"
                >
                  <input type="checkbox" />
                  <div className="collapse-title font-normal select-none max-sm:text-sm">{ feature.title }</div>
                  <div className="collapse-content text-sm font-extralight max-sm:text-xs">{ feature.description }</div>
                </motion.div>
              )) }
          </div>

          <div className="w-full mx-auto mt-10 text-justify max-sm:text-start">
            <motion.h3
              variants={fadeIn("", 1.8)}
              initial={"hidden"}
              animate={"show"}
              className="text-lg font-semibold max-sm:text-base"
            >
              Destaques
            </motion.h3>
              { service.highlights.map((highlight) => (
                <motion.div
                  variants={fadeIn("", 2.0)}
                  initial={"hidden"}
                  animate={"show"}
                  key={highlight.title} 
                  className="collapse collapse-arrow bg-[#00000050] border-0 mt-5"
                >
                  <input type="checkbox" />
                  <div className="collapse-title font-normal select-none max-sm:text-sm">{ highlight.title }</div>
                  <div className="collapse-content text-sm font-extralight max-sm:text-xs">{ highlight.description }</div>
                </motion.div>
              )) }
          </div>
          <Contact/>
        </div>
      </section>
    </>
  );
}