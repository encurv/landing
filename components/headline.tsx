"use client";

import { motion } from "motion/react";
import HeadlineImage from "./headline-image";
import Waitlist from "@/components/waitlist";

const Headline = () => {
  return (
    <>
      <div className="relative h-auto w-screen p-4 lg:h-[calc(100vh-4rem)] lg:p-8">
        <HeadlineImage />
        <div className="absolute inset-0 rounded-4xl bg-black/50" />
        <div className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center text-white lg:mt-0">
          <motion.h1
            className="mb-4 text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Real Memory for AI. Out of the Box.
          </motion.h1>
          <p className="hidden sm:block lg:max-w-xl lg:text-lg">
            Fully managed memory engine for next-gen AI applications.
            <br />
            Ship faster, while we care about the rest.
          </p>
          <Waitlist />
        </div>
      </div>
    </>
  );
};

export default Headline;
