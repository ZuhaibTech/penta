"use client";
import React from "react";
import Image from "next/image";
import { CalendarCheck, ChevronsRight } from "lucide-react";

export default function ScheduleBox() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Map Container - Height reduced for mobile */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 group">
          
          {/* Background Map Image */}
          <Image 
            src="/map.png" 
            alt="Office Location"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500" />

          {/* Light Themed Info Box - Scaled for Mobile */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-auto md:w-[420px] transform transition-all duration-500 hover:-translate-y-2">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex items-center gap-4 md:gap-6">
              
              {/* Icon Container - Smaller on mobile */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-[#38bdf8]/20 rounded-full animate-ping" />
                <div className="relative bg-slate-50 p-3 md:p-4 rounded-full border border-slate-100">
                  <CalendarCheck className="w-6 h-6 md:w-8 md:h-8 text-[#38bdf8]" strokeWidth={2.5} />
                </div>
              </div>

              {/* Text Information */}
              <div className="flex flex-col gap-0.5 md:gap-1">
                <span className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.15em]">
                  Schedule Now
                </span>
                {/* Fixed Blue Color for the Title */}
                <h2 className="text-[#38bdf8] text-lg md:text-2xl font-black leading-tight">
                  Schedule a 30-minute <br className="hidden md:block"/> consultation
                </h2>
                
                {/* Action Arrow - Smaller on mobile */}
                <button className="mt-2 md:mt-4 w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center group/btn hover:bg-[#38bdf8] transition-colors duration-300">
                  <ChevronsRight className="text-white w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}