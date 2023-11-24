"use client"
import React from "react";
import CarouselComponent from "@/components/hero/Carousel";
import { motion } from "framer-motion";

// Define the variants for the title animation
const titleVariants = {
  hide: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const MemoriesSection = () => {
  return (
    <section className="pl-3 md:pl-5 pb-3 mb-5 lg:mb-10">
      <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-2">Memories</h1>
      <motion.div
        className="title"
        variants={titleVariants}
        initial="hide"
        whileInView="show"
        whileOut="hide"
      >
        <div className="w-[95%] md:w-[97%] flex justify-center items-center">
          <CarouselComponent className="max-w-md lg:max-w-lg" />
        </div>
      </motion.div>
    </section>
  );
};

export default MemoriesSection;
