"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index }
  })
};

export default function Skills() {
  return (
    <section id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-200">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-colors shadow-sm"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
