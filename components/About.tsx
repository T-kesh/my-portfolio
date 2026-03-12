"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
      id="about"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">About me</h2>
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-slate-800 shadow-xl shadow-cyan-500/10 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 opacity-20"></div>
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
            [IMG]
          </div>
        </div>
        <div className="text-lg text-slate-300 text-left sm:w-2/3">
          <p className="mb-3">
            After graduating with a degree in <span className="font-medium text-slate-200">Computer Science</span>, I decided to pursue my
            passion for programming. I enrolled in a coding bootcamp and learned{" "}
            <span className="font-medium text-slate-200">full-stack web development</span>. My favorite part of programming
            is the problem-solving aspect.
          </p>
          <p>
            When I&apos;m not coding, I enjoy playing
            video games, watching movies, and exploring new technologies.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
