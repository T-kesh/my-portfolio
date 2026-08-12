"use client";
import React from 'react';
import { skillsData } from '@/lib/data';

export default function Skills() {
  // Split skills into two rows for the marquee effect
  const middleIndex = Math.ceil(skillsData.length / 2);
  const row1 = skillsData.slice(0, middleIndex);
  const row2 = skillsData.slice(middleIndex);

  return (
    <section id="skills" className="mb-28 w-full max-w-[80rem] scroll-mt-28 text-center sm:mb-40 overflow-hidden px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center text-slate-100">Tech Stack</h2>
      
      <div className="relative flex flex-col gap-4 sm:gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1 - Left to Right */}
        <div className="flex w-max animate-marquee gap-4 sm:gap-6 hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center min-w-[9rem] sm:min-w-[12rem] hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-default"
            >
              <span className="text-base sm:text-lg font-medium text-slate-200 group-hover:text-cyan-400">{skill}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-max animate-marquee gap-4 sm:gap-6 [animation-direction:reverse] hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center min-w-[9rem] sm:min-w-[12rem] hover:border-pink-500/50 hover:bg-slate-800/80 hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all duration-300 cursor-default"
            >
              <span className="text-base sm:text-lg font-medium text-slate-200 group-hover:text-pink-400">{skill}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
