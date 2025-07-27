"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";
import HeadlineImage from "./headline-image";

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
          <div className="mt-8 flex w-full max-w-md items-center justify-between rounded-full bg-white/10 px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
            />
            <Button variant={"default"} className="ml-4 rounded-full">
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headline;
