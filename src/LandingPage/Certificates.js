"use client";
import React, { useState, useEffect, useRef } from "react";
import { Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Certificates() {
  const [mounted, setMounted] = useState(false);
  const container = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  const certs = [
    { id: 1, title: "Salesforce Administrator", org: "Salesforce" },
    { id: 2, title: "Platform App Builder", org: "Salesforce" },
    { id: 3, title: "Sales Cloud Consultant", org: "Salesforce" },
    { id: 4, title: "Service Cloud Consultant", org: "Salesforce" },
    { id: 5, title: "MuleSoft Developer", org: "MuleSoft" },
    { id: 6, title: "Tableau Desktop Specialist", org: "Tableau" },
    { id: 7, title: "Experience Cloud Consultant", org: "Salesforce" },
    { id: 8, title: "Marketing Cloud Email Specialist", org: "Salesforce" },
    { id: 9, title: "Data Cloud Consultant", org: "Salesforce" },
    { id: 10, title: "CPQ Specialist", org: "Salesforce" },
    { id: 11, title: "Field Service Consultant", org: "Salesforce" },
    { id: 12, title: "OmniStudio Developer", org: "Salesforce" },
    { id: 13, title: "Integration Architecture", org: "Salesforce" },
    { id: 14, title: "Sharing and Visibility Designer", org: "Salesforce" },
    { id: 15, title: "Identity and Access Management", org: "Salesforce" },
    { id: 16, title: "B2C Commerce Developer", org: "Salesforce" },
  ];

  const firstRow = certs.slice(0, 8);
  const secondRow = certs.slice(8, 16);

  useGSAP(() => {
    if (!mounted) return;

    gsap.from(".gsap-reveal-header", {
      scrollTrigger: {
        trigger: ".gsap-reveal-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".gsap-reveal-row", {
      scrollTrigger: {
        trigger: ".gsap-reveal-row",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.95,
      y: 30,
      duration: 1.2,
      stagger: 0.3,
      ease: "expo.out",
    });

  }, { scope: container, dependencies: [mounted] });

  const CertificateBox = ({ cert }) => (
    <div className={`
      flex-shrink-0 mx-2 md:mx-4 group relative overflow-hidden transition-all duration-500 cursor-pointer
      /* Mobile Styles (Normal) */
      w-36 h-24 bg-white border border-slate-100 rounded-lg p-3 shadow-sm
      /* Desktop Styles (Glassy) */
      md:w-80 md:h-44 md:bg-white/40 md:backdrop-blur-md md:border-white/60 md:rounded-2xl md:p-7 md:shadow-[0_8px_32px_0_rgba(2,132,199,0.08)]
      /* Hover Effects */
      hover:-translate-y-2 hover:shadow-xl md:hover:bg-white/60 md:hover:border-[#38bdf8]/50
    `}>
      {/* Background Pulse Effect - only visible on hover */}
      <div className="absolute -right-3 -bottom-3 w-8 h-8 md:w-24 md:h-24 bg-sky-50/50 rounded-full group-hover:scale-[5] transition-transform duration-700 -z-10" />
      
      <div className="flex flex-col gap-2 relative z-10">
        <div className="flex justify-between items-start">
           <div className="w-4 h-0.5 md:w-12 md:h-1.5 bg-[#38bdf8] rounded-full shrink-0" />
           <Award className="w-3 h-3 md:w-6 md:h-6 text-[#38bdf8] opacity-20 group-hover:opacity-100 transition-opacity" />
        </div>
        <h3 className="text-[10px] md:text-xl font-black text-slate-800 leading-tight group-hover:text-[#0284c7] whitespace-normal break-words mt-1">
          {cert.title}
        </h3>
      </div>
      
      <div className="relative z-10">
        <span className="text-[7px] md:text-xs font-black text-slate-400 group-hover:text-slate-600 uppercase tracking-wider">
          {cert.org}
        </span>
      </div>
    </div>
  );

  if (!mounted) return <div className="py-10 bg-white min-h-[400px]" />;

  return (
    <section ref={container} className="py-10 md:py-24 bg-white overflow-hidden relative">
      {/* Desktop Background Decorative Orbs - Enhances Glassy Look */}
      <div className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] -z-0" />
      <div className="hidden md:block absolute bottom-0 right-1/4 w-96 h-96 bg-sky-50/50 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="gsap-reveal-header text-[#38bdf8] font-black tracking-[0.2em] text-[10px] md:text-sm uppercase mb-2">
            PENTACLOUD CERTIFICATIONS
          </h2>
          <h1 className="gsap-reveal-header text-xl md:text-5xl font-black text-slate-900 leading-tight max-w-2xl">
            Your Badge of <span className="text-[#0284c7]">Trust and Expertise.</span>
          </h1>
        </div>
      </div>

      {/* MOBILE VIEW (Original) */}
      <div className="gsap-reveal-row flex md:hidden overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...certs, ...certs].map((cert, i) => (
            <CertificateBox key={`mobile-${i}`} cert={cert} />
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (Glassy) */}
      <div className="hidden md:flex flex-col gap-10 relative z-10">
        {/* Row 1 */}
        <div className="gsap-reveal-row flex overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap py-6">
            {[...firstRow, ...firstRow].map((cert, i) => (
              <CertificateBox key={`row1-${i}`} cert={cert} />
            ))}
          </div>
          {/* Soft Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/40 to-transparent z-20 pointer-events-none" />
        </div>

        {/* Row 2 */}
        <div className="gsap-reveal-row flex overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-6">
            {[...secondRow, ...secondRow].map((cert, i) => (
              <CertificateBox key={`row2-${i}`} cert={cert} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/40 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}