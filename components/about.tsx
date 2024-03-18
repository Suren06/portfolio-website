"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45.6rem] text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hi, I'm Suren, a Full Stack Developer with a knack for problem-solving.{" "}<br/>

       <span className="font-semibold">
        Proficient in Java, Spring Boot, Angular, React, and SQL/NOSQL.{" "}<br/>
        </span>
        <span className="">
        Seeking full-time opportunities.
        </span>
        
      </p>

      <p>
        <span className="italic"> Outside of coding, I enjoy sports, movies, workouts, and history/politics.</span>
      </p>
    </motion.section>
  );
}
