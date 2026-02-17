import React from 'react';
import { 
  Cloud, 
  Globe, 
  Handshake, 
  Megaphone, 
  Smartphone, 
  Database 
} from 'lucide-react';

export default function GlobalServicesGrid() {
  const services = [
    { title: "Salesforce Consulting", desc: "Unlock the full potential of your Salesforce investment with tailored consulting services.", icon: Cloud },
    { title: "Web Development", desc: "Transform your digital presence with Pentacloud innovative web development solutions.", icon: Globe },
    { title: "Consulting and Training", desc: "Aligning workforce skills with Pentacloud strategic goals for impactful results in the Job market.", icon: Handshake },
    { title: "Digital Marketing", desc: "Boost your brand visibility with our strategic digital marketing and creative campaigns.", icon: Megaphone },
    { title: "App Development", desc: "Transform your app ideas into reality with our intuitive, high-performance development services.", icon: Smartphone },
    { title: "Data Migration", desc: "Effortlessly migrate data with Pentacloud focusing on integrity, security, and compliance.", icon: Database }
  ];

  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6 bg-[#f0f4f8] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          <h2 className="text-[#0284c7] text-xl md:text-3xl font-black tracking-tight uppercase">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div key={i} className="group relative h-full">
                {/* Glass Card */}
                <div className="h-full bg-white/30 backdrop-blur-xl border border-white/50 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] flex items-start gap-4 md:gap-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(2,132,199,0.2)] hover:bg-white/60 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  
                  {/* ICON CONTAINER WITH POP-OUT ANIMATION */}
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex-shrink-0 flex items-center justify-center 
                                  relative overflow-hidden
                                  group-hover:bg-[#0284c7] group-hover:scale-110 group-hover:-rotate-3 
                                  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    
                    {/* ICON WITH BOUNCE ANIMATION */}
                    <IconComponent 
                      className="w-7 h-7 md:w-10 md:h-10 text-[#0284c7] z-10
                                 group-hover:text-white group-hover:animate-bounce
                                 transition-colors duration-300" 
                      style={{ animationDuration: '0.8s' }}
                    />

                    {/* Subtle internal glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-slate-900 text-lg md:text-xl font-extrabold mb-2 md:mb-3 group-hover:text-[#0284c7] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}