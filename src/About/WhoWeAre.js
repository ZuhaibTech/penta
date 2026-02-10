"use client"; // Add this to ensure it handles client-side rendering correctly
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 space-y-6 order-2 md:order-1">
          <h2 className="text-4xl font-black text-slate-900">Who We Are</h2>
          <div className="space-y-4">
            <p className="text-slate-600 text-lg leading-relaxed">
              PentaCloud Consulting is a modern technology consulting firm helping businesses navigate digital transformation with confidence. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We specialize in Salesforce consulting, cloud solutions, data migration, and digital innovation—combining technical excellence with a human-centric approach. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team works closely with organizations to design scalable, secure, and future-ready solutions that drive real business outcomes.
            </p>
          </div>
        </div>

        {/* Right Side: Image Container */}
        <div className="md:w-1/2 order-1 md:order-2 w-full">
          <div className="relative h-[350px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white">
            <Image 
              src="/holo-earth.jpg" 
              alt="PentaCloud Consulting Team" 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0081c2]/10 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}