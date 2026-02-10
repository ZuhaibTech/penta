import React from 'react';
import Link from 'next/link';

export default function ConsultingComingSoon() {
  return (
    <div className="min-h-[80vh] bg-white flex flex-col items-center justify-center px-6 text-center">
      {/* Background soft glow */}
      <div className="absolute w-64 h-64 bg-sky-50 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <div className="flex items-center gap-2 mb-8 justify-center">
        <span className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="w-2 h-2 rounded-full bg-[#0284c7]"></span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">service launch</span>
      </div>
      
      <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
        Consulting & <br /> <span className="text-[#0284c7]">Training.</span>
      </h1>
      
      <p className="text-slate-500 text-[11px] md:text-sm max-w-md mb-10 leading-relaxed mx-auto">
        Aligning workforce skills with strategic goals for impactful results in the job market. 
        Our comprehensive curriculum is currently under development.
      </p>

      <Link 
        href="/"
        className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#0284c7] transition-all shadow-xl active:scale-95 flex items-center gap-2"
      >
        <span>←</span> Back to Home
      </Link>
    </div>
  );
}