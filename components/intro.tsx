"use client";

import Image from "next/image";
import React from "react";
import pic from "/public/surenpic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[67.6rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={pic}
              alt="Landscape picture"
              width="126"
              height="120"
              quality="95"
              priority={true}
              style={{ objectFit: "cover", borderRadius: "60px" }}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.6,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Suren.</span> I'm a{" "}
        <span className="font-bold">Full Stack Developer</span> with{" "}
        <span className="font-bold">9+ years</span> of experience. I enjoy
        building <span className="">apps & sites</span>. <br />
        My skills:{" "}
        <span className="underline">
          React (Next.js), Angular, Java, Spring Boot, SQL/NoSQL, AWS
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white 
                px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
                active:scale-105 transition cursor-pointer border border-black/10"
        >
          Contact me here
          <BsArrowRight className="opacity-100 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-teal-900 hover:bg-teal-950  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 
                active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          {" "}
          Download CV
          <HiDownload className="opacity-100 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
                active:scale-105 transition cursor-pointer border border-black/10 "
          href="https://www.linkedin.com/in/suren-b-9b4754168/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-3.5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] 
                active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/Suren06?tab=repositories"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
