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
            className="glass-panel rounded-xl px-5 py-3 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:text-cyan-300 transition-all duration-300 cursor-default"
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
