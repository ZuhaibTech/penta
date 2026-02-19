"use client";
import React from 'react';

export default function NumbersMatter() {
  const stats = [
    { label: "Active Clients", val: "10+" },
    { label: "Projects Delivered", val: "3+" },
    { label: "Skilled Professionals", val: "25+" },
    { label: "Global Offices", val: "12+" }
  ];

  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-blue-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Glass Container */}
        <div className="relative bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Subtle Shine Streak */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 lg:divide-x divide-slate-200/50">
            {stats.map((s, i) => (
              <div 
                key={s.label} 
                className="group text-center px-4 transition-transform duration-500 hover:-translate-y-1"
              >
                {/* Individual Stat Glow */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#0284c7]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="relative text-4xl md:text-5xl font-black text-slate-900 group-hover:text-[#0284c7] transition-colors duration-300 tracking-tight">
                    {s.val}
                  </h3>
                </div>
                
                <p className="text-slate-500 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] mt-3 group-hover:text-slate-800 transition-colors duration-300">
                  {s.label}
                </p>
                
                {/* Active Indicator Line */}
                <div className="mt-4 w-0 h-1 bg-[#0284c7] mx-auto rounded-full group-hover:w-8 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}