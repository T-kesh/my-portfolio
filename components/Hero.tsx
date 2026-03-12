"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-slate-200">
          <span className="font-bold">Hello, I&apos;m Developer.</span> I&apos;m a{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">frontend engineer</span> with{" "}
          <span className="font-bold">3 years</span> of experience. I enjoy building{" "}
          <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline decoration-cyan-500">React (Next.js)</span>.
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
          href="https://github.com"
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
