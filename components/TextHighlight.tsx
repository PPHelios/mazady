"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function TextHighlight() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto max-w-4xl p-8 text-center text-2xl font-bold
          leading-relaxed text-neutral-700 dark:text-white md:text-4xl
          lg:text-5xl lg:leading-snug"
      >
        Step into a world of endless possibilities,
        {" "}
        <Highlight className="text-black dark:text-white">
        And make every auction a discovery.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
