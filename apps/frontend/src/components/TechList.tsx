'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TechList() {
  const technologies = [
    { id: 1,
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      icon: '/techStack/typescript.svg'
    },
    { id: 2,
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      icon: '/techStack/javascript.svg'
    },
    { id: 3,
      name: 'React',
      url: 'https://react.dev/',
      icon: '/techStack/react.svg'
    },
    { id: 4,
      name: 'Next.js',
      url: 'https://nextjs.org/',
      icon: '/techStack/nextjs.svg'
    },
    { id: 5,
      name: 'Node.js',
      url: 'https://nodejs.org/',
      icon: '/techStack/nodejs.svg'
    },
    { id: 6,
      name: 'NestJS',
      url: 'https://nestjs.com/',
      icon: '/techStack/nestjs.svg'
    },
    { id: 7,
      name: 'Jest',
      url: 'https://jestjs.io/',
      icon: '/techStack/jest.svg'
    },
    { id: 8,
      name: 'PostgreSQL',
      url: 'https://www.postgresql.org/',
      icon: '/techStack/postgresql.svg'
    },
    { id: 9,
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
      icon: '/techStack/mongodb.svg'
    },
  ];  

  return (
    <>
      <motion.ul
        initial={{x: 0}}
        animate={{x: "-100%"}}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0 py-2"
      >
        {technologies.map((tech) => (
          <motion.li 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={tech.id }
          >
            <a
              href={tech.url}
              target="_blank"
            >
              <Image
                className="mx-3 max-sm:mx-2 max-sm:w-[25px] max-sm:h-[25px]"
                src={tech.icon}
                width={50}
                height={50}
                alt={tech.name}
                priority={true}
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.ul
        initial={{x: 0}}
        animate={{x: '-100%'}}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="flex shrink-0 py-2"
      >
        {technologies.map((tech) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={tech.id }
          >
            <a
              href={tech.url}
              target="_blank"
            >
              <Image
                className="mx-3 max-sm:mx-2 max-sm:w-[25px] max-sm:h-[25px]"
                src={tech.icon}
                width={50}
                height={50}
                alt={tech.name}
                priority
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}