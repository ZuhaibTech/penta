import React from 'react';

export default function AppComingSoon() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        
        {/* Brand Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-7xl font-black leading-tight text-slate-900 uppercase">
            App <span className="text-[#0284c7]">Development</span>
          </h1>
          <div className="flex justify-center gap-3">
             <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
             <div className="w-2.5 h-2.5 rounded-full bg-[#0284c7] animate-pulse delay-75" />
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200 animate-pulse delay-150" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl space-y-6">
          <p className="text-lg md:text-2xl font-bold text-slate-400 tracking-[0.4em] uppercase">
            Coming Soon
          </p>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-medium">
            Our team is currently building high-performance iOS and Android solutions. 
            The future of your mobile presence is arriving shortly.
          </p>
        </div>

        {/* Home Button */}
        <div className="mt-12">
          <a 
            href="/" 
            className="inline-block bg-[#0284c7] text-white px-10 py-4 rounded-xl font-black text-sm md:text-base hover:bg-[#0ea5e9] transition-all shadow-xl shadow-blue-100 active:scale-95"
          >
             GO BACK HOME
          </a>
        </div>

      </div>
    </section>
  );
}