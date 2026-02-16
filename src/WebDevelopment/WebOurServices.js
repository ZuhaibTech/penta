"use client";
import React from 'react';
// 1. Import Lucide icons
import { 
  Cloud, 
  Code2, 
  Handshake, 
  Megaphone, 
  Smartphone, 
  RefreshCcw, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function WebOurServices() {
  const ourServices = [
    {
      title: "Salesforce Consulting",
      desc: "Unlock the full potential of your Salesforce investment with tailored consulting services.",
      icon: Cloud
    },
    {
      title: "Web Development",
      desc: "Transform your digital presence with Pentacloud innovative web development solutions.",
      icon: Code2
    },
    {
      title: "Consulting and Training",
      desc: "Aligning workforce skills with Pentacloud strategic goals for impactful results in the Job market.",
      icon: Handshake
    },
    {
      title: "Digital Marketing",
      desc: "Boost your brand visibility with our strategic digital marketing and creative campaigns.",
      icon: Megaphone
    },
    {
      title: "App Development",
      desc: "Transform your app ideas into reality with our intuitive, high-performance development services.",
      icon: Smartphone
    },
    {
      title: "Data Migration",
      desc: "Effortlessly migrate data with Pentacloud focusing on integrity, security, and compliance.",
      icon: RefreshCcw
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#f8fafc] text-slate-900 overflow-hidden relative">
      {/* Ambient Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(2,132,199,0.05),transparent_50%)] -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#0284c7]" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-slate-500">Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#38bdf8]">Services.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
            We provide a comprehensive suite of digital solutions designed to help 
            modern businesses thrive in an ever-evolving technological landscape.
          </p>
        </div>

        {/* Glass Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ourServices.map((service, i) => (
            <div 
              key={i} 
              className="group relative bg-white/40 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] border border-white/80 hover:border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Glass Inner Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Mesh Accent */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl group-hover:bg-[#0284c7]/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                {/* Icon Container with Glass Lift */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#0284c7] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon 
                    className="w-6 h-6 md:w-8 md:h-8 text-[#0284c7] group-hover:text-white transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
                
                <h3 className="text-lg md:text-2xl font-black text-slate-800 mb-3 group-hover:text-[#0284c7] transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {service.desc}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-[#0284c7] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                View Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}