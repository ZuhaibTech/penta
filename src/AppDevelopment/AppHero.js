"use client";
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
// 1. Import GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AppHero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial State: Text hidden to the side, Video scaled down
    gsap.set(".gsap-app-text", { x: -50, opacity: 0 });
    gsap.set(".gsap-app-video", { scale: 0.8, opacity: 0 });

    // Animation Sequence
    tl.to(".gsap-app-text", {
      x: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2, // Sequentially reveals header, paragraph, and button
    })
    .to(".gsap-app-video", {
      scale: 1,
      opacity: 1,
      duration: 1.4,
      ease: "back.out(1.5)", // Gives the video a high-end "pop" effect
    }, "-=1"); // Overlaps with the text animation for a fluid feel

  }, { scope: container });

  return (
    <section ref={container} className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">
        
        {/* MOBILE HEADER */}
        <div className="gsap-app-text block md:hidden text-center order-1 w-full px-2">
          <h1 className="text-4xl font-black leading-tight">
            App <br /> 
            <span className="text-[#0284c7]">Development</span>
          </h1>
        </div>

        {/* RIGHT SIDE (VIDEO) */}
        <div className="gsap-app-video flex-1 w-full order-2 md:order-2 px-2 md:px-0">
          <div className="relative mx-auto max-w-[550px] md:max-w-none">
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white pointer-events-none border border-slate-100 p-1 md:p-1.5">
              <div className="w-full h-full rounded-[1.2rem] md:rounded-[2.2rem] overflow-hidden aspect-video">
                <video 
                  src="/App-Dev.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate nofullscreen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SIDE (DESCRIPTION & CTA) */}
        <div className="flex-1 space-y-5 md:space-y-8 text-center md:text-left order-3 md:order-1 px-2">
          {/* DESKTOP HEADER */}
          <h1 className="gsap-app-text hidden md:block text-3xl md:text-7xl font-black leading-tight">
            App <br /> 
            <span className="text-[#0284c7]">Development</span>
          </h1>
          
          <p className="gsap-app-text text-sm md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            We specialize in creating intuitive, high-performance applications that enhance user experiences and meet the evolving needs of businesses in a competitive marketplace.
          </p>
          
          {/* THEMED BUTTON */}
          <div className="gsap-app-text pt-2">
            <button className="group w-full md:w-auto bg-[#0284c7] text-white px-8 py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-[#e0f2fe] hover:text-[#0284c7] transition-all duration-300 shadow-md active:scale-95 uppercase tracking-wider">
              Speak to Our Expert 
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}