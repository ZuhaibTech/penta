"use client";
import React from 'react';
import { ArrowRight, Globe, Sparkles } from 'lucide-react';

export default function WebServiceDetails() {
  const services = [
    { title: "Responsive Web Design", desc: "Create an engaging online presence with our responsive web design services, ensuring your site looks stunning on all devices." },
    { title: "E-commerce Solutions", desc: "Unlock sales potential with comprehensive e-commerce solutions, including secure payment and robust inventory management." },
    { title: "CMS Development", desc: "Manage your content effortlessly with custom WordPress and Joomla services designed for flexibility and control." },
    { title: "Custom Web Applications", desc: "Streamline operations and enhance user experiences with bespoke applications developed for your specific goals." },
    { title: "Performance Optimization", desc: "Enhance engagement with optimization services that ensure your website loads quickly and ranks higher." },
    { title: "Maintenance & Support", desc: "Keep your website running seamlessly with proactive support services addressing issues before they impact users." }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#f8fafc] text-slate-900 overflow-hidden relative">
      {/* Ambient Glass Background Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        
        {/* Left Side: Brand Section */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#0284c7]" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-slate-500">
              Overview
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 tracking-tight">
            Transform your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#38bdf8]"> 
               digital presence.
            </span>
          </h2>
          
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            Pentacloud ensures seamless operations and enhanced user adoption for sustainable business growth in today’s competitive landscape.
          </p>

          {/* CTA AREA: Glassy Animated Icon + Centered CTA */}
          <div className="flex flex-col items-center lg:items-center lg:pl-24 gap-10">
            <div className="relative group">
              {/* Outer Glass Ring */}
              <div className="absolute inset-[-15px] bg-white/30 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-2xl transition-transform duration-700 group-hover:scale-110" />
              
              {/* Main Icon Box */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-[0_20px_50px_rgba(2,132,199,0.15)] flex items-center justify-center border border-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.2),transparent)]" />
                <Globe className="w-12 h-12 md:w-16 md:h-16 text-[#0284c7] drop-shadow-md animate-[pulse_4s_ease-in-out_infinite]" />
              </div>
            </div>

            <button className="group relative overflow-hidden bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95 whitespace-nowrap">
              <span className="relative z-10">Speak to Our Expert</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0284c7] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Right Side: Feature List with Glass Hover Effects */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 gap-4 md:gap-6">
          {services.map((item, i) => (
            <div 
              key={i} 
              className="group flex gap-5 p-4 md:p-6 rounded-[2rem] border border-transparent transition-all duration-500 hover:bg-white/80 hover:border-white hover:backdrop-blur-md hover:shadow-[0_10px_30px_rgba(2,132,199,0.05)]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex-shrink-0 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
              </div>
              
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-black mb-1 text-slate-800 group-hover:text-[#0284c7] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}