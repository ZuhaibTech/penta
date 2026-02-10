import React from 'react';

export default function WebOurServices() {
  const ourServices = [
    {
      title: "Salesforce Consulting",
      desc: "Unlock the full potential of your Salesforce investment with tailored consulting services.",
      icon: "💻"
    },
    {
      title: "Web Development",
      desc: "Transform your digital presence with Pentacloud innovative web development solutions.",
      icon: "💻"
    },
    {
      title: "Consulting and Training",
      desc: "Aligning workforce skills with Pentacloud strategic goals for impactful results in the Job market.",
      icon: "⚙️"
    },
    {
      title: "Digital Marketing",
      desc: "Boost your brand visibility with our strategic digital marketing and creative campaigns.",
      icon: "🚀"
    },
    {
      title: "App Development",
      desc: "Transform your app ideas into reality with our intuitive, high-performance development services.",
      icon: "🎨"
    },
    {
      title: "Data Migration",
      desc: "Effortlessly migrate data with Pentacloud focusing on integrity, security, and compliance.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-3 md:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <div className="flex items-center gap-2 justify-center mb-1">
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500"></span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#0284c7]"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">expertise</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900">
            Our <span className="text-[#0284c7]">Services.</span>
          </h2>
          <p className="text-slate-500 text-[10px] md:text-sm max-w-2xl mx-auto leading-relaxed px-4">
            We provide a comprehensive suite of web development services designed to help 
            modern businesses thrive in the digital landscape.
          </p>
        </div>

        {/* 6-Box Grid: grid-cols-2 for mobile to keep them small and side-by-side */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {ourServices.map((service, i) => (
            <div 
              key={i} 
              className="bg-white p-4 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative background hover effect */}
              <div className="absolute -right-4 -top-4 w-12 h-12 md:w-24 md:h-24 bg-sky-50 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 -z-0" />
              
              <div className="relative z-10">
                {/* Icon: Smaller on mobile */}
                <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-3 md:mb-6 group-hover:bg-[#0284c7] transition-colors duration-300">
                  <span className="group-hover:scale-110 transition-transform">{service.icon}</span>
                </div>
                
                {/* Title: Smaller and tight on mobile */}
                <h3 className="text-[12px] md:text-xl font-black text-slate-900 mb-1.5 md:mb-3 group-hover:text-[#0284c7] transition-colors leading-tight">
                  {service.title}
                </h3>
                
                {/* Description: 2-line clamp on mobile to keep boxes uniform */}
                <p className="text-[9px] md:text-[13px] text-slate-500 leading-snug md:leading-relaxed line-clamp-3 md:line-clamp-none">
                  {service.desc}
                </p>
                
                {/* Link: Hidden on small mobile to save space, or kept very small */}
                <div className="mt-3 md:mt-6 flex items-center gap-1.5 text-[#0284c7] font-bold text-[8px] md:text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  View <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}