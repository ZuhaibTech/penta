import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section: About Title (Now Visible and Blue) */}
        <div className="relative mb-4">
          <h2 className="text-6xl md:text-7xl font-black text-[#0081c2] uppercase tracking-tight select-none opacity-100">
            About
          </h2>
        </div>

        {/* Main Content: Split Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start mb-16">
          
          {/* Left Side: Main Headline */}
          <div className="lg:w-3/5">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              PentaCloud: Your Modern-Day Technology Partner for innovative 
              <span className="text-[#0081c2]"> Salesforce solutions</span> and 
              seamless business transformation.
            </h1>
          </div>

          {/* Right Side: Description Text & Button */}
          <div className="lg:w-2/5 space-y-8">
            <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-[#0081c2] pl-6 py-2">
              We provide services designed to make your business operations 
              more efficient & effective from IT consulting & data management.
            </p>
            
            <button className="bg-[#0081c2] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-[#006da3] transition-all transform active:scale-95 uppercase tracking-wide text-sm">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Image Section: Placed Below */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
          <Image 
            src="/About-Penta.png" 
            alt="PentaCloud Team" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          
          {/* Glassmorphism Overlay on Image (Matched to image_a7a4e1.jpg) */}
          <div className="absolute bottom-6 left-6 max-w-sm p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hidden md:block">
            <h4 className="text-[#0081c2] font-black text-xl mb-1">PentaCloud</h4>
            <p className="text-slate-700 text-sm font-medium leading-snug">
              // Your Modern-Day Technology Partner <br />
              Expert Salesforce implementation & global strategy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}