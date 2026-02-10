import React from "react";

export default function Industries() {
  const industries = [
    "Automation",
    "Health Care",
    "Retail & eCommerce",
    "Marketing & Advertising",
    "Corporate Enterprises",
    "Financial Institutions",
    "End to End IT Consulting"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
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

        {/* Professional Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((title, index) => (
            <div 
              key={index} 
              className={`group relative h-24 md:h-28 rounded-2xl md:rounded-[1.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-[#0284c7] hover:-translate-y-2 overflow-hidden flex items-center justify-center p-6 cursor-default
              ${index === 6 ? "sm:col-span-2 lg:col-span-2" : ""} /* Makes the 7th item (IT Consulting) wider for balance */
              `}
            >
              {/* Subtle Decorative Element */}
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#38bdf8]/10 rounded-full group-hover:bg-white/10 transition-colors" />

              {/* Industry Text */}
              <h3 className="text-sm md:text-base font-black text-slate-800 group-hover:text-white transition-colors text-center leading-tight tracking-tight uppercase">
                {title}
              </h3>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 to-transparent pointer-events-none transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}