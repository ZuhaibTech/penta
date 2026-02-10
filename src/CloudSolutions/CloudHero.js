import React from 'react';
import Image from 'next/image';

export default function CloudHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side: Text */}
        <div className="flex-1 space-y-4 md:space-y-8 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl md:text-7xl font-black leading-tight">
            Cloud <br /> 
            <span className="text-[#0284c7]">Solutions.</span>
          </h1>
          <p className="text-xs md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            At Pentacloud Consulting, we provide complete cloud solutions tailored to your business needs — from strategy and migration to deployment, optimization, and ongoing support.
          </p>
          <div className="pt-2">
            <button className="w-full md:w-auto bg-[#0284c7] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-slate-900 transition-all shadow-lg">
              Explore Infrastructure →
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full order-1 md:order-2">
          <div className="relative w-full h-[220px] md:h-[450px]">
            <Image 
              src="/Cloud Solutions.jpg" 
              alt="Cloud Solutions" 
              fill 
              className="object-cover rounded-2xl md:rounded-3xl border border-slate-100 shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}