import React from 'react';
import Image from 'next/image';

export default function SalesforceConsulting() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Text Content */}
        <div className="flex-1 space-y-4 md:space-y-8 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl md:text-7xl font-black leading-tight text-slate-900">
            Salesforce <br /> 
            <span className="text-[#0284c7]">Consulting</span>
          </h1>
          
          <p className="text-sm md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Unlock the full potential of your Salesforce investment with tailored 
            consulting services, expert integrations, and comprehensive training programs.
          </p>
          
          <div className="pt-2">
            <button className="w-full md:w-auto bg-[#0284c7] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-[#0ea5e9] transition-all shadow-lg shadow-blue-100">
              Speak to Our Expert <span>→</span>
            </button>
          </div>
        </div>

        {/* Image - Now visible on mobile */}
        <div className="flex-1 w-full order-1 md:order-2">
          <div className="relative w-full h-[250px] md:h-[450px]">
            <Image 
              src="/Salesforce.jpg" // Ensure this image is in your /public folder
              alt="Salesforce Consulting" 
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