"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36">
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] w-120 h-120 bg-purple-500/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[60%] w-100 h-100 bg-cyan-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[60%] h-80 w-[20rem] bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        <div className="absolute bottom-[20%] w-160 h-160 bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10">
        <h1 className="mb-10 mt-4 px-4 text-3xl font-light leading-[1.4]! sm:text-5xl text-slate-200 tracking-tight">
          <span className="font-bold block mb-2 text-white">Hello, I&apos;m a Developer.</span> 
          I engineer <span className="font-bold heading-gradient">frontend experiences</span><br className="hidden sm:block"/> that live at the intersection of <br className="hidden sm:block"/><span className="italic font-serif text-slate-300">design & performance</span>.
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-slate-50 text-slate-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Contact me here <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" size={18} />
        </Link>

        <a
          className="group bg-slate-900/50 backdrop-blur border text-white px-7 py-3 border-slate-800 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-slate-900/80"
          href="https://github.com/T-kesh"
          target="_blank"
        >
          GitHub <Github className="opacity-70" size={18} />
        </a>

        <a
          className="group bg-slate-900/50 backdrop-blur border text-white p-4 border-slate-800 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-slate-900/80 hover:text-cyan-400"
          href="https://linkedin.com"
          target="_blank"
        >
          <Linkedin className="opacity-70" size={18} />
        </a>
      </motion.div>
    </section>
  );
}
