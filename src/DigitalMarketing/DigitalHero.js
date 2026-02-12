import React from 'react';
import Image from 'next/image';

export default function DigitalHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* MOBILE HEADER: Shown only on small screens, first in order */}
        <div className="block md:hidden text-center order-1 w-full">
          <h1 className="text-4xl font-black leading-[1.1] text-slate-900">
            Digital <br /> 
            <span className="text-[#0284c7]">Marketing</span>
          </h1>
        </div>

        {/* IMAGE: Second in order on mobile, Second in order on desktop */}
        <div className="flex-1 w-full order-2 md:order-2">
          <div className="relative w-full h-[280px] md:h-[480px]">
            <Image 
              src="/digital.jpg" 
              alt="Digital Marketing" 
              fill 
              className="object-cover rounded-[2rem] md:rounded-[3rem] border border-slate-50 shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* TEXT CONTENT: Third in order on mobile, First in order on desktop */}
        <div className="flex-1 space-y-6 md:space-y-10 text-center md:text-left order-3 md:order-1">
          {/* DESKTOP HEADER: Hidden on mobile */}
          <h1 className="hidden md:block text-3xl md:text-7xl font-black leading-[1.1] text-slate-900">
            Digital <br /> 
            <span className="text-[#0284c7]">Marketing</span>
          </h1>
          
          <p className="text-sm md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
            Elevate your brand visibility with our comprehensive digital marketing services, including data-driven strategies and creative campaigns.
          </p>
          
          <div className="pt-4">
            <button className="w-full md:w-auto bg-[#0284c7] text-white px-8 py-4 rounded-xl font-extrabold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-[#0ea5e9] transition-all shadow-xl shadow-blue-100 active:scale-95">
              Speak to Our Expert <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}