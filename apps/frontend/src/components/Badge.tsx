'use client'

import { motion } from "framer-motion"
import Image from "next/image"

interface BadgeProps {
  link: string
  image: string
  name: string
}

export default function Badge(props: BadgeProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={props.link} 
      className="flex flex-col justify-center items-center m-auto bg-[#106dbe1f] rounded-sm py-5 w-52"
      target="_blank"
    >
      <Image
        className="m-auto"
        src={ props.image }
        width={50}
        height={50}
        alt={"Icon"}
        priority={true}
      />
      <span className="text-sm text-center font-medium mt-2 max-sm:text-xs">{ props.name }</span>
    </motion.a>
  )
}