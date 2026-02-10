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
                <h4 className="font-bold text-slate-900 text-lg">Your Name</h4>
                <p className="text-[#0284c7] text-[10px] font-black uppercase tracking-widest">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

          {/* 2. Right Side: Updated Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
            <h3 className="text-2xl font-black text-slate-900 mb-8">Start a Project</h3>
            
            <form className="space-y-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700"
                />
              </div>

              {/* Row 2: Company Name (New) */}
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700"
              />

              {/* Row 3: Service Selection */}
              <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-500 appearance-none">
                <option>Select Service</option>
                <option>Salesforce Consulting</option>
                <option>Cloud Solutions</option>
                <option>Web/App Development</option>
                <option>IT Consulting</option>
              </select>

              {/* Row 4: File/Image Upload (New) */}
              <div className="relative">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">
                  Attach Project Brief/Image (Optional)
                </label>
                <input 
                  type="file" 
                  className="w-full px-6 py-3 rounded-2xl border border-dashed border-slate-300 bg-slate-100/50 text-slate-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-[#38bdf8] file:text-white hover:file:bg-[#0284c7] cursor-pointer"
                />
              </div>

              {/* Row 5: Message */}
              <textarea 
                placeholder="How can we help you?" 
                rows="4" 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#38bdf8] bg-white transition-colors text-slate-700"
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