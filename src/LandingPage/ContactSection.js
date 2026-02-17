"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const container = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.from(".gsap-contact-info", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(".gsap-contact-form", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");
  }, { scope: container, dependencies: [mounted] });

  if (!mounted) return null;

  return (
    <section 
      ref={container} 
      className="relative py-24 bg-[#f8fafc] overflow-hidden"
      suppressHydrationWarning
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* 1. Left Side: Brand Vision & Founder */}
          <div className="gsap-contact-info lg:sticky lg:top-32 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#0284c7] rounded-full" />
                <h2 className="text-[#0284c7] font-black tracking-[0.2em] text-sm uppercase">
                  Connect With Us
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Driven by Innovation, <br />
                Led by <span className="text-[#0284c7]">Expertise.</span>
              </h1>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
              At Pentacloud, we don't just provide technology; we build partnerships. 
              Our mission is to empower businesses with the same AI brilliance and 
              human touch that defines our core values.
            </p>

            {/* Founder Mini-Card: Glass Edition */}
            <div className="group flex items-center gap-5 p-5 bg-white/40 backdrop-blur-xl rounded-3xl border border-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] max-w-sm transition-all duration-500 hover:shadow-blue-100 hover:-translate-y-1">
              <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-[#0284c7] flex items-center justify-center text-white font-black text-xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                <span className="relative z-10">PC</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg group-hover:text-[#0284c7] transition-colors">ARSHAD KHAN</h4>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

          {/* 2. Right Side: Glass Form Panel */}
          <div className="gsap-contact-form relative group">
            {/* Background decorative glow for form */}
            <div className="absolute inset-0 bg-[#0284c7]/5 blur-3xl rounded-[3rem] -z-10 group-hover:bg-[#0284c7]/10 transition-colors duration-700" />
            
            <div className="bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                Lets Connect
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              </h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-6 py-4 rounded-2xl border border-white bg-white/60 focus:bg-white focus:outline-none focus:border-[#0284c7] transition-all text-slate-700 shadow-sm"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-6 py-4 rounded-2xl border border-white bg-white/60 focus:bg-white focus:outline-none focus:border-[#0284c7] transition-all text-slate-700 shadow-sm"
                  />
                </div>

                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 rounded-2xl border border-white bg-white/60 focus:bg-white focus:outline-none focus:border-[#0284c7] transition-all text-slate-700 shadow-sm"
                />

                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl border border-white bg-white/60 focus:bg-white focus:outline-none focus:border-[#0284c7] transition-all text-slate-500 appearance-none cursor-pointer shadow-sm">
                    <option>Select Service</option>
                    <option>Salesforce Consulting</option>
                    <option>Cloud Solutions</option>
                    <option>Web/App Development</option>
                    <option>IT Consulting</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[#0284c7]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <textarea 
                  placeholder="How can we help you?" 
                  rows="4" 
                  className="w-full px-6 py-4 rounded-2xl border border-white bg-white/60 focus:bg-white focus:outline-none focus:border-[#0284c7] transition-all text-slate-700 resize-none shadow-sm"
                ></textarea>

                {/* Shimmer Button */}
                <button className="group relative overflow-hidden w-full py-5 bg-[#0284c7] text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-[0_10px_25px_rgba(2,132,199,0.3)] hover:shadow-[0_15px_30px_rgba(2,132,199,0.4)] active:scale-[0.98] border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
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