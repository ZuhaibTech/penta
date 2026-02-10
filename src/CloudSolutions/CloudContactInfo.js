import React from 'react';

export default function CloudContactInfo() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-[#0284c7] rounded-3xl md:rounded-[3rem] p-6 md:p-16 text-white flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden shadow-2xl">
        
        {/* Decorative Blur */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        
        <div className="flex-1 text-center md:text-left relative z-10">
          <h2 className="text-2xl md:text-4xl font-black mb-4">Launch Your Cloud.</h2>
          <p className="text-[12px] md:text-base text-blue-100 opacity-90 leading-relaxed">
            Ready to optimize your infrastructure? Our certified cloud architects 
            are standing by to build your custom environment. 
          </p>
        </div>
        
        {/* Contact Detail Card */}
        <div className="w-full md:w-80 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl text-slate-900 relative z-10 shadow-lg">
          <div className="space-y-4 md:space-y-6">
            <div>
              <span className="text-[10px] font-black text-[#0284c7] uppercase tracking-widest">Email Our Team</span>
              <p className="text-sm md:text-lg font-bold mt-1">support@pentacloud.com</p>
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />
            <div>
              <span className="text-[10px] font-black text-[#0284c7] uppercase tracking-widest">Direct Line</span>
              <p className="text-sm md:text-lg font-bold mt-1">+1 (234) 567-890</p>
            </div>
            <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-[#0284c7] transition-colors">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}