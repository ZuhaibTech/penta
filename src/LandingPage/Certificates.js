"use client";
import React, { useState, useEffect } from "react";

export default function Certificates() {
  const [mounted, setMounted] = useState(false);

  // UseEffect ensures this code only runs on the client-side
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

  const CertificateBox = ({ cert }) => (
    <div className="flex-shrink-0 w-32 h-20 md:w-72 md:h-40 bg-white border border-slate-100 rounded-lg md:rounded-2xl p-2.5 md:p-6 shadow-sm hover:shadow-xl hover:border-[#38bdf8]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer mx-1.5 md:mx-4 group relative overflow-hidden">
      <div className="absolute -right-3 -bottom-3 w-6 h-6 md:w-16 md:h-16 bg-sky-50 rounded-full group-hover:scale-[5] transition-transform duration-700 -z-10" />
      
      <div>
        <div className="w-3 h-0.5 md:w-8 md:h-1 bg-[#38bdf8] mb-1 md:mb-3 rounded-full" />
        <h3 className="text-[9px] md:text-md font-bold text-slate-800 leading-tight group-hover:text-[#0284c7] line-clamp-2">
          {cert.title}
        </h3>
      </div>
      
      <span className="text-[6px] md:text-[10px] font-black text-slate-400 uppercase tracking-wider">
        {cert.org}
      </span>
    </div>
  );

  // FIX: Hydration Error Prevention
  // We return a simple spacer or null until mounted to ensure SSR matches Client
  if (!mounted) {
    return <div className="py-10 md:py-24 bg-white min-h-[400px]" />;
  }

  return (
    <section className="py-10 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[#38bdf8] font-black tracking-[0.2em] text-[10px] md:text-sm uppercase mb-2">
            PENTACLOUD CERTIFICATIONS
          </h2>
          <h1 className="text-xl md:text-5xl font-black text-slate-900 leading-tight max-w-2xl">
            Your Badge of <span className="text-[#0284c7]">Trust and Expertise.</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-8">
        {/* Row 1 */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...firstRow, ...firstRow].map((cert, i) => (
              <CertificateBox key={`row1-${i}-${cert.id}`} cert={cert} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...secondRow, ...secondRow].map((cert, i) => (
              <CertificateBox key={`row2-${i}-${cert.id}`} cert={cert} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}