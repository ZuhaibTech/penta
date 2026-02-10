import React from 'react';

export default function ConsultingDetails() {
  const services = [
    { title: "Business Strategy Consulting", desc: "Drive growth and innovation with our business strategy consulting services." },
    { title: "Change Management Solutions", desc: "Facilitate successful transitions with our change management solutions." },
    { title: "Customized Training Programs", desc: "Boost workforce capabilities with our customized training programs." },
    { title: "Workshops & Seminars", desc: "Engage and inspire your team with our interactive workshops." },
    { title: "Leadership Development", desc: "Cultivate effective leaders with our leadership development programs." },
    { title: "Performance Improvement Strategies", desc: "Achieve operational excellence with data-driven insights." }
  ];

  return (
    <section className="py-12 md:py-20 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Overview logic */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-orange-500" />
             <div className="w-2 h-2 rounded-full bg-[#0284c7]" />
             <span className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Overview</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
            Our approach transforms organizations, aligning workforce capabilities with strategic business goals for maximum impact.
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
            Pentacloud ensuring seamless operations and enhanced user adoption for sustainable business growth in today’s competitive landscape.
          </p>
          
          <div className="flex justify-center md:justify-start pt-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-slate-50 flex items-center justify-center bg-slate-50 shadow-inner">
               <span className="text-7xl md:text-9xl grayscale opacity-20">👤</span>
            </div>
          </div>
        </div>

        {/* Right Side: Service list matching your icon-text pattern */}
        <div className="space-y-8">
          {services.map((item, idx) => (
            <div key={idx} className="flex gap-4 group cursor-default">
              <div className="w-10 h-10 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                <span className="font-bold">→</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0284c7] transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}