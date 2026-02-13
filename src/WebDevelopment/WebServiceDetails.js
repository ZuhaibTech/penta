import React from 'react';
// 1. Import necessary icons
import { ArrowRight, Globe } from 'lucide-react';

export default function WebServiceDetails() {
  const services = [
    { title: "Responsive Web Design", desc: "Create an engaging online presence with our responsive web design services, ensuring your site looks stunning and functions flawlessly on all devices." },
    { title: "E-commerce Solutions", desc: "Unlock your online sales potential with our comprehensive e-commerce solutions, including secure payment integration, user-friendly interfaces, and robust inventory management." },
    { title: "CMS Development (WordPress, Joomla)", desc: "Manage your content effortlessly with our custom CMS development services, designed to empower you with flexibility and control over your digital assets." },
    { title: "Custom Web Applications", desc: "Streamline operations and enhance user experiences with our bespoke web applications, developed to meet your specific business requirements and goals." },
    { title: "Website Performance Optimization", desc: "Enhance user engagement and retention with our performance optimization services, ensuring your website loads quickly and runs smoothly, boosting your search engine rankings." },
    { title: "Maintenance & Support Services", desc: "Keep your website running seamlessly with our ongoing maintenance and support services, addressing issues proactively to minimize downtime and enhance user experience." }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        
        {/* Left Side: Overview & Shifted CTA Area */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-slate-500 ml-1">
              overview
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 md:mb-8">
            Transform your digital presence with our 
            <span className="text-[#0284c7]"> innovative web development solutions.</span>
          </h2>
          
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-10">
            Pentacloud ensuring seamless operations and enhanced user adoption for sustainable business growth in today’s competitive landscape.
          </p>

          {/* CTA AREA: Shifted to the right within the column */}
          <div className="flex flex-col items-center lg:items-start lg:pl-12 gap-8 mb-12">
            <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100">
              {/* Spinning Ambient Ring */}
              <div className="absolute inset-[-8px] border-2 border-dashed border-[#0284c7]/20 rounded-[2rem] animate-[spin_15s_linear_infinite]" />
              
              {/* Floating Web Icon */}
              <Globe className="w-14 h-14 md:w-20 md:h-20 text-[#0284c7] animate-[bounce_3s_ease-in-out_infinite]" />
              
              {/* Decorative pulse */}
              <div className="absolute inset-0 bg-[#0284c7]/5 rounded-3xl animate-ping opacity-20" />
            </div>

            {/* BRANDED BUTTON: Solid Blue to Light Blue */}
            <button className="group w-full md:w-auto bg-[#0284c7] text-white px-10 py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-[#e0f2fe] hover:text-[#0284c7] transition-all duration-300 shadow-lg shadow-blue-100 active:scale-95">
              Contact Now
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        {/* Right Side: Feature List */}
        <div className="w-full lg:w-3/5 space-y-6 md:space-y-10">
          {services.map((item, i) => (
            <div key={i} className="flex gap-4 md:gap-6 group/item cursor-default">
              {/* Animated Arrow Circle */}
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border border-slate-200 shadow-sm flex-shrink-0 flex items-center justify-center group-hover/item:border-[#0284c7] group-hover/item:bg-[#f0f9ff] transition-all duration-300">
                <ArrowRight className="text-[#0284c7] w-5 h-5 transition-transform duration-300 group-hover/item:translate-x-2" />
              </div>
              
              <div className="pt-1 text-left">
                {/* Heading Color remains constant brand blue */}
                <h3 className="text-base md:text-xl font-black mb-1 md:mb-3 text-[#0284c7]">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base text-slate-600 leading-relaxed group-hover/item:text-slate-900 transition-colors">
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