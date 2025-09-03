"use client";

import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function ServicesList() {
  type resumeServices = Pick<typeof services[number], "id" | "name" | "resume">;
  const resumeServicesList: resumeServices[] = services.map((service) => ({
    id: service.id,
    name: service.name,
    resume: service.resume,
  }));

  return (
    <ul
      className="w-full flex flex-col gap-5"
    >
      { resumeServicesList.map((service) => (
          <motion.li 
            key={service.id}
            whileHover={{ scale: 1.03 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: true, amount: 0}}
            className="w-[90%] m-auto bg-[#00000050] border-[#087ec360] border rounded-lg
            max-sm:w-full"
          >
            <a
              href={`/servico/${service.id}`}
              className="flex items-center p-10 hover:ease-in-out max-sm:p-7"
            >
              <div className="w-full">
                <div
                  className="flex justify-between
                  max-sm:justify-center"
                >
                  <h3
                    className="text-start text-xl font-bold text-[#0088ff] animate-pulse
                    max-lg:text-lg max-md:text-base max-sm:text-sm max-sm:text-center"
                  >
                    {service.name}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-up-right-circle-fill text-[#0088ff] animate-pulse
                    max-lg:w-[25px] max-lg:h-[25px] max-md:w-[20px] max-md:h-[20px] max-sm:hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                  </svg>
                </div>
                <p
                  className="text-start font-extralight mt-1
                  max-lg:text-sm max-sm:text-xs max-sm:text-center"
                >
                  {service.resume}
                </p>
              </div>
            </a>
          </motion.li>
        ))
      }
    </ul>
  );
}
