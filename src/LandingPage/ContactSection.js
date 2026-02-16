"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* 1. Left Side: Brand Vision & Founder */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div>
              <h2 className="text-[#38bdf8] font-black tracking-[0.2em] text-sm uppercase mb-3">
                Connect With Us
              </h2>
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

            {/* Founder Mini-Card */}
            <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-3xl border border-sky-100 max-w-sm shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#0284c7] flex items-center justify-center text-white font-black text-xl shadow-inner">
                PC
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">ARSHAD KHAN</h4>
                <p className="text-[#0284c7] text-[10px] font-black uppercase tracking-widest">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

          {/* 2. Right Side: Re-edited Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
            <h3 className="text-2xl font-black text-slate-900 mb-8">Start a Project</h3>
            
            <form className="space-y-5">
              {/* Row 1: First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700"
                />
              </div>

              {/* Row 2: Email Address */}
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700"
              />

              {/* Row 3: Service Selection */}
              <div className="relative">
                <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-500 appearance-none cursor-pointer">
                  <option>Select Service</option>
                  <option>Salesforce Consulting</option>
                  <option>Cloud Solutions</option>
                  <option>Web/App Development</option>
                  <option>IT Consulting</option>
                </select>
                {/* Custom Chevron Arrow for Select */}
                <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Row 4: Description Box */}
              <textarea 
                placeholder="How can we help you?" 
                rows="5" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button className="w-full py-5 bg-[#0284c7] text-white font-black uppercase tracking-widest rounded-2xl hover:bg-slate-900 transition-all shadow-lg shadow-sky-200 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}