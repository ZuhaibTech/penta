"use client";
import React from "react";
import Image from "next/image";

export default function Services() {
  const serviceList = [
    {
      title: "Salesforce Consulting",
      image: "/Salesforce Consulting.png",
      desc: "Unlock the full potential of your Salesforce investment with tailored consulting services, expert integrations, and comprehensive training programs.",
    },
    {
      title: "Web Development",
      image: "/web-development.png",
      desc: "We create stunning, user-friendly websites tailored to your business needs, ensuring exceptional performance, security, and scalability.",
    },
    {
      title: "Zoho Service",
      image: "/zoho-service.png",
      desc: "Unlock the full potential of your Zoho investment with tailored consulting services, expert integrations, and comprehensive training programs.",
    },
    {
      title: "App Development",
      image: "/app-development.png",
      desc: "We specialize in creating intuitive, high-performance applications that enhance user experiences and meet the evolving needs of businesses.",
    },
    {
      title: "Digital Marketing",
      image: "/digital marketing.png",
      desc: "Elevate your brand visibility with our comprehensive digital marketing services, including data-driven strategies and creative campaigns.",
    },
    {
      title: "Data Migration",
      image: "/data-migration.png",
      desc: "Ensure seamless data migration with our expert services, focusing on data integrity, security, and compliance.",
    },
    {
      title: "End-to-End Cloud Solutions",
      image: "/end-to-end-cloud solutions.png",
      desc: "At Pentacloud Consulting, we provide complete cloud solutions tailored to your business needs — from strategy and migration to deployment, optimization, and ongoing support.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decorative elements - Increased size and blur for better glass refraction */}
      <div className="absolute top-[-5%] left-[10%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#0284c7] rounded-full" />
            <h2 className="text-[#0284c7] font-black tracking-[0.2em] text-[10px] md:text-sm uppercase">
              Our Expertise
            </h2>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Tailored Solutions for <br className="hidden md:block" />
            <span className="text-[#0284c7]">Modern Enterprises.</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {serviceList.map((service, index) => {
            const isLast = index === 6;
            
            return (
              <div
                key={index}
                className={`group relative p-8 md:p-10 bg-white/40 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3.5rem] border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(2,132,199,0.12)] transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center
                ${isLast ? "md:col-span-2 lg:col-span-3" : "col-span-1"}
                `}
              >
                {/* Subtle Internal Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[inherit] pointer-events-none" />

                {/* Logo Container - Double Glass Effect */}
                <div className="w-full h-48 flex items-center justify-center mb-8 relative overflow-hidden rounded-[2rem] bg-white/50 border border-white/60 group-hover:bg-white/80 transition-all duration-500 shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)] group-hover:shadow-lg">
                  <div className="relative w-36 h-36 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0284c7] transition-colors relative z-10">
                  {service.title}
                </h3>

                <div className="flex-grow relative z-10">
                  <p className={`text-slate-500 leading-relaxed text-sm md:text-base mx-auto ${isLast ? "max-w-2xl" : "max-w-xs"}`}>
                    {service.desc}
                  </p>
                </div>

                {/* Button Area */}
                <div className="mt-8 w-full relative z-10">
                  <div className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-white bg-white/60 shadow-sm text-[#0284c7] font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all duration-300 group-hover:bg-[#0284c7] group-hover:text-white group-hover:border-[#0284c7] group-hover:shadow-xl group-hover:shadow-blue-200/50 cursor-pointer overflow-hidden relative">
                    {/* Shimmer on button hover */}
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                    Explore Service
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}