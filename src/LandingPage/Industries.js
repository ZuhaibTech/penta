"use client";
import React from "react";
import { 
  Cpu, 
  HeartPulse, 
  ShoppingCart, 
  BarChart3, 
  Building2, 
  GraduationCap, 
  Layers,
  Home 
} from "lucide-react";

export default function Industries() {
  const industries = [
    { title: "Automotive", icon: Cpu },
    { title: "Health Care", icon: HeartPulse },
    { title: "Retail & eCommerce", icon: ShoppingCart },
    { title: "Marketing & Advertising", icon: BarChart3 },
    { title: "Corporate Enterprises", icon: Building2 },
    { title: "Education", icon: GraduationCap },
    { title: "Real Estate", icon: Home },
    { title: "End to End IT Consulting", icon: Layers }
  ];

  return (
    <section className="relative py-20 bg-[#f8fafc] overflow-hidden">
      {/* Ambient background glows to enhance the glass refraction */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12">
          <h2 className="text-[#38bdf8] font-black tracking-[0.2em] text-[10px] md:text-sm uppercase mb-3">
            Global Sectors
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Industries We Are <br className="hidden md:block"/>
            <span className="text-[#0284c7]">Transforming.</span>
          </h1>
        </div>

        {/* Glassy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group relative h-28 md:h-36 rounded-2xl md:rounded-[2rem] bg-white/40 backdrop-blur-md border border-white transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center justify-center p-6 cursor-default shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.1)]"
              >
                {/* Icon in Top-Left with its own glass container */}
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-lg bg-white/60 border border-white shadow-sm group-hover:bg-[#0284c7] transition-colors duration-500">
                    <Icon className="w-5 h-5 text-[#38bdf8] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                {/* Subtle Decorative Corner Glow */}
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-sky-400/10 rounded-full blur-xl group-hover:bg-[#0284c7]/20 transition-colors" />

                {/* Industry Text */}
                <h3 className="text-sm md:text-base font-black text-slate-800 group-hover:text-[#0284c7] transition-colors text-center leading-tight tracking-tight uppercase px-2 relative z-10">
                  {item.title}
                </h3>

                {/* Shimmer line effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/10 via-white/40 to-transparent pointer-events-none transition-opacity duration-700" />
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0284c7] group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}