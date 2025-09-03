"use client";

import { services } from "@/data/services";
import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HighlightServices() {
  const highlightServices = services.filter(service => 
    service.id === "Website" || 
    service.id === "APIs" || 
    service.id === "Manutencao" || 
    service.id === "Web-personalizado"
  );

  return (
    <motion.section
      variants={fadeIn("", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once: true, amount: 0}}
      className="min-h-[50vh] w-[90%] my-20 mx-auto flex flex-col justify-center items-center max-sm:my-10"
    >
      <h3
        className="text-3xl text-center font-normal text-shadow-lg mb-20
        max-lg:text-2xl max-md:text-xl max-sm:text-lg max-md:mb-0"
      >
        Mais procurados
      </h3>
      { highlightServices && (
        <div
          className="grid grid-cols-4 gap-20 mx-auto
          max-2xl:grid-cols-2 max-md:grid-cols-1 max-md:my-10 max-md:gap-10"
        >
          { highlightServices.map(service => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={service.id}
              className="card w-80 shadow-sm bg-[#00000050] border-[#087ec360] rounded-sm border max-sm:w-full"
            >
              <Link
                key={service.id}
                href={`/servico/${service.id}`}
              >
                <figure className="relative w-full h-48">
                  <Image
                    className="object-cover pointer-events-none select-none"
                    src={`/dev_services/${service.image}`}
                    alt={"service.webp"}
                    fill={true}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
                <div className="card-body">
                  <h4 className="text-base font-normal max-sm:text-sm">{service.name}</h4>
                  <p className="text-sm text-start font-extralight max-sm:text-xs">{service.resume}</p>
                </div>
              </Link>
            </motion.div>
          )) }
        </div>
      ) }
    </motion.section>
  );
}
