"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutHero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Initial State: Hide elements to prevent jump
    gsap.set(".gsap-about-header", { x: -100, opacity: 0 });
    gsap.set(".gsap-about-content", { y: 40, opacity: 0 });
    gsap.set(".gsap-about-image", { scale: 0.9, opacity: 0 });

    // 2. The Animation Sequence
    tl.to(".gsap-about-header", {
      x: 0,
      opacity: 1,
      duration: 1.2,
    })
    .to(".gsap-about-content", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    }, "-=0.8") // Overlap with header animation
    .from(".gsap-about-border", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.8,
    }, "-=0.5")
    .to(".gsap-about-image", {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
    }, "-=1");

  }, { scope: container });

  return (
    <section ref={container} className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="relative mb-2 md:mb-4">
          <h2 className="gsap-about-header text-4xl md:text-7xl font-black text-[#0081c2] uppercase tracking-tight">
            About
          </h2>
        </div>

        {/* Main Content: Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start mb-12 md:mb-16">
          
          {/* Left Side */}
          <div className="lg:w-3/5 gsap-about-content">
            <h1 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight">
              PentaCloud: Your Modern-Day Technology Partner for innovative 
              <span className="text-[#0081c2]"> Salesforce solutions</span> and 
              seamless business transformation.
            </h1>
          </div>

          {/* Right Side */}
          <div className="lg:w-2/5 space-y-6 md:space-y-8 gsap-about-content">
            <p className="gsap-about-border text-slate-600 text-sm md:text-lg leading-relaxed border-l-4 border-[#0081c2] pl-4 md:pl-6 py-1 md:py-2">
              We provide services designed to make your business operations 
              more efficient & effective from IT consulting & data management.
            </p>
            
            <button className="bg-[#0081c2] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-[#006da3] transition-all transform active:scale-95 uppercase tracking-wide text-sm">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="gsap-about-image relative w-full aspect-video md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
          <Image 
            src="/About-Penta.png" 
            alt="PentaCloud Team" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute bottom-6 left-6 max-w-sm p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hidden md:block">
            <h4 className="text-[#0081c2] font-black text-xl mb-1">PentaCloud</h4>
            <p className="text-slate-700 text-sm font-medium leading-snug">
              // Your Modern-Day Technology Partner <br />
              Expert Salesforce implementation & global strategy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}