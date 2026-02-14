"use client";
import React, { useState, useEffect } from "react";
import { Award } from "lucide-react"; // Import Lucide Icon

export default function Certificates() {
  const [mounted, setMounted] = useState(false);

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
    <div className="flex-shrink-0 w-36 h-24 md:w-80 md:h-44 bg-white border border-slate-100 rounded-lg md:rounded-2xl p-3 md:p-7 shadow-sm hover:shadow-xl hover:border-[#38bdf8]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 cursor-pointer mx-2 md:mx-4 group relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -right-3 -bottom-3 w-8 h-8 md:w-20 md:h-20 bg-sky-50 rounded-full group-hover:scale-[5] transition-transform duration-700 -z-10" />
      
      <div className="flex flex-col gap-2">
        {/* Top Accent: Bar + Icon */}
        <div className="flex justify-between items-start">
           <div className="w-4 h-0.5 md:w-10 md:h-1.5 bg-[#38bdf8] rounded-full shrink-0" />
           <Award className="w-3 h-3 md:w-6 md:h-6 text-[#38bdf8] opacity-20 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Title: Increased text size for desktop (text-lg) */}
        <h3 className="text-[10px] md:text-lg font-black text-slate-800 leading-tight group-hover:text-[#0284c7] whitespace-normal break-words mt-1">
          {cert.title}
        </h3>
      </div>
      
      {/* Organization: Bolder and slightly larger */}
      <span className="text-[7px] md:text-xs font-black text-slate-400 group-hover:text-slate-600 uppercase tracking-wider">
        {cert.org}
      </span>
    </div>
  );

  if (!mounted) return <div className="py-10 bg-white min-h-[400px]" />;

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

      {/* MOBILE VIEW */}
      <div className="flex md:hidden overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...certs, ...certs].map((cert, i) => (
            <CertificateBox key={`mobile-${i}`} cert={cert} />
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...firstRow, ...firstRow].map((cert, i) => (
              <CertificateBox key={`row1-${i}`} cert={cert} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-4">
            {[...secondRow, ...secondRow].map((cert, i) => (
              <CertificateBox key={`row2-${i}`} cert={cert} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}