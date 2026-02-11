import React from 'react';

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
    <section className="py-16 bg-white px-4 md:px-6">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slow-rotate {
          animation: slow-rotate 20s linear infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* RIGHT SIDE CONTENT (Now ordered 1st and 2nd on Mobile) */}
        <div className="flex-1 order-1 lg:order-2">
          <div className="lg:sticky lg:top-32 space-y-8">
            
            {/* 1. Overview Text (order-1 on mobile) */}
            <div className="space-y-4 order-1">
              <div className="flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0284c7]"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">overview</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                Transform your digital presence with our innovative web development solutions.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Pentacloud ensuring seamless operations and enhanced user adoption for sustainable business growth in today’s competitive landscape.
              </p>
            </div>

            {/* 2. Rotating Globe & Button (order-2 on mobile) */}
            <div className="relative flex flex-col items-center order-2">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1px)] [background-size:24px_24px] -z-10" />
                <div className="w-40 h-40 bg-[#0284c7] rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(2,132,199,0.3)] animate-slow-rotate">
                   <span className="text-white text-6xl select-none">🌐</span>
                </div>
              </div>

              <button className="mt-8 bg-sky-100 text-[#0284c7] px-10 py-4 rounded-xl font-bold text-sm flex items-center gap-3 transition-all duration-300 hover:bg-[#0284c7] hover:text-white shadow-sm hover:shadow-xl active:scale-95">
                Contact Now <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* LEFT SIDE CONTENT: Services List (Now ordered 3rd on Mobile) */}
        <div className="flex-[1.2] space-y-10 order-3 lg:order-1">
          {services.map((s, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200/50 flex items-center justify-center text-sky-500 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                 <span className="text-xl">→</span>
              </div>
              <div>
                <h3 className="font-bold text-sky-600 text-[13px] md:text-[15px] uppercase tracking-wide">{s.title}</h3>
                <p className="text-[12px] md:text-[14px] text-slate-500 mt-2 leading-relaxed max-w-2xl">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}