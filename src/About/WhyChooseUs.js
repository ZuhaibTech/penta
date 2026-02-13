import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    "Certified Salesforce & Cloud Experts",
    "End-to-End Consulting (Strategy → Execution → Support)",
    "Industry-focused Solutions (Not one-size-fits-all)",
    "Agile & Transparent Delivery Process",
    "Human-first approach backed by AI innovation"
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        
        {/* Left Side: Brand Overview */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-slate-500 ml-1">
              Our Edge
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 md:mb-8 text-slate-900">
            Why Businesses <br/>
            <span className="text-[#0284c7]">Choose PentaCloud.</span>
          </h2>
          
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-10">
            We don't just deliver technology; we deliver sustainable business growth 
            through expert-led digital transformation.
          </p>

          {/* CTA AREA: Branded Icon and Button */}
          <div className="flex flex-col items-center lg:items-start lg:pl-12 gap-8 mb-12">
            <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100">
              {/* Spinning Ambient Ring */}
              <div className="absolute inset-[-8px] border-2 border-dashed border-[#0284c7]/20 rounded-[2rem] animate-[spin_15s_linear_infinite]" />
              
              {/* Floating Shield Icon */}
              <ShieldCheck className="w-14 h-14 md:w-20 md:h-20 text-[#0284c7] animate-[bounce_3s_ease-in-out_infinite]" />
              
              {/* Decorative pulse */}
              <div className="absolute inset-0 bg-[#0284c7]/5 rounded-3xl animate-ping opacity-20" />
            </div>

            {/* BRANDED BUTTON */}
            <button className="group w-full md:w-auto bg-[#0284c7] text-white px-10 py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-[#e0f2fe] hover:text-[#0284c7] transition-all duration-300 shadow-lg shadow-blue-100 active:scale-95">
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        {/* Right Side: Points List with Animated Arrows */}
        <div className="w-full lg:w-3/5 space-y-4 md:space-y-6">
          {points.map((pt, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 group/item cursor-default p-2 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
              
              {/* ANIMATED ARROW CIRCLE */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-sm flex-shrink-0 flex items-center justify-center group-hover/item:border-[#0284c7] group-hover/item:bg-[#f0f9ff] transition-all duration-300">
                <ArrowRight className="text-[#0284c7] w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/item:translate-x-2" />
              </div>
              
              <div className="text-left">
                <p className="text-sm md:text-lg font-bold text-slate-700 group-hover/item:text-[#0284c7] transition-colors">
                  {pt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}