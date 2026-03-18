"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-slate-100">Contact me</h2>
      <p className="text-slate-400 -mt-2 mb-8">
        Please contact me directly at{" "}
        <a className="underline text-cyan-400" href="https://mail.google.com">
          tanitoluwakeshinro@gmail.com   
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col text-left text-slate-950">
        <input
          className="h-14 px-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all mb-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none mb-6"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="button"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-cyan-600 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-cyan-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 ml-auto font-medium"
        >
          Submit <Send className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
        </button>
      </form>
    </motion.section>
  );
}
