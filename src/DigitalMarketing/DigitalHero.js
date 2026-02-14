"use client";
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
// 1. Import GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function DigitalHero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial State
    gsap.set(".gsap-digital-text", { y: 40, opacity: 0 });
    gsap.set(".gsap-digital-video", { scale: 0.8, opacity: 0 });

    // Animation Sequence
    tl.to(".gsap-digital-video", {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "back.out(1.2)",
    })
    .to(".gsap-digital-text", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    }, "-=1");

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 bg-white text-slate-900 overflow-hidden"
      // Prevent browser translation popups on the whole section
      translate="no"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* MOBILE HEADER */}
        <div className="gsap-digital-text block md:hidden text-center order-1 w-full">
          <h1 className="text-4xl font-black leading-[1.1] text-slate-900">
            Digital <br /> 
            <span className="text-[#0284c7]">Marketing</span>
          </h1>
        </div>

        {/* VIDEO CONTAINER */}
        <div className="gsap-digital-video flex-1 w-full order-2 md:order-2">
          <div className="relative w-full h-[280px] md:h-[480px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-50 group">
            
            {/* Video Element with specific attributes to disable browser overlays */}
            <video
              src="/DigitalMarket.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture // Removes the PiP button from the browser UI
              controlsList="nodownload nofullscreen noremoteplayback" // Prevents extra browser icons
              className="w-full h-full object-cover pointer-events-none" // pointer-events-none prevents right-click/translation menus on the video itself
            />

            {/* Glassmorphism Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0284c7]/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border-[8px] border-white/10 rounded-[2rem] md:rounded-[3rem] pointer-events-none" />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex-1 space-y-6 md:space-y-10 text-center md:text-left order-3 md:order-1">
          {/* DESKTOP HEADER */}
          <h1 className="gsap-digital-text hidden md:block text-3xl md:text-7xl font-black leading-[1.1] text-slate-900">
            Digital <br /> 
            <span className="text-[#0284c7]">Marketing</span>
          </h1>
          
          <p className="gsap-digital-text text-sm md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
            Elevate your brand visibility with our comprehensive digital marketing services, including data-driven strategies and creative campaigns.
          </p>
          
          {/* THEMED BUTTON */}
          <div className="gsap-digital-text pt-4">
            <button className="group w-full md:w-auto bg-[#0284c7] text-white px-8 py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-[#e0f2fe] hover:text-[#0284c7] transition-all duration-300 shadow-md active:scale-95 border border-white/20">
              Speak to Our Expert 
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}