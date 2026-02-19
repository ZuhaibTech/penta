"use client";
import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-12 md:py-24 bg-[#f8fafc] overflow-hidden relative">
      {/* Ambient Glass Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Optional Header for context */}
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#0284c7]" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-slate-500">Purpose</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Core <span className="text-[#0284c7]">Values.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {/* Mission Card */}
          <div className="group relative bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/80 hover:border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.08)] transition-all duration-500 overflow-hidden">
            {/* Glass Inner Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              {/* Icon Container with Glass Lift */}
              <div className="w-14 h-14 md:w-20 md:h-20 bg-white/90 rounded-2xl shadow-sm border border-white flex items-center justify-center mb-8 group-hover:bg-[#0284c7] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Target className="w-7 h-7 md:w-10 md:h-10 text-[#0284c7] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 group-hover:text-[#0284c7] transition-colors tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                To empower businesses with intelligent, scalable, and secure technology solutions that simplify complexity and accelerate growth.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/80 hover:border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.08)] transition-all duration-500 overflow-hidden">
            {/* Glass Inner Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 md:w-20 md:h-20 bg-white/90 rounded-2xl shadow-sm border border-white flex items-center justify-center mb-8 group-hover:bg-[#0284c7] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <Eye className="w-7 h-7 md:w-10 md:h-10 text-[#0284c7] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 group-hover:text-[#0284c7] transition-colors tracking-tight">
                Our Vision
              </h3>
              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                To become a globally trusted technology partner, redefining how businesses leverage cloud, AI, and data for long-term success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}