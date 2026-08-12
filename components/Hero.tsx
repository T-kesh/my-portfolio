"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="w-full text-center scroll-mt-[100rem] pt-28 sm:pt-36 relative z-10 mb-28 sm:mb-40 flex flex-col items-center">
      {/* Background blobs no longer constrained by a max-width */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 flex items-center justify-center overflow-visible pointer-events-none">
        <div className="absolute top-[20%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[60%] w-[25rem] h-[25rem] bg-cyan-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[60%] h-[20rem] w-[20rem] bg-pink-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <div className="max-w-[55rem] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          className="relative z-10"
        >
          <h1 className="mb-8 mt-4 px-4 text-4xl font-light leading-[1.3]! sm:text-6xl text-slate-200 tracking-tight">
            <motion.span 
              className="font-bold block mb-4 text-white text-5xl sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Creative Developer.
            </motion.span> 
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              I engineer <span className="font-bold heading-gradient">frontend experiences</span><br className="hidden sm:block"/> that live at the intersection of <br className="hidden sm:block"/><span className="italic font-serif text-slate-400">design & performance</span>.
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="#contact"
            className="group bg-slate-50 text-slate-950 px-8 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Contact me here <ArrowRight className="opacity-70 group-hover:translate-x-1.5 transition-transform" size={18} />
          </Link>

          <div className="flex gap-4">
            <a
              className="group bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-white px-7 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition-all hover:bg-slate-800/80 hover:border-slate-600"
              href="https://github.com/T-kesh"
              target="_blank"
            >
              GitHub <Github className="opacity-70 group-hover:text-cyan-400 transition-colors" size={18} />
            </a>

            <a
              className="group bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition-all hover:bg-slate-800/80 hover:border-cyan-500/50 hover:text-cyan-400 shadow-[0_0_0_rgba(34,211,238,0)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              href="https://linkedin.com"
              target="_blank"
            >
              <Linkedin className="opacity-70" size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
