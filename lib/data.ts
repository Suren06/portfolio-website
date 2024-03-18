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
      "At Roche, I develop digital solutions for global patient care.",
    tags: ["React", "NextJS", "JS", "Java", "Spring Boot", "Tailwind", "AEM", "AWS"],
    imageUrl: rocheProjImg,
  },
  {
    title: "DHL - BEMS",
    description:
      "I contributed to DHL's Global Event Logistics system.",
    tags: ["Angular", "TypeScript", "Java", "Play framework", "OracleDB"],
    imageUrl: dhlProjImg,
  },
  {
    title: "PCCW Solutions - DWFM",
    description:
      "I was instrumental in designing and implementing the work orders and service tasks system as a developer.",
    tags: ["Angular", "IONIC", "Spring Boot", "Maria DB", "AWS"],
    imageUrl: pccwProjImg,
  },
  {
    title: "AXA - Marc",
    description:
    "I contributed to an internal user system facilitating tracking of member's medical insurance plans and balances.",
    tags: ["Java", "JSF", "Hibernate", "MYSql" ],
    imageUrl: axaProjImg,
  },
  {
    title: "CIMB - Clicks",
    description:
      "I contributed to CIMB Clicks, the comprehensive online banking portal for CIMB Bank.",
    tags: ["Angular", "Java", "Spring", "DB2"],
    imageUrl: cimbProjImg,
  },
  {
    title: "MSIG - GenLink",
    description:
      "I contributed to developing a robust policy and submission management system at MSIG.",
    tags: ["JS", "Struts2", "DB2", "CSS"],
    imageUrl: msigProjImg,
  },
  {
    title: "ALLIANZ - Alpha",
    description:
      "I contributed to developing a comprehensive system at ALLIANZ for managing user policies and submissions",
    tags: ["Java", "Spring", "Hibernate", "DB2", "Jasper reports"],
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
      "I worked at Allianz Insurance as a Java Developer for over 3 years.",
    icon: React.createElement(FaJava),
    date: "July 2013 – Dec 2016",
  },
  {
    title: "Java & JS Developer",
    location: "KL, Malaysia",
    description:
      "I was a Full-Stack Developer at MSIG Insurance for a year.",
    icon: React.createElement(FaJava),
    date: "Mar 2016 – Apr 2018",
  },
  {
    title: "Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I worked at CIMB Clicks as a Full-Stack Developer for about a year.",
    icon: React.createElement(SiSpring),
    date: "Apr 2018 – Mar 2019",
  },
  {
    title: "Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I worked as a Full-Stack Developer at AXA Partners.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2019 – Jun 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I served as a Full-Stack Developer at PCCW Solutions for 1 year.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2020 – July 2021",
  },
  {
    title: "Front End Developer (Freelancer)",
    location: "KL, Malaysia",
    description:
      "I worked as an Angular Front End Developer at DHL.",
    icon: React.createElement(FaAngular),
    date: "Jul 2022 - Jul 2023",
  },
  {
    title: "Sr.Full-Stack Developer",
    location: "KL, Malaysia",
    description:
      "I was engaged in multiple projects involving various technology stacks during my tenure at Roche.",
    icon: React.createElement(TbBrandJavascript),
    date: "July 2021 – Present",
  },
] as const;