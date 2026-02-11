import React from 'react';

export default function ContactHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Exact Text Information */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase">
              Get in <span className="text-[#0081c2]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Have a project in mind? Looking to partner with us? <br/>
              Our team is here to help you navigate your digital journey.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-[#0081c2] shrink-0">
                📍
              </div>
              <div>
                <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">Our Office</h3>
                <p className="text-slate-500">Global Tech Park, Sector 5, Digital City</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-[#0081c2] shrink-0">
                ✉️
              </div>
              <div>
                <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">Email Us</h3>
                <p className="text-slate-500">contact@pentacloud.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Exact Form */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0081c2] bg-white transition-all" />
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0081c2] bg-white transition-all" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0081c2] bg-white transition-all" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0081c2] bg-white transition-all"></textarea>
            <button className="w-full bg-[#0081c2] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#006da3] transition-all shadow-lg shadow-blue-100 active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}