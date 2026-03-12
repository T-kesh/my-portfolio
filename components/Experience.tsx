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
            <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -left-[1.9rem] sm:-left-[2.4rem] ring-4 ring-slate-950 bg-cyan-500">
            </span>
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition">
              <h3 className="flex items-center mb-1 text-lg font-bold text-slate-200">{item.title}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-cyan-400">{item.date} | {item.location}</time>
              <p className="text-base font-normal text-slate-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
