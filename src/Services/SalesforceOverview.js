import React from 'react';

export default function SalesforceOverview() {
  const items = [
    { title: "Salesforce Implementation", desc: "Seamlessly integrate Salesforce into your organization with our expert implementation services." },
    { title: "Customization & Optimization", desc: "Transform Salesforce to meet your specific needs with our customization and optimization services." },
    { title: "Salesforce Health Check", desc: "Evaluate your Salesforce setup with our health check, identifying areas for improvement." },
    { title: "Integration with Other Systems", desc: "Achieve a unified view of your business by connecting Salesforce with existing systems." },
    { title: "Ongoing Support & Maintenance", desc: "Ensuring your Salesforce platform remains up-to-date, secure, and aligned with your needs." },
    { title: "User Training & Enablement", desc: "Empower your team with tailored training programs to boost adoption and productivity." }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        
        {/* Left Side: Overview Header & Video */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-slate-500 ml-1">
              overview
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 md:mb-8">
            Unlock the full potential of your Salesforce investment with 
            <span className="text-[#0284c7]"> Pentacloud tailored services.</span>
          </h2>
          
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-12">
            Pentacloud ensuring seamless operations and enhanced user adoption for sustainable business growth.
          </p>

          {/* Video Portal - Now visible on all screens */}
          <div className="relative flex items-center justify-center mx-auto lg:mx-0 mb-12 lg:mb-0">
             {/* Subtle Ambient Glow */}
             <div className="absolute w-56 h-56 md:w-80 md:h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
             
             {/* The Video Circle */}
             <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl relative z-10 transition-transform duration-700 hover:scale-105">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/Penta-tech.mp4" type="video/mp4" />
                </video>
             </div>
          </div>
        </div>

        {/* Right Side: Feature List */}
        <div className="w-full lg:w-3/5 space-y-6 md:space-y-10">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 md:gap-6 group">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border border-slate-200 shadow-sm flex-shrink-0 flex items-center justify-center group-hover:border-[#0284c7] group-hover:bg-[#f0f9ff] transition-all duration-300">
                <span className="text-[#0284c7] text-sm md:text-xl font-bold">→</span>
              </div>
              
              <div className="pt-1 text-left">
                <h3 className="text-base md:text-xl font-black mb-1 md:mb-3 text-[#0284c7] group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base text-slate-600 leading-relaxed">
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