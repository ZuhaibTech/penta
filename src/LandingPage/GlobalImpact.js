import Image from "next/image";

export default function GlobalImpact() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#000814]">
      
      {/* 1. BACKGROUND THEME LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Main Earth Image */}
        <Image
          src="/earth-bg 1.png"
          alt="Global Network"
          fill
          className="object-cover opacity-80 mix-blend-lighten"
          priority
        />
        
        {/* LIGHTER BLUE THEME OVERLAYS */}
        {/* Deep Blue base glow */}
        <div className="absolute inset-0 bg-[#0284c7]/20 mix-blend-overlay" />
        
        {/* Radial glow from the center (The Blue Theme Atmosphere) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#38bdf8]/30 via-[#0284c7]/10 to-transparent" />
        
        {/* Top and Bottom vignetting to blend with other sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000814] via-transparent to-[#000814]" />
      </div>

      {/* 2. DECORATIVE ELEMENTS (Floating blue blurs for depth) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#38bdf8]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-[120px] animate-pulse" />

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col items-center text-center">
          
          <div className="bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-[#38bdf8] font-black tracking-[0.3em] text-[10px] uppercase">
              Global Presence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Connecting Businesses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#60a5fa]">
              Across the Globe.
            </span>
          </h1>
          
          <p className="text-blue-100/70 max-w-2xl text-lg md:text-xl leading-relaxed mb-16 font-light">
            We bridge the gap between complex cloud infrastructure and 
            seamless business growth on a global scale.
          </p>

          {/* Stats Grid - Glassy look to match Blue Theme */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-5xl">
            {[
              { label: "Active Clients", value: "200+" },
              { label: "Global Offices", value: "05+" },
              { label: "Projects Done", value: "500+" },
              { label: "Expert Workers", value: "150+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-[#38bdf8]/10 transition-all duration-300">
                <span className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </span>
                <span className="text-[#38bdf8] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}