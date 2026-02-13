import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-10 md:py-24 bg-slate-50 min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
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

        {/* Main Card */}
        <div className="flex flex-col lg:flex-row bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
          
          {/* Left Side: Send a Message */}
          <div className="flex-[1.3] p-6 md:p-12">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8">Send a Message</h2>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#0284c7] outline-none transition-all text-sm" 
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0284c7] outline-none transition-all text-sm" 
                />
              </div>
              <select className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#0284c7] outline-none appearance-none cursor-pointer text-slate-500 text-sm">
                <option>Select Service</option>
                <option>Salesforce Solutions</option>
                <option>Web Development</option>
                <option>App Development</option>
              </select>
              <textarea 
                rows="4"
                placeholder="Tell us about your project..." 
                className="w-full px-5 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#0284c7] outline-none transition-all resize-none text-sm"
              ></textarea>
              
              <button className="group w-full md:w-auto bg-[#0284c7] text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-lg text-sm md:text-base">
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          {/* Right Side: Quick Connect - Corrected Address */}
          <div className="flex-1 bg-[#0b1120] p-6 md:p-12 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284c7] rounded-full blur-[80px] opacity-20 -mr-10 -mt-10"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-8">Quick Connect</h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#0284c7] border border-white/5 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold uppercase text-slate-500 tracking-wider">Phone</p>
                      <p className="text-sm md:text-base font-medium text-slate-200">+971545132807</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#0284c7] border border-white/5 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase text-slate-500 tracking-wider">Email</p>
                      <p className="text-xs md:text-sm font-medium text-slate-200 truncate">contactus@pentacloudconsulting.com</p>
                    </div>
                  </div>

                  {/* Corrected Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#0284c7] border border-white/5 shrink-0 mt-1">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold uppercase text-slate-500 tracking-wider">Office</p>
                      <p className="text-sm leading-relaxed text-slate-200 font-medium">
                        Jagan Arcade, 4th Floor, 1st main <br/>
                        Road, Post, Anandnagar, RT Nagar, <br/>
                        Bengaluru, Karnataka 560032
                      </p>
                    </div>
                  </div>

                  {/* Social Icons - Cyan Color from Screenshot */}
                  <div className="pt-6">
                    <p className="text-[8px] font-bold uppercase text-slate-500 tracking-wider mb-4">Social Network</p>
                    <div className="flex items-center gap-5">
                      <a href="#" className="text-[#4cc2e4] hover:scale-110 transition-transform">
                        <Linkedin className="w-7 h-7 fill-current" />
                      </a>
                      <a href="#" className="text-[#4cc2e4] hover:scale-110 transition-transform">
                        <Instagram className="w-7 h-7" />
                      </a>
                      <a href="#" className="text-[#4cc2e4] hover:scale-110 transition-transform">
                        <Facebook className="w-7 h-7 fill-current" />
                      </a>
                      <a href="#" className="text-[#4cc2e4] hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-10 p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
                <p className="text-[10px] text-slate-300 font-medium italic">Experts online: Response in &lt; 2h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}