"use client";
import React, { useState, useEffect } from "react";
import { Cloud, Layers, Database, Code, TrendingUp, Briefcase, Sparkles } from "lucide-react";

export default function ExpertiseSnapshot() {
  const [isClient, setIsClient] = useState(false);

  // Prevents hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const skills = [
    { name: "Salesforce Consulting", icon: <Cloud className="w-5 h-5" /> },
    { name: "Cloud Infrastructure", icon: <Layers className="w-5 h-5" /> },
    { name: "Data Migration", icon: <Database className="w-5 h-5" /> },
    { name: "Web & App Dev", icon: <Code className="w-5 h-5" /> },
    { name: "Digital Marketing", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Zoho Services", icon: <Briefcase className="w-5 h-5" /> },
  ];

  if (!isClient) return null;

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10 text-center">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white backdrop-blur-md shadow-sm mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
          <span className="uppercase tracking-[0.3em] text-[10px] font-black text-slate-500">
            Our Core Engine
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-16">
          What We Do <span className="text-[#0284c7]">Best</span>
        </h2>
        
        {/* MOBILE GRID: 2 Columns on mobile, Flex row on desktop */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 md:gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 p-5 md:px-8 md:py-5 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
            >
              {/* GLASSY ICON CONTAINER: Creates "Layered Glass" effect */}
              <div className="flex-shrink-0 p-3 rounded-2xl bg-white/80 border border-white shadow-sm text-[#0284c7] backdrop-blur-md group-hover:bg-[#0284c7] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                {skill.icon}
              </div>

              <span className="font-bold text-slate-700 text-[10px] md:text-lg text-center sm:text-left leading-tight tracking-tight uppercase sm:normal-case">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}