"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, ChevronDown } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const container = useRef();
  const [mounted, setMounted] = useState(false);

  // Prevent Hydration Mismatch by waiting for mount
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

  // Return a simple placeholder or null during server-side rendering
  if (!mounted) return <div className="min-h-screen bg-[#f8fafc]" />;

  return (
    <section 
      ref={container} 
      className="relative py-10 md:py-24 bg-[#f8fafc] min-h-screen pt-24 md:pt-32 overflow-hidden"
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

              {/* Select Service Dropdown */}
              <div className="relative">
                <select 
                  defaultValue=""
                  className="w-full px-5 py-3 md:py-4 rounded-xl bg-white/60 border border-white focus:border-[#0284c7] outline-none transition-all text-sm shadow-sm appearance-none text-slate-500 cursor-pointer"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="salesforce">Salesforce Consulting</option>
                  <option value="web">Web Development</option>
                  <option value="zoho">Zoho Services</option>
                  <option value="app">App Development</option>
                  <option value="cloud">Cloud Solutions</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>

              <textarea rows="4" placeholder="Tell us about your project..." className="w-full px-5 py-3 md:py-4 rounded-xl bg-white/60 border border-white focus:border-[#0284c7] outline-none transition-all resize-none text-sm shadow-sm"></textarea>
              
              <button className="group relative overflow-hidden w-full md:w-auto bg-[#0284c7] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(2,132,199,0.3)] hover:bg-[#0b1120] active:scale-95 border border-white/20">
                <span className="relative z-10">Send Message</span>
                <Send className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          {/* Right Side: Quick Connect */}
          <div className="flex-1 bg-[#0b1120] p-6 md:p-12 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-8 border-b border-white/10 pb-4">Quick Connect</h3>
                <div className="space-y-6 md:space-y-8">
                  
                  {/* Phone First */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#4cc2e4] border border-white/10 transition-all group-hover:bg-[#0284c7] group-hover:text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-0.5">Phone</p>
                      <p className="text-sm md:text-base font-medium text-slate-200">+971545132807</p>
                    </div>
                  </div>

                  {/* Gmail Second */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#4cc2e4] border border-white/10 transition-all group-hover:bg-[#0284c7] group-hover:text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-0.5">Gmail</p>
                      <p className="text-sm md:text-base font-medium text-slate-200">pentacloud@gmail.com</p>
                    </div>
                  </div>

                  {/* Address Third */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#4cc2e4] border border-white/10 transition-all group-hover:bg-[#0284c7] group-hover:text-white mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-0.5">Office</p>
                      <p className="text-sm leading-relaxed text-slate-300 font-medium">Jagan Arcade, 4th Floor, RT Nagar, Bengaluru 560032</p>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="pt-6">
                    <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-4">Social Network</p>
                    <div className="flex items-center gap-5">
                      <a href="#" className="text-[#4cc2e4] hover:text-white hover:scale-110 transition-all"><Linkedin className="w-7 h-7 fill-current" /></a>
                      <a href="#" className="text-[#4cc2e4] hover:text-white hover:scale-110 transition-all"><Instagram className="w-7 h-7" /></a>
                      <a href="#" className="text-[#4cc2e4] hover:text-white hover:scale-110 transition-all"><Facebook className="w-7 h-7 fill-current" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}