import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500 relative z-10 w-full">
      <div className="w-full max-w-4xl mx-auto border-t border-slate-800/50 pt-8 mt-12 flex flex-col items-center justify-center">
        <small className="mb-2 block text-xs">
          &copy; {new Date().getFullYear()} Premium Developer Portfolio. All rights reserved.
        </small>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          <span className="font-semibold text-slate-400">About this website:</span> built with
          React & Next.js (App Router), Tailwind CSS, Framer Motion, and hosting.
        </p>
      </div>
    </footer>
  );
}
