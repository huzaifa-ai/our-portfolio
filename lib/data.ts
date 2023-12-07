import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Foodil from "@/public/Foodil.png";
import Polar from "@/public/Polar.png";
import c4ads from "@/public/c4ads.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
 
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer at Alimcosoft",
    location: "Islamabad, Pakistan",
    description:
      "I have accumulated over 1.5 years of experience as a full-stack developer at Alimcosoft (PVT), situated in Islamabad.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer at Erus Technologies",
    location: "Rawalpindi, Pakistan",
    description:
      " I served as a front-end developer at Erus, located in Rawalpindi, for a duration of 8 months. Additionally, I undertook upskilling initiatives, progressing to a full-stack developer role during my tenure.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Graduation in BS(Computer Science).",
    location: "Islamabad, Pakistan",
    description:
      "Following the completion of my bachelor's degree in computer science, I promptly secured a position as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "PolarPro",
    description:
      "I served as the frontend developer for the aforementioned project, contributing to the development of an e-commerce website specializing in a diverse range of photography accessories.",
    tags: ["React", "Gatsby", "StoryBlok", "Tailwind", "Redux"],
    imageUrl: Polar,
    link: "https://www.polarpro.com/",
  },
  {
    title: "Foodil",
    description:
      "I held the position of a full-stack developer for a duration of 8 months on this project. The website facilitates sellers in offering their food items in wholesale quantities, providing buyers with the ability to make purchases.",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Sequelize",
      "Tailwindcss",
      "Nodejs",
      "ExpressJs",
    ],
    imageUrl: Foodil,
    link: "https://foodil.co/en/landing",
  },
  {
    title: "C4ADS",
    description:
      "I served as a front-end developer for a period of 10 months on this project. C4ADS is a nonprofit organization dedicated to the mission of dismantling illicit networks that pose threats to global peace and security.",
    tags: [
      "React",
      "Next.js",
      "Styled Components",
      "Tailwindcss",
      "Redux",
      "Nodejs",
      "ExpressJs",
    ],
    imageUrl: c4ads,
    link: "https://c4ads.org/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sequelize",
  "Sanity",
  "Storyblok",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Hasura",
  "Gatsby",
  "Framer Motion",
] as const;
