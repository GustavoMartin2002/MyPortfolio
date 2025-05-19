'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

export default function Profile() {
  return (
    <section 
      className="mx-auto my-20 w-[80%] flex gap-10
      max-sm:w-[90%] max-xl:flex-col"
    >
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="bg-[#00000050] rounded-lg border border-[#087ec360] p-5 flex justify-between items-center w-[70%]
        max-xl:w-[100%] max-[800px]:flex-col"
      >
        <Image
          className="w-[250px] h-[250px] rounded-full border-2 shadow-sm
          max-sm:w-[200px] max-sm:h-[200px]"
          src={"/profile.webp"}
          width={1600}
          height={1600}
          alt={"profile"}
          priority={true}
        />

        <div className="px-10 max-sm:p-5">
          <h1 
            className="text-2xl font-bold text-blue text-shadow-lg mb-3
            max-[800px]:text-center max-[800px]:my-3 max-sm:mt-0 max-sm:text-lg"
          >
            Gustavo Lima Martin
          </h1>

          <p className="font-extralight max-sm:text-xs">
            Desenvolvedor Full Stack experiente em soluções web, com forte expertise em JavaScript e TypeScript. Capacidade para trabalhar de forma colaborativa, com foco em qualidade e performance, buscando sempre entregar soluções eficientes e escaláveis.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true, amount: 0}}
        className="bg-[#00000050] rounded-lg border border-[#087ec360] p-5 w-[30%]
        max-xl:w-[100%]"
      >
        <h1 className="text-center text-2xl text-blue font-bold text-shadow-lg max-sm:text-lg">Tech Stack</h1>
        <ul className="mt-10 flex flex-wrap gap-2 justify-center items-center max-sm:mt-5 max-sm:text-xs">
          <li className="font-bold">
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
              <span className="text-blue">#</span>
              HTML5
            </a>
          </li>

          <li className="font-bold">
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
              <span className="text-blue">#</span>
              CSS3
            </a>
          </li>

          <li className="font-bold">
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
              <span className="text-blue">#</span>
              JavaScript
            </a>
          </li>

          <li className="font-bold">
            <a href="https://www.typescriptlang.org/" target="_blank">
              <span className="text-blue">#</span>
              TypeScript
            </a>
          </li>

          <li className="font-bold">
            <a href="https://tailwindcss.com/" target="_blank">
              <span className="text-blue">#</span>
              TailwindCSS
            </a>
          </li>

          <li className="font-bold">
            <a href="https://react.dev/" target="_blank">
              <span className="text-blue">#</span>
              React.js
            </a>
          </li>

          <li className="font-bold">
            <a href="https://reactnative.dev/" target="_blank">
              <span className="text-blue">#</span>
              ReactNative
            </a>
          </li>

          <li className="font-bold">
            <a href="https://nextjs.org/" target="_blank">
              <span className="text-blue">#</span>
              Next.js
            </a>
          </li>

          <li className="font-bold">
            <a href="https://nodejs.org/pt" target="_blank">
              <span className="text-blue">#</span>
              Node.js
            </a>
          </li>

          <li className="font-bold">
            <a href="https://fastify.dev/" target="_blank">
              <span className="text-blue">#</span>
              Fastify
            </a>
          </li>

          <li className="font-bold">
            <a href="https://nestjs.com/" target="_blank">
              <span className="text-blue">#</span>
              NestJS
            </a>
          </li>

          <li className="font-bold">
            <a href="https://jestjs.io/" target="_blank">
              <span className="text-blue">#</span>
              Jest
            </a>
          </li>

          <li className="font-bold">
            <a href="https://www.mysql.com/" target="_blank">
              <span className="text-blue">#</span>
              MySQL
            </a>
          </li>

          <li className="font-bold">
            <a href="https://www.postgresql.org/" target="_blank">
              <span className="text-blue">#</span>
              PostgreSQL
            </a>
          </li>

          <li className="font-bold">
            <a href="https://www.mongodb.com/" target="_blank">
              <span className="text-blue">#</span>
              MongoDB
            </a>
          </li>

          <li className="font-bold">
            <a href="https://firebase.google.com/" target="_blank">
              <span className="text-blue">#</span>
              Firebase
            </a>
          </li>

          <li className="font-bold">
            <a href="https://git-scm.com/" target="_blank">
              <span className="text-blue">#</span>
              Git
            </a>
          </li>

          <li className="font-bold">
            <a href="https://www.docker.com/" target="_blank">
              <span className="text-blue">#</span>
              Docker
            </a>
          </li>

          <li className="font-bold">
            <a href="https://aws.amazon.com/" target="_blank">
              <span className="text-blue">#</span>
              AWS
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}