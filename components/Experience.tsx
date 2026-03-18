"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[50rem]">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-100">Experience</h2>
      <div className="relative border-l border-slate-800 ml-3 sm:ml-0">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6 sm:ml-8 relative text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -left-[1.9rem] sm:-left-[2.4rem] ring-4 ring-[#030014] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            </span>
            <div className="glass-panel p-6 rounded-2xl hover:border-white/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <h3 className="flex items-center mb-1 text-lg font-bold text-slate-100">{item.title}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-cyan-400">{item.date} | {item.location}</time>
              <p className="text-base font-normal text-slate-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
