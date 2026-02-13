import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WebHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">
        
        {/* MOBILE HEADER */}
        <div className="block md:hidden text-center order-1 w-full px-2">
          <h1 className="text-4xl font-black leading-tight">
            Web <span className="text-[#0284c7]">Development</span>
          </h1>
        </div>

        {/* RIGHT SIDE (VIDEO) */}
        <div className="flex-1 w-full order-2 md:order-2 px-2 md:px-0">
          <div className="relative mx-auto max-w-[550px] md:max-w-none">
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white aspect-video pointer-events-none border border-slate-100 p-1 md:p-1.5">
              <div className="w-full h-full rounded-[1.2rem] md:rounded-[2.2rem] overflow-hidden">
                <video 
                  src="/Web-Dev.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate nofullscreen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SIDE (DESCRIPTION & CTA) */}
        <div className="flex-1 space-y-5 md:space-y-8 text-center md:text-left order-3 md:order-1 px-2">
          <h1 className="hidden md:block text-3xl md:text-6xl font-black leading-tight">
            Web <span className="text-[#0284c7]">Development</span>
          </h1>
          
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            We create stunning, user-friendly websites tailored to your business needs, 
            ensuring exceptional performance, security, and scalability in an ever-evolving digital landscape.
          </p>
          
          {/* ANIMATED BUTTON: Blue to Light Blue + Sliding Arrow */}
          <div className="pt-2">
            <button className="group w-full md:w-auto bg-[#0284c7] text-white px-8 py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-[#e0f2fe] hover:text-[#0284c7] transition-all duration-300 shadow-md active:scale-95">
              Speak to Our Expert 
              {/* The arrow below transitions when the parent 'group' (the button) is hovered */}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}