"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // We removed the hide-on-scroll logic to ensure the navbar and menu icon 
    // remain visible and accessible at all times, especially on mobile.
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
      { rootMargin: "-40% 0px -40% 0px" }
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
        className="fixed top-0 sm:top-6 h-[4.5rem] sm:h-[3.25rem] w-full sm:w-[36rem] rounded-none sm:rounded-full border border-white/10 glass-panel z-50 flex items-center justify-between px-6 sm:justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Mobile Branding (only visible on mobile) */}
        <span className="sm:hidden font-bold text-cyan-400 text-lg tracking-widest">TK.</span>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex h-full w-full items-center justify-center">
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

        {/* Mobile Hamburger Toggle */}
        <button 
          className="sm:hidden p-2 -mr-2 text-slate-300 hover:text-cyan-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[4.5rem] left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 z-40 py-8 flex flex-col items-center gap-8 shadow-2xl sm:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={clsx(
                  "text-xl font-semibold transition-colors",
                  activeSection === link.name ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
