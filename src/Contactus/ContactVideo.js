import React from 'react';

export default function ContactVideo() {
  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Video Container with premium curves and shadow */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-1 md:p-1.5 bg-white">
          <div className="rounded-[1.8rem] md:rounded-[2.8rem] overflow-hidden aspect-video">
            <video 
              src="/Earthholo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}