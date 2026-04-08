import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top group z-10 rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl dark:border-strokedark dark:bg-blacksection dark:hover:border-primary/50 dark:hover:bg-hoverdark xl:p-10"
      >
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Image src={icon} width={40} height={40} alt="title" className="brightness-0 invert" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-black transition-colors dark:text-white">
          {title}
        </h3>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
