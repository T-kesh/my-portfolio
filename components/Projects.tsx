"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 text-center sm:mb-40 w-full max-w-[60rem]">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-48 bg-slate-800 w-full relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
              <span className="text-slate-500 font-medium">[Project Preview Image]</span>
            </div>
            <div className="p-6 text-left flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <li key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full font-medium border border-cyan-500/20">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                  <Github size={16} /> Code
                </a>
                <a href={project.demoUrl} target="_blank" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
