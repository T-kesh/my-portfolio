"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';

function SubmitButton() {
  const [isHovered, setIsHovered] = React.useState(false);
  // Optional: you can use useFormStatus from react-dom for pending state here
  return (
    <button
      type="submit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center justify-center gap-2 h-14 w-full sm:w-auto sm:px-10 bg-slate-100 text-slate-900 rounded-xl font-bold overflow-hidden transition-all focus:scale-105 hover:scale-105 active:scale-95 disabled:scale-100 sm:ml-auto"
    >
      <span className="relative z-10 flex items-center gap-2">
        Send Message 
        <Send className={`text-sm transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} size={16} />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
    </button>
  );
}

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-full max-w-[42rem] text-center scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-slate-100">Let&apos;s Connect</h2>
      <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg">
        Got a project in mind? Reach out directly at{" "}
        <a className="font-semibold text-cyan-400 hover:text-pink-400 transition-colors" href="mailto:tanitoluwakeshinro@gmail.com">
          tanitoluwakeshinro@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form 
        className="mt-8 flex flex-col text-left group/form relative"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Message sent successfully!");
        }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-[2.5rem] blur-xl opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="bg-slate-900/40 backdrop-blur-md p-6 sm:p-10 rounded-3xl sm:rounded-[2rem] border border-slate-700/50 shadow-2xl relative z-10">
          <div className="relative mb-6">
            <input
              className="peer w-full h-14 px-5 rounded-xl bg-slate-950/50 border border-slate-700/50 text-slate-200 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner"
              name="senderEmail"
              id="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <label 
              htmlFor="senderEmail" 
              className="absolute left-5 -top-2.5 text-xs font-medium text-slate-400 bg-slate-900 px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 transition-all cursor-text"
            >
              Your email
            </label>
          </div>

          <div className="relative mb-8">
            <textarea
              className="peer w-full h-40 sm:h-48 py-4 px-5 rounded-xl bg-slate-950/50 border border-slate-700/50 text-slate-200 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none shadow-inner"
              name="message"
              id="message"
              required
              maxLength={5000}
              placeholder="Your message"
            />
            <label 
              htmlFor="message" 
              className="absolute left-5 -top-2.5 text-xs font-medium text-slate-400 bg-slate-900 px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 transition-all cursor-text"
            >
              Your message
            </label>
          </div>

          <SubmitButton />
        </div>
      </form>
    </motion.section>
  );
}

