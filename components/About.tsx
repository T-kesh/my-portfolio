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
      <h2 className="text-3xl font-bold mt-8 mb-4 text-center text-slate-100">About me</h2>
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0 hover:scale-105 transition-transform duration-500">
          <img src="/profile.jpg" alt="Profile avatar" className="w-full h-full object-cover" />
        </div>
        <div className="text-lg text-slate-300 text-left sm:w-2/3">
          <p className="mb-3">
            I'm an Engineering student passionate about building practical tech solutions and continuously improving my skills in programming, networking, and data analysis. I enjoy solving real-world problems, learning fast, and turning ideas into efficient systems.
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
