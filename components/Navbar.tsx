"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const activeLink = links.find((link) => link.hash === `#${id}`);
            if (activeLink) {
              setActiveSection(activeLink.name);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // trigger when section is near center
    );

    links.forEach((link) => {
      const id = link.hash.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      links.forEach((link) => {
        const id = link.hash.substring(1);
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <header className="z-[999] relative flex justify-center w-full">
      <motion.div
        className="fixed top-0 sm:top-6 h-[4.5rem] sm:h-[3.25rem] w-full sm:w-[36rem] rounded-none sm:rounded-full border border-white/10 glass-panel"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav className="flex h-full w-full items-center justify-center">
          <ul className="flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-300 sm:w-auto sm:flex-nowrap sm:gap-5 px-4">
            {links.map((link) => (
              <li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-1.5 hover:text-cyan-400 transition-colors z-10",
                    { "text-cyan-400": activeSection === link.name }
                  )}
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-slate-800/80 border border-slate-700/50 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
