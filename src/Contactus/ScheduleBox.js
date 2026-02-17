"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { CalendarCheck, ChevronsRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScheduleBox() {
  const container = useRef();
  const infoBox = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;

    gsap.from(infoBox.current, {
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: container, dependencies: [mounted] });

  if (!mounted) return null;

  return (
    <section ref={container} className="relative py-10 md:py-16 px-4 md:px-6 bg-[#f8fafc] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Map Container - Reduced height */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white group">
          
          <Image 
            src="/map.png" 
            alt="Office Location"
            fill
            className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            priority
          />

          {/* Frosted Glass Map Overlay */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-700" />
          
          {/* THE SMALLER GLASS INFO BOX */}
          <div 
            ref={infoBox}
            className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:w-[380px]"
          >
            <div className="relative overflow-hidden bg-white/40 backdrop-blur-xl border border-white/70 p-5 md:p-7 rounded-[1.8rem] md:rounded-[2.2rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] flex items-center gap-4 md:gap-6 group/card">
              
              {/* Icon Container - Scaled Down */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-[#0284c7]/20 rounded-2xl animate-ping" />
                <div className="relative bg-white/70 p-3 md:p-4 rounded-2xl border border-white shadow-sm">
                  <CalendarCheck className="w-6 h-6 md:w-7 md:h-7 text-[#0284c7]" strokeWidth={2} />
                </div>
              </div>

              {/* Text Information - Scaled Down */}
              <div className="flex flex-col gap-0.5">
                <span className="text-[#0284c7] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                  Schedule Now
                </span>
                <h2 className="text-slate-900 text-base md:text-xl font-black leading-tight">
                  Schedule a 30-minute <br className="hidden md:block"/> consultation
                </h2>
                
                {/* Action Button - Scaled Down */}
                <button className="mt-2 md:mt-3 group/btn relative overflow-hidden w-9 h-9 md:w-11 md:h-11 bg-[#0284c7] rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[#0284c7]/30 hover:-translate-y-0.5 active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                  <ChevronsRight className="text-white w-4 h-4 md:w-5 md:h-5 relative z-10 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 1.5s infinite; }
      `}</style>
    </section>
  );
}