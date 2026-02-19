"use client";
import React from 'react';
import Image from "next/image";
import { Sparkles, Users } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-32 bg-[#f8fafc] overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/30 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-xl mb-2 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#0284c7]" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-slate-500">Identity</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Who <span className="text-[#0284c7]">We Are.</span>
          </h2>

          <div className="space-y-4 md:space-y-6">
            <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">
              Pentacloud Consulting is a modern technology consulting firm helping businesses navigate digital transformation with confidence. 
            </p>
            <p className="text-slate-500 text-sm md:text-lg leading-relaxed">
              We specialize in Salesforce consulting, cloud solutions, data migration, and digital innovation—combining technical excellence with a human-centric approach. 
            </p>
          </div>
        </div>

        {/* Right Side: Glassy Image Container (Mobile Optimized) */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 px-2 md:px-0">
          <div className="relative group">
            
            {/* The "Outer Glow" - Scaled down for mobile */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-[#0284c7]/20 to-sky-400/10 rounded-[2.5rem] md:rounded-[3.5rem] blur-xl md:blur-2xl opacity-50" />

            {/* The Glass Frame */}
            <div className="relative p-2 md:p-4 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] border border-white/80 shadow-xl transition-transform duration-700 lg:group-hover:scale-[1.02]">
              
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-[2rem] md:rounded-[2.2rem] overflow-hidden">
                <Image 
                  src="/holo-earth.jpg" 
                  alt="PentaCloud Consulting Team" 
                  fill
                  className="object-cover transition-transform duration-1000 lg:group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Glass Badge - Repositioned for Mobile */}
              <div className="absolute 
                top-4 -left-2           /* Mobile: Top-left to avoid overlap */
                md:top-auto md:bottom-8 /* Tablet/Desktop: Bottom */
                md:-left-10             /* Tablet/Desktop: Pushed out side */
                bg-white/70 backdrop-blur-xl 
                p-4 md:p-6 
                rounded-2xl md:rounded-[2rem] 
                border border-white shadow-2xl 
                max-w-[180px] md:max-w-[240px] 
                z-20 animate-bounce-slow"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0284c7] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="font-black text-slate-800 text-[10px] md:text-sm uppercase tracking-tighter">Innovation First</span>
                </div>
                <p className="text-[9px] md:text-xs text-slate-500 font-bold leading-tight">
                  Navigating the future of cloud technology today.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}