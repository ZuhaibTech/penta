"use client";
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
// 1. Import GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CloudHero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial State
    gsap.set(".gsap-cloud-text", { y: 30, opacity: 0 });
    gsap.set(".gsap-cloud-video", { scale: 0.9, opacity: 0 });

    // Animation Timeline
    tl.to(".gsap-cloud-text", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    })
    .to(".gsap-cloud-video", {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out"
    }, "-=0.8");

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-white text-slate-900 overflow-hidden relative"
      translate="no"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        
        {/* MOBILE HEADER */}
        <div className="gsap-cloud-text block md:hidden text-center order-1 w-full">
          <h1 className="text-4xl font-black leading-tight">
            Cloud <br /> 
            <span className="text-[#0284c7]">Solutions.</span>
          </h1>
        </div>

        {/* VIDEO CONTAINER */}
        <div className="gsap-cloud-video flex-1 w-full order-2 md:order-2">
          <div className="relative w-full h-[220px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-50 group">
            
            {/* Video Element */}
            <video
              src="/CloudSolutions.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="w-full h-full object-cover pointer-events-none"
            />

            {/* Glassmorphism Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0284c7]/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border-[6px] border-white/20 rounded-2xl md:rounded-3xl pointer-events-none" />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex-1 space-y-4 md:space-y-8 text-center md:text-left order-3 md:order-1">
          {/* DESKTOP HEADER */}
          <h1 className="gsap-cloud-text hidden md:block text-3xl md:text-7xl font-black leading-tight">
            Cloud <br /> 
            <span className="text-[#0284c7]">Solutions.</span>
          </h1>

          <p className="gsap-cloud-text text-sm md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            At Pentacloud Consulting, we provide complete cloud solutions tailored to your business needs — from strategy and migration to deployment, optimization, and ongoing support.
          </p>
          
          {/* THEMED BUTTON */}
          <div className="gsap-cloud-text pt-2">
            <button className="group w-full md:w-auto bg-[#0284c7] text-white px-8 py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-[#e0f2fe] hover:text-[#0284c7] transition-all duration-300 shadow-md active:scale-95 border border-white/10">
              Explore Infrastructure
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}