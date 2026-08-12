"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experienceData } from '@/lib/data';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[60rem] px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">Experience</h2>
      <div className="relative mx-auto" ref={containerRef}>
        
        {/* Animated Line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div 
            className="w-full bg-gradient-to-b from-cyan-400 to-pink-500"
            style={{ height, transformOrigin: "top" }}
          />
        </div>

        {experienceData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12 sm:mb-20">
              
              {/* Timeline Node */}
              <div className="absolute left-6 sm:left-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-slate-800 -translate-x-1/2 z-10 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-cyan-400 transition-colors" />
              </div>

              {/* Content Card */}
              <motion.div
                className={`ml-14 sm:ml-0 w-[calc(100%-3.5rem)] sm:w-[calc(50%-3rem)] text-left ${isEven ? "sm:pr-12" : "sm:pl-12 sm:ml-auto"}`}
                initial={{ opacity: 0, y: 50, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              >
                <div className="bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700/50 hover:border-slate-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 relative overflow-hidden group/card">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1 relative z-10">{item.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4 text-xs sm:text-sm font-medium text-cyan-400 relative z-10">
                    <span>{item.date}</span>
                    <span className="hidden sm:block text-slate-500">•</span>
                    <span className="text-pink-400">{item.location}</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed relative z-10">{item.description}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
