"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Gamepad2, Rocket } from 'lucide-react';

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
      className={`relative rounded-[2.5rem] border border-slate-800 bg-slate-900/40 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[60rem] w-full text-center sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
      id="about"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">About me</h2>
      
      <SpotlightCard className="p-8 sm:p-12 backdrop-blur-md text-left flex flex-col md:flex-row items-center gap-10 sm:gap-14 shadow-2xl">
        <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-full overflow-hidden border-4 border-slate-800/80 shadow-[0_0_40px_rgba(34,211,238,0.2)] shrink-0 group">
          <Image src="/profile.jpg" alt="Profile avatar" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay"></div>
        </div>
        
        <div className="flex-1 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 flex items-center gap-3">
            <Rocket className="text-cyan-400 shrink-0" size={28} /> Engineering the Future
          </h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            I&apos;m an Engineering student passionate about building practical tech solutions and continuously improving my skills in programming, networking, and data analysis. I thrive on solving real-world problems and turning complex ideas into scalable, efficient systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-8 border-t border-slate-800/60 pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-950/50 rounded-xl text-cyan-400 border border-slate-800/50 shadow-inner">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">The Grind</h4>
                <p className="text-sm text-slate-400 font-medium">Web3 & Systems</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-950/50 rounded-xl text-pink-400 border border-slate-800/50 shadow-inner">
                <Gamepad2 size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">The Downtime</h4>
                <p className="text-sm text-slate-400 font-medium">Games & Movies</p>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.section>
  );
}
