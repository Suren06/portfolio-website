import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import rocheProjImg from "@/public/roche-proj.png";
import dhlProjImg from "@/public/dhl-proj.png";
import pccwProjImg from "@/public/pccw-proj.png";
import axaProjImg from "@/public/axa-proj.png";
import cimbProjImg from "@/public/cimb-proj.png";
import msigProjImg from "@/public/msig-proj.png";
import allianzProjImg from "@/public/allianz-proj.png";
import { FaJava } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaAngular } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "ROCHE - CP, MHH",
    description:
      "I worked as a full-stack developer on this startup project for 2+ years. Users can give public feedback to companies.",
    tags: ["React", "NextJS", "JS", "Java", "Spring Boot", "Tailwind", "AEM", "AWS"],
    imageUrl: rocheProjImg,
  },
  {
    title: "DHL - BEMS",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: dhlProjImg,
  },
  {
    title: "PCCW Solutions - DWFM",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: pccwProjImg,
  },
  {
    title: "AXA - Marc",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: axaProjImg,
  },
  {
    title: "CIMB - Clicks",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: cimbProjImg,
  },
  {
    title: "MSIG - GenLink",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: msigProjImg,
  },
  {
    title: "ALLIANZ - Alpha",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: allianzProjImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "BootStrap",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Context API",
  "Angular",
  "Node.js",
  "Java",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "AWS",
  "Firebase",
  "Git",
] as const;

export const experiencesData = [
  {
    title: "Sr.Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I have worked in Allianz Insurance for 3+ years as Java Developer.",
    icon: React.createElement(FaJava),
    date: "July 2013 – Dec 2016",
  },
  {
    title: "Java & JS Developer",
    location: "KL, Malaysia",
    description:
      "I have worked in MSIG Insurance for less than a year as Full-Stack Developer.",
    icon: React.createElement(FaJava),
    date: "Mar 2016 – Apr 2018",
  },
  {
    title: "Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I have worked in CIMB Clicks for less than a year as Full-Stack Developer.",
    icon: React.createElement(SiSpring),
    date: "Apr 2018 – Mar 2019",
  },
  {
    title: "Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I have worked in AXA Partners for 1.4 years as Full-Stack Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2019 – Jun 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I have worked in PCCW Solutions for 1 year as Full-Stack Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2020 – July 2021",
  },
  {
    title: "Front End Developer (Freelancer)",
    location: "KL, Malaysia",
    description:
      "I have worked in DHL over 1+ year as Front End Developer.",
    icon: React.createElement(FaAngular),
    date: "Jul 2022 - Jul 2023",
  },
  {
    title: "Sr.Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I am working in Roche over 2+ years as Sr.Full-Stack Developer.",
    icon: React.createElement(TbBrandJavascript),
    date: "July 2021 – Present",
  },
] as const;