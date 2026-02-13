import React from 'react';
// 1. Import necessary icons
import { ArrowRight, Rocket } from 'lucide-react';

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
            We help you connect with your audience and 
            <span className="text-[#0284c7]"> achieve measurable results in a digital-first world.</span>
          </h2>
          
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-10">
            Pentacloud ensuring seamless operations and enhanced user adoption for sustainable business growth in today’s competitive landscape.
          </p>

          {/* CTA AREA: Shifted more to the right within the column */}
          <div className="flex flex-col items-center lg:items-start lg:pl-12 gap-8 mb-12">
            <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100">
              {/* Spinning Ambient Ring */}
              <div className="absolute inset-[-8px] border-2 border-dashed border-[#0284c7]/20 rounded-[2rem] animate-[spin_15s_linear_infinite]" />
              
              {/* Floating Rocket Icon */}
              <Rocket className="w-14 h-14 md:w-20 md:h-20 text-[#0284c7] animate-[bounce_3s_ease-in-out_infinite]" />
              
              {/* Decorative pulse */}
              <div className="absolute inset-0 bg-[#0284c7]/5 rounded-3xl animate-ping opacity-20" />
            </div>

            {/* BRANDED BUTTON: Solid Blue to Light Blue */}
            <button className="group w-full md:w-auto bg-[#0284c7] text-white px-10 py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-[#e0f2fe] hover:text-[#0284c7] transition-all duration-300 shadow-lg shadow-blue-100 active:scale-95">
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        {/* Right Side: Service List */}
        <div className="w-full lg:w-3/5 space-y-6 md:space-y-10">
          {marketingServices.map((item, i) => (
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