import React from 'react';

export default function ContactComingSoon() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-7xl font-black leading-tight text-slate-900 uppercase">
            Contact <span className="text-[#0081c2]">Us</span>
          </h1>
          <div className="flex justify-center gap-3">
             <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
             <div className="w-2.5 h-2.5 rounded-full bg-[#0081c2] animate-pulse delay-75" />
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200 animate-pulse delay-150" />
          </div>
        </div>
        <div className="max-w-2xl space-y-6">
          <p className="text-lg md:text-2xl font-bold text-slate-400 tracking-[0.4em] uppercase">
            Coming Soon
          </p>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-medium">
            We're building a new way for you to reach us. Stay tuned for our 
            interactive contact suite launching shortly.
          </p>
        </div>
      </div>
    </section>
  );
}