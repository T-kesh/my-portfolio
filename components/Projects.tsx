"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-slate-800 bg-slate-900/50 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 text-center sm:mb-40 w-full max-w-[65rem] px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-100">Projects I&apos;ve worked on</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SpotlightCard className="h-full flex flex-col group backdrop-blur-sm">
              <div className="h-48 sm:h-56 bg-slate-800 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e)=>{e.currentTarget.style.display="none"}} />
              </div>
              <div className="p-6 sm:p-8 text-left flex flex-col flex-grow relative z-20 -mt-6 bg-slate-900/80 backdrop-blur-md rounded-t-3xl border-t border-slate-700/50">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <li key={i} className="px-3 py-1 bg-slate-800/80 text-cyan-400 text-xs rounded-full font-medium border border-cyan-500/20">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a href={project.demoUrl} target="_blank" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-5 py-3 sm:py-2.5 rounded-full transition-all font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95">
                    Visit Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
