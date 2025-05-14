'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectProps {
  _id: string
  title: string
  image: string
  categorie: string
}

export default function Project(props: ProjectProps) {
  return (
    <Link href={`/projeto/${props._id}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="card w-96 h-60 bg-base-100 border border-[#00a2ff4b] drop-shadow-sm m-auto rounded-md
        max-[450px]:w-full max-[450px]:h-full"
      >
        <figure>
          <Image
              className="w-full h-full"
              src={props.image}
              width={1920}
              height={1080}
              alt={"projeto"}
              priority={true}
            />
        </figure>
        <div className="py-3 px-5 flex justify-between items-center">
          <h2 className="text-center text-lg font-bold max-sm:text-sm">{props.title}</h2>
          <div className="bg-[#106EBE] text-shadow-lg uppercase font-bold py-1 px-2 rounded-xs max-sm:text-sm">{props.categorie}</div>
        </div>
      </motion.div>
    </Link>
  )
}