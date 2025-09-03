'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectModel } from "@/models/projectModel";

type ProjectProps = Pick<ProjectModel, "_id" | "name" | "image" | "categorie">;

export default function Project(props: ProjectProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link href={`/projeto/${props._id}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="card w-96 h-60 bg-base-100 border border-[#00a2ff4b] drop-shadow-sm m-auto rounded-md
        max-[480px]:w-full max-[480px]:h-full"
      >
        <figure className="relative">
          { isLoading && (
            <div className="absolute top-0 left-0 w-full h-full bg-base-200 flex justify-center items-center z-10">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          ) }
          <Image
            className={`w-full h-full pointer-events-none select-none ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            src={props.image}
            width={1920}
            height={1080}
            alt={"project.webp"}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </figure>
        <div className="py-3 px-5 flex justify-between items-center">
          <h2 className="text-center text-lg font-bold max-sm:text-xs">{props.name}</h2>
          <div className="bg-[#106EBE] text-shadow-lg uppercase font-bold py-1 px-2 rounded-xs select-none max-sm:text-xs">{props.categorie}</div>
        </div>
      </motion.div>
    </Link>
  );
}