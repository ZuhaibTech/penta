"use client";
import React from 'react';
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
      {/* Dynamic Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-xl mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-slate-500">Our Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Our <span className="text-[#0284c7] relative">Services
              <span className="absolute bottom-2 left-0 w-full h-3 bg-sky-200/30 -z-10" />
            </span>
          </h2>
          <p className="mt-6 text-slate-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Next-generation digital solutions designed to propel <br className="hidden md:block" />
            modern enterprises into the future.
          </p>
        </div>

        {/* Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.map((service, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col p-8 md:p-10 rounded-[3rem] transition-all duration-700
                         bg-white/30 backdrop-blur-2xl 
                         border border-white/80 border-b-white/20
                         shadow-[0_20px_50px_rgba(0,0,0,0.04)] 
                         hover:shadow-[0_40px_80px_rgba(2,132,199,0.12)] 
                         hover:-translate-y-2 overflow-hidden"
            >
              {/* Internal Glass Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 opacity-100 pointer-events-none" />
              
              {/* Interactive Glow Orb */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#0284c7]/5 rounded-full blur-2xl group-hover:bg-[#0284c7]/20 transition-all duration-700" />

              <div className="relative z-10">
                {/* Icon Glass Container */}
                <div className="relative w-14 h-14 md:w-20 md:h-20 mb-8">
                    {/* The "Aura" behind the icon */}
                    <div className="absolute inset-0 bg-[#0284c7] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    
                    <div className="relative w-full h-full bg-white/80 backdrop-blur-md rounded-2xl border border-white flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                        <service.icon 
                            className="w-7 h-7 md:w-10 md:h-10 text-[#0284c7]" 
                            strokeWidth={1.5}
                        />
                    </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 group-hover:text-[#0284c7] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Glass Button Footer */}
              <div className="relative z-10 mt-10 pt-6 border-t border-white/40">
                <button className="flex items-center gap-2 text-[#0284c7] font-bold text-xs uppercase tracking-widest group/btn">
                  <span>Explore Service</span>
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center group-hover/btn:bg-[#0284c7] group-hover/btn:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}