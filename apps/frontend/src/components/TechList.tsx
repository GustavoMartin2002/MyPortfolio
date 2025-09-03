'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { resumeTechList } from '@/data/resumeTechList';

export default function TechList() {
  return (
    <>
      <motion.ul
        initial={{x: 0}}
        animate={{x: "-100%"}}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0 py-2"
      >
        { resumeTechList.map((tech) => (
          <motion.li 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={tech.name}
          >
            <a
              href={tech.link}
              target="_blank"
            >
              <Image
                className="mx-3 select-none max-sm:mx-2 max-sm:w-[25px] max-sm:h-[25px]"
                src={tech.image}
                width={50}
                height={50}
                alt={tech.name}
                priority={true}
              />
            </a>
          </motion.li>
        )) }
      </motion.ul>

      <motion.ul
        initial={{x: 0}}
        animate={{x: '-100%'}}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="flex shrink-0 py-2"
      >
        { resumeTechList.map((tech) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={tech.name}
          >
            <a
              href={tech.link}
              target="_blank"
            >
              <Image
                className="mx-3 select-none max-sm:mx-2 max-sm:w-[25px] max-sm:h-[25px]"
                src={tech.image}
                width={50}
                height={50}
                alt={"tech.svg"}
                priority={true}
              />
            </a>
          </motion.li>
        )) }
      </motion.ul>
    </>
  );
}