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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Huzaifa, a dedicated developer propelled by an unwavering passion
        for crafting cutting-edge digital solutions. Over the course of my
        illustrious career spanning more than four years, I have meticulously
        honed my skills across a diverse array of programming languages,
        showcasing expertise in prominent technologies such as ReactJS, NextJS,
        Node, and more. My forte lies in the adept creation of not just
        ordinary, but robust, scalable, and secure applications that are
        meticulously tailored to meet the distinctive and evolving needs of my
        clients. Through a fusion of creativity and technical prowess, I
        consistently deliver solutions that not only meet expectations but
        exceed them.
      </p>

      <p>
        As a forward-thinking developer, I am committed to maintaining a
        proactive stance in the dynamic landscape of technology. This involves a
        steadfast dedication to staying abreast of the latest trends, emerging
        methodologies, and cutting-edge technologies in the field.
      </p>
    </motion.section>
  );
}
