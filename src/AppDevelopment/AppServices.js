import React from 'react';

export default function AppServices() {
  const services = [
    { title: "Mobile App Development (iOS & Android)", desc: "Bring your app vision to life with our mobile app development services, creating intuitive, high-performance applications tailored for both iOS and Android platforms." },
    { title: "Cross-Platform Solutions", desc: "Maximize your reach with our cross-platform app development, delivering seamless experiences across multiple devices and operating systems without compromising quality." },
    { title: "Custom Software Development", desc: "Transform your business processes with our custom software development services, designed to meet your unique needs and enhance operational efficiency." },
    { title: "App Maintenance & Support", desc: "Ensure your app remains at peak performance with our ongoing maintenance and support services, addressing issues proactively to enhance user satisfaction." },
    { title: "UI/UX Design", desc: "Create engaging user experiences with our UI/UX design services, focusing on intuitive navigation and aesthetic appeal to captivate your audience." },
    { title: "API Development & Integration", desc: "Enhance functionality and connectivity with our API development and integration services, allowing seamless communication between your applications and systems." }
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Overview */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <div className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Overview</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Bring your app ideas to life with our cutting-edge development services.
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed italic">
            Pentacloud ensuring seamless operations and enhanced user adoption for sustainable business growth in today’s competitive landscape.
          </p>
          
          <div className="pt-8 flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-full border-4 border-slate-100 flex items-center justify-center bg-white shadow-xl">
               <span className="text-8xl grayscale opacity-10">📱</span>
            </div>
          </div>
        </div>

        {/* Right Side: Services List */}
        <div className="space-y-6">
          {services.map((item, idx) => (
            <div key={idx} className="group flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-[#0284c7]/30 transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all">
                <span className="font-bold">→</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0284c7] transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}