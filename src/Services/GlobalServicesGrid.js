import React from 'react';

export default function GlobalServicesGrid() {
  const services = [
    { title: "Salesforce Consulting", desc: "Unlock the full potential of your Salesforce investment with tailored consulting services.", icon: "☁️" },
    { title: "Web Development", desc: "Transform your digital presence with Pentacloud innovative web development solutions.", icon: "🌐" },
    { title: "Consulting and Training", desc: "Aligning workforce skills with Pentacloud strategic goals for impactful results in the Job market.", icon: "🤝" },
    { title: "Digital Marketing", desc: "Boost your brand visibility with our strategic digital marketing and creative campaigns.", icon: "📢" },
    { title: "App Development", desc: "Transform your app ideas into reality with our intuitive, high-performance development services.", icon: "📱" },
    { title: "Data Migration", desc: "Effortlessly migrate data with Pentacloud focusing on integrity, security, and compliance.", icon: "💾" }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-10 md:mb-16">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500" />
          <h2 className="text-[#0284c7] text-xl md:text-3xl font-black tracking-tight uppercase">
            Our Services
          </h2>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="bg-slate-50 border border-slate-100 p-5 md:p-10 rounded-2xl md:rounded-[2.5rem] flex items-start gap-4 md:gap-6 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all group"
            >
              {/* Icon Container - Smaller on Mobile */}
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex-shrink-0 flex items-center justify-center text-xl md:text-3xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <div>
                {/* Title - Scaled for Mobile */}
                <h3 className="text-slate-900 text-base md:text-xl font-extrabold mb-1 md:mb-3 group-hover:text-[#0284c7] transition-colors">
                  {service.title}
                </h3>
                {/* Description - Scaled for Mobile */}
                <p className="text-slate-500 text-[11px] md:text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}