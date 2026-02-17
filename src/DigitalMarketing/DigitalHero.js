"use client";
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function DigitalHero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial State: Unified with the horizontal split design
    gsap.set(".gsap-digital-text", { x: -50, opacity: 0 });
    gsap.set(".gsap-digital-video", { x: 50, opacity: 0, scale: 0.95 });

    // Animation Sequence
    tl.to(".gsap-digital-video", {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.4,
    })
    .to(".gsap-digital-text", {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    }, "-=1");

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-6 bg-[#f8fafc] text-slate-900 overflow-hidden"
      translate="no"
    >
      {/* Background Glass Glows - Essential for the glass effect to pop */}
      <div className="absolute top-[10%] left-[-5%] w-80 h-80 bg-sky-200/40 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* MOBILE HEADER */}
        <div className="gsap-digital-text block md:hidden text-center order-1 w-full">
          <h1 className="text-4xl font-black leading-[1.1] text-slate-900">
            Digital <br /> 
            <span className="text-[#0284c7]">Marketing</span>
          </h1>
        </div>

        {/* GLASSY VIDEO CONTAINER (Static Video) */}
        <div className="gsap-digital-video flex-1 w-full order-2 md:order-2 group">
          <div className="relative w-full h-[280px] md:h-[480px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(2,132,199,0.2)] border border-white/70 bg-white/20 backdrop-blur-md p-1 md:p-1.5">
            <div className="w-full h-full rounded-[2.2rem] md:rounded-[2.8rem] overflow-hidden bg-white">
              <video
                src="/DigitalMarket.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Static Glass Frost Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-brightness-105 pointer-events-none" />
            
            {/* Depth Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0284c7]/10 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex-1 space-y-6 md:space-y-10 text-center md:text-left order-3 md:order-1">
          <div className="space-y-4">
            <h1 className="gsap-digital-text hidden md:block text-5xl md:text-7xl font-black leading-[1.1] text-slate-900">
              Digital <br /> 
              <span className="text-[#0284c7]">Marketing</span>
            </h1>
            
            <p className="gsap-digital-text text-base md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
              Elevate your brand visibility with our comprehensive digital marketing services, including data-driven strategies and creative campaigns.
            </p>
          </div>
          
          {/* THEMED GLASS BUTTON */}
          <div className="gsap-digital-text pt-4">
            <button className="group relative overflow-hidden w-full md:w-auto bg-[#0284c7] text-white px-10 py-5 rounded-2xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.4)] hover:-translate-y-1 active:scale-95 border border-white/20">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              
              <span className="relative z-10">Speak to Our Expert</span> 
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.2s infinite;
        }
      `}</style>
    </section>
  );
}