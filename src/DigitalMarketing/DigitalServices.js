import React from 'react';

export default function DigitalServices() {
  const marketingServices = [
    { title: "SEO & SEM Strategies", desc: "Increase your online visibility with our data-driven SEO and SEM strategies, designed to attract targeted traffic and boost conversion rates for sustainable growth." },
    { title: "Social Media Management", desc: "Engage your audience effectively with our comprehensive social media management services, tailored to enhance brand presence and foster meaningful connections." },
    { title: "Content Marketing", desc: "Drive engagement and establish authority with our content marketing services, creating valuable, relevant content that resonates with your target audience." },
    { title: "Email Marketing Campaigns", desc: "Maximize customer retention with our tailored email marketing campaigns, delivering personalized messages that nurture leads and drive conversions." },
    { title: "PPC Advertising", desc: "Achieve immediate visibility and traffic with our expertly managed PPC advertising campaigns, optimizing budgets for maximum ROI and targeted reach." },
    { title: "Analytics & Reporting", desc: "Make informed decisions with our analytics and reporting services, providing actionable insights that enhance your marketing strategies and overall business performance." }
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
            We help you connect with your audience, enhance engagement, and achieve measurable results in a digital-first world.
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
            Pentacloud ensuring seamless operations and enhanced user adoption for sustainable business growth in today’s competitive landscape. 
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