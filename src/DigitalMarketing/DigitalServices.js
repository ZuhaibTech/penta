import React from 'react';

export default function DigitalServices() {
  const marketingServices = [
    { title: "Search Engine Optimization", desc: "Rank higher on Google and drive organic traffic to your website." },
    { title: "Social Media Management", desc: "Build a community and engage your audience across all social platforms." },
    { title: "Pay-Per-Click Advertising", desc: "Get instant results with highly targeted Google and Meta ad campaigns." },
    { title: "Content Marketing", desc: "Establish authority with high-quality blogs, videos, and infographics." },
    { title: "Email Marketing", desc: "Nurture leads and drive repeat sales with automated email journeys." },
    { title: "Analytics & Reporting", desc: "Make informed decisions with deep data insights and transparent tracking." }
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Column: Overview */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <div className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Overview</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            We don't just run ads; we build digital legacies.
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
            Our comprehensive digital marketing approach ensures your brand is seen, heard, and remembered by the right audience at the right time.
          </p>
          
          <div className="pt-8 hidden md:block">
            <div className="w-64 h-64 rounded-[3rem] bg-white border border-slate-100 shadow-xl flex items-center justify-center rotate-3">
               <span className="text-8xl grayscale opacity-10">🚀</span>
            </div>
          </div>
        </div>

        {/* Right Column: Services List */}
        <div className="grid gap-6">
          {marketingServices.map((service, index) => (
            <div key={index} className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-[#0284c7]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all">
                  <span className="font-bold italic">→</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{service.title}</h3>
              </div>
              <p className="text-slate-500 mt-3 ml-14 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}