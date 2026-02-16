"use client";
import React from 'react';

export default function OurApproach() {
  const steps = [
    { t: "Discover", d: "Understand business goals & challenges" },
    { t: "Design", d: "Craft tailored, scalable solutions" },
    { t: "Deliver", d: "Agile execution with continuous feedback" },
    { t: "Optimize", d: "Ongoing support & performance improvement" },
    { t: "CX & Marketing", d: "Enhancing customer journeys through data-driven marketing strategies" },
    { t: "AIDA", d: "Leveraging Attention, Interest, Desire, and Action to drive conversions" }
  ];

  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative Background Orbs for Glass Reflection */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#38bdf8]">Approach</span>
        </h2>
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto">
          A strategic methodology designed to ensure precision, scalability, and measurable results.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group p-8 relative rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(2,132,199,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(2,132,199,0.1)] overflow-hidden min-h-[180px] flex flex-col justify-center"
            >
              {/* Glass Inner Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Background Number with Glass-Friendly Color */}
              <span className="absolute top-4 right-6 text-7xl font-black text-slate-200/40 select-none group-hover:text-sky-200/50 transition-colors duration-500">
                {i + 1}
              </span>
              
              <div className="relative z-10 text-left">
                {/* Icon-style Bullet */}
                <div className="w-8 h-1 bg-[#0284c7] mb-4 rounded-full group-hover:w-16 transition-all duration-500" />
                
                <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-wide group-hover:text-[#0284c7] transition-colors">
                  {step.t}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                  {step.d}
                </p>
              </div>

              {/* Bottom Decorative Reflection Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0284c7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}