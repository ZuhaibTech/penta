"use client";
import React, { useRef } from "react";
import Image from "next/image";
// 1. Import GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalImpact() {
  const container = useRef();

  useGSAP(() => {
    // 1. Background Earth Zoom
    gsap.from(".gsap-earth-bg", {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      scale: 1.2,
      opacity: 0.4,
    });

    // 2. Text Content Reveal
    gsap.from(".gsap-impact-content > *", {
      scrollTrigger: {
        trigger: ".gsap-impact-content",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

    // 3. Number Counter Animation
    const counters = document.querySelectorAll(".gsap-count");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      gsap.to(counter, {
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
        },
        innerText: target,
        duration: 2,
        snap: { innerText: 1 }, 
        ease: "power2.out",
      });
    });
  }, { scope: container });

  // UPDATED: Team corrections for values and labels
  const stats = [
    { label: "Active Clients", value: 10 },
    { label: "Global Offices", value: 3 },
    { label: "Projects Done", value: 25 },
    { label: "Experts", value: 12 }, // Changed label to "Experts" and value to 12
  ];

  return (
    <section ref={container} className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#000814]">
      
      {/* 1. BACKGROUND THEME LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="gsap-earth-bg relative w-full h-full">
          <Image
            src="/earth-bg 1.png"
            alt="Global Network"
            fill
            className="object-cover opacity-80 mix-blend-lighten"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0284c7]/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#38bdf8]/30 via-[#0284c7]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000814] via-transparent to-[#000814]" />
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#38bdf8]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-[120px]" />

      {/* 3. CONTENT LAYER */}
      <div className="gsap-impact-content relative z-10 max-w-7xl mx-auto px-6 py-20 w-full flex flex-col items-center text-center">
        
        <div className="bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
          <span className="text-[#38bdf8] font-black tracking-[0.3em] text-[10px] uppercase">
            Global Presence
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Connecting Businesses <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#60a5fa]">
            Across the Globe.
          </span>
        </h1>
        
        <p className="text-white/90 max-w-2xl text-lg md:text-xl leading-relaxed mb-16 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          We bridge the gap between complex cloud infrastructure and 
          seamless business growth on a global scale.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-5xl">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-[#38bdf8]/10 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform flex items-center">
                <span className="gsap-count" data-target={stat.value}>0</span>
                <span>+</span>
              </span>
              <span className="text-[#38bdf8] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}