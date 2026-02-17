"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const container = useRef();
  const [mounted, setMounted] = useState(false);

  // Fix for Hydration Error: Ensure component is mounted before GSAP/Styles calculate
  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    gsap.set(".gsap-contact-header", { y: -30, opacity: 0 });
    gsap.set(".gsap-contact-card", { scale: 0.95, opacity: 0, y: 40 });
    tl.to(".gsap-contact-header", { y: 0, opacity: 1, duration: 1 })
      .to(".gsap-contact-card", { scale: 1, opacity: 1, y: 0, duration: 1.2 }, "-=0.6");
  }, { scope: container, dependencies: [mounted] });

  if (!mounted) return <div className="min-h-screen bg-[#f8fafc]" />;

  return (
    <section 
      ref={container} 
      className="relative py-10 md:py-24 bg-[#f8fafc] min-h-screen pt-24 md:pt-32 overflow-hidden"
      translate="no"
      suppressHydrationWarning
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="gsap-contact-header text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
            <span className="uppercase tracking-[0.2em] text-[9px] md:text-xs font-bold text-slate-500 ml-1">
              Contact Us
            </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight">
            Ready to start your <br className="hidden md:block"/>
            <span className="text-[#0284c7]">Digital Journey?</span>
          </h1>
        </div>

        {/* Main Glass Card */}
        <div className="gsap-contact-card flex flex-col lg:flex-row bg-white/40 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden border border-white/70">
          
          {/* Left Side: Form */}
          <div className="flex-[1.3] p-6 md:p-12 bg-white/40">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8">Send a Message</h2>
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-5 py-3 md:py-4 rounded-xl bg-white/60 border border-white focus:border-[#0284c7] outline-none transition-all text-sm shadow-sm" />
                <input type="email" placeholder="Work Email" className="w-full px-5 py-3 md:py-4 rounded-xl bg-white/60 border border-white focus:border-[#0284c7] outline-none transition-all text-sm shadow-sm" />
              </div>
              <textarea rows="4" placeholder="Tell us about your project..." className="w-full px-5 py-3 md:py-4 rounded-xl bg-white/60 border border-white focus:border-[#0284c7] outline-none transition-all resize-none text-sm shadow-sm"></textarea>
              <button className="group relative overflow-hidden w-full md:w-auto bg-[#0284c7] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(2,132,199,0.3)] hover:bg-[#0b1120] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] active:scale-95 text-sm md:text-base border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative z-10">Send Message</span>
                <Send className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          {/* Right Side: Quick Connect (Dark Glass) */}
          <div className="flex-1 bg-[#0b1120] p-6 md:p-12 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-8 border-b border-white/10 pb-4">Quick Connect</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#0284c7] border border-white/10 shrink-0 transition-all group-hover:bg-[#0284c7] group-hover:text-white"><Phone className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-0.5">Phone</p>
                      <p className="text-sm md:text-base font-medium text-slate-200">+971545132807</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#0284c7] border border-white/10 shrink-0 mt-1 transition-all group-hover:bg-[#0284c7] group-hover:text-white"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-0.5">Office</p>
                      <p className="text-sm leading-relaxed text-slate-300 font-medium">Jagan Arcade, 4th Floor, 1st main Road, Post, Anandnagar, RT Nagar, Bengaluru, Karnataka 560032</p>
                    </div>
                  </div>

                  {/* RESTORED SOCIAL NETWORK SECTION */}
                  <div className="pt-6">
                    <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-4">Social Network</p>
                    <div className="flex items-center gap-5">
                      <a href="#" className="text-[#4cc2e4] hover:text-white hover:scale-110 transition-all duration-300">
                        <Linkedin className="w-7 h-7 fill-current" />
                      </a>
                      <a href="#" className="text-[#4cc2e4] hover:text-white hover:scale-110 transition-all duration-300">
                        <Instagram className="w-7 h-7" />
                      </a>
                      <a href="#" className="text-[#4cc2e4] hover:text-white hover:scale-110 transition-all duration-300">
                        <Facebook className="w-7 h-7 fill-current" />
                      </a>
                      {/* Restored Twitter (X) Icon */}
                      <a href="#" className="text-[#4cc2e4] hover:text-white hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-[#22c55e] rounded-full" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-[#22c55e] rounded-full animate-ping" />
                </div>
                <p className="text-[11px] text-slate-300 font-medium italic">Experts online: Response in &lt; 2h</p>
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