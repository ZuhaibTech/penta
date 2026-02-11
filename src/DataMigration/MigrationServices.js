import React from 'react';

export default function MigrationServices() {
  const steps = [
    { title: "Assessment & Planning", desc: "We analyze your current data structure to create a risk-free migration roadmap." },
    { title: "Secure Extraction", desc: "Data is securely extracted using encrypted protocols to ensure zero loss." },
    { title: "Transformation & Loading", desc: "We clean and optimize your data before loading it into the new environment." },
    { title: "Validation & Testing", desc: "Rigorous integrity checks to ensure every record is accurate and accessible." }
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left: Overview */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <div className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Core Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Moving your data <br/> with zero friction.
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
            From legacy systems to the modern cloud, we handle the complexities of data 
            structuring so you can focus on your business.
          </p>
          
          <div className="pt-8 flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-[3rem] bg-white border border-slate-100 shadow-xl flex items-center justify-center -rotate-2">
               <span className="text-8xl grayscale opacity-10">💾</span>
            </div>
          </div>
        </div>

        {/* Right: Steps List */}
        <div className="space-y-6">
          {steps.map((item, idx) => (
            <div key={idx} className="group flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-[#0284c7]/30 transition-all shadow-sm">
              <div className="w-10 h-10 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all">
                <span className="font-bold">0{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0284c7] transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}