"use client";
import React from "react";
import { 
  Cloud, 
  Layers, 
  Database, 
  Code, 
  TrendingUp, 
  Briefcase,
  Sparkles
} from "lucide-react";

export default function ExpertiseSnapshot() {
  const skills = [
    { name: "Salesforce Consulting", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cloud Infrastructure", icon: <Layers className="w-4 h-4" /> },
    { name: "Data Migration", icon: <Database className="w-4 h-4" /> },
    { name: "Web & App Dev", icon: <Code className="w-4 h-4" /> },
    { name: "Digital Marketing", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Zoho Services", icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    /* Responsive margins: mx-4 for mobile, md:mx-12 for desktop */
    <section className="my-10 py-12 md:py-16 bg-white/30 backdrop-blur-xl text-slate-900 rounded-[2.5rem] md:rounded-[3rem] mx-4 md:mx-12 border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.04)] relative overflow-hidden">
      
      {/* Background Orbs - Optimized blur for mobile performance */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-sky-100/40 rounded-full blur-[60px] md:blur-[80px] -z-10" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100/40 rounded-full blur-[60px] md:blur-[80px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-white backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#0284c7]" />
          <span className="uppercase tracking-[0.2em] text-[9px] font-black text-slate-500">
            Our Core Engine
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight">
          What We Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#38bdf8]">Best</span>
        </h2>
        
        {/* MOBILE OPTIMIZED GRID: 
            - grid-cols-1: Single column on small phones
            - sm:grid-cols-2: Two columns on larger phones
            - lg:flex: Back to flexible wrap for desktop
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 md:gap-4 max-w-sm sm:max-w-2xl lg:max-w-none mx-auto">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="flex items-center justify-start lg:justify-center gap-3 px-5 py-4 lg:px-6 lg:py-3 bg-white/60 text-slate-700 rounded-2xl border border-white backdrop-blur-md font-bold text-sm md:text-base hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group cursor-pointer select-none"
            >
              <div className="flex-shrink-0 p-1.5 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                <span className="text-[#0284c7] group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </span>
              </div>
              
              <span className="tracking-tight whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}