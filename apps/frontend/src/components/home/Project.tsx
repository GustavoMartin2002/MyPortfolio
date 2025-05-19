'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectProps {
  _id: string
  title: string
  image: string
  categorie: string
}

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
          )}
          <Image
              className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              src={props.image}
              width={1920}
              height={1080}
              alt={"projeto"}
              priority={true}
              onLoad={() => setIsLoading(false)}
            />
        </figure>
        <div className="py-3 px-5 flex justify-between items-center">
          <h2 className="text-center text-lg font-bold max-sm:text-xs">{props.title}</h2>
          <div className="bg-[#106EBE] text-shadow-lg uppercase font-bold py-1 px-2 rounded-xs max-sm:text-xs">{props.categorie}</div>
        </div>
      </motion.div>
    </Link>
  );
}