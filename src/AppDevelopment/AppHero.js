import React from 'react';

export default function AppHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">
        
        {/* MOBILE HEADER: First in order on small screens */}
        <div className="block md:hidden text-center order-1 w-full px-2">
          <h1 className="text-4xl font-black leading-tight">
            App <br /> 
            <span className="text-[#0284c7]">Development</span>
          </h1>
        </div>

        {/* RIGHT SIDE (VIDEO): Second in order on mobile, Second in order on desktop */}
        <div className="flex-1 w-full order-2 md:order-2 px-2 md:px-0">
          <div className="relative mx-auto max-w-[550px] md:max-w-none">
            {/* The Outer Wrapper: Thin border and deep shadow */}
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white pointer-events-none border border-slate-100 p-1 md:p-1.5">
              
              {/* The Inner Wrapper: Nested curve logic */}
              <div className="w-full h-full rounded-[1.2rem] md:rounded-[2.2rem] overflow-hidden aspect-video">
                <video 
                  src="/App-Dev.mp4" 
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

        {/* LEFT SIDE (DESCRIPTION & CTA): Third in order on mobile, First in order on desktop */}
        <div className="flex-1 space-y-5 md:space-y-8 text-center md:text-left order-3 md:order-1 px-2">
          {/* DESKTOP HEADER: Hidden on mobile */}
          <h1 className="hidden md:block text-3xl md:text-7xl font-black leading-tight">
            App <br /> 
            <span className="text-[#0284c7]">Development</span>
          </h1>
          
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            We specialize in creating intuitive, high-performance applications that enhance user experiences and meet the evolving needs of businesses in a competitive marketplace.
          </p>
          
          <button className="group relative bg-sky-100 text-[#0284c7] px-8 py-4 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 mx-auto md:mx-0 transition-all duration-300 hover:bg-[#0284c7] hover:text-white shadow-md active:scale-95">
            Speak to Our Expert 
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}