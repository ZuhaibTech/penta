"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceList = [
    { name: "SALESFORCE CONSULTING", href: "/Services/salesforce" },
    { name: "CLOUD SOLUTIONS", href: "/CloudSolutions" },,
    { name: "WEB DEVELOPMENT", href: "/web-dev" },
    { name: "CONSULTING AND TRAINING", href: "/consulting" },
    { name: "DIGITAL MARKETING", href: "/services/digital-marketing" },
    { name: "APP DEVELOPMENT", href: "/services/app-dev" },
    { name: "DATA MIGRATION", href: "/services/data-migration" },
  ];

  return (
    <nav className="bg-brand-soft/50 backdrop-blur-md border-b border-brand-sky px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Pentacloud logo.png"
            alt="Penta Logo"
            width={160}
            height={45}
            priority
            className="object-contain w-[120px] md:w-[160px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-lg font-bold text-slate-900 hover:bg-white/50 hover:text-[#0081c2] transition-all"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="px-4 py-2 rounded-xl text-lg font-bold text-slate-900 hover:bg-white/50 hover:text-[#0081c2] transition-all"
          >
            About
          </Link>

          {/* Services Dropdown Trigger */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-lg font-bold text-slate-900 hover:bg-white/50 hover:text-[#0081c2] transition-all">
              Services
              <span
                className={`text-[10px] transition-transform duration-300 ${isServicesHovered ? "rotate-180" : ""}`}
              >
                ▲
              </span>
            </button>

            {/* The Dropdown Menu (Light Theme Box) */}
            <div
              className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden transition-all duration-300 transform origin-top ${isServicesHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              <div className="flex flex-col py-2">
                {serviceList.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="px-6 py-4 text-[11px] font-black tracking-widest text-slate-800 hover:bg-sky-50 hover:text-[#0081c2] transition-all border-b border-slate-50 last:border-0"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/Blogs"
            className="px-4 py-2 rounded-xl text-lg font-bold text-slate-900 hover:bg-white/50 hover:text-[#0081c2] transition-all"
          >
            Blogs
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-2 rounded-xl text-lg font-bold text-slate-900 hover:bg-white/50 hover:text-[#0081c2] transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden md:block bg-[#0081c2] hover:bg-[#006da3] text-white font-semibold px-6 py-2 rounded-full transition-all shadow-sm active:scale-95"
          >
            Get in touch
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900 text-2xl"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${isMenuOpen ? "max-h-[100vh] py-8 opacity-100" : "max-h-0 opacity-0"} md:hidden absolute left-0 right-0 top-full bg-white transition-all duration-500 ease-in-out overflow-hidden px-8 shadow-2xl`}
      >
        <div className="flex flex-col space-y-5">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-slate-900"
          >
            Home
          </Link>
          <Link
            href="/About"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-slate-900"
          >
            About
          </Link>

          {/* Mobile Services Toggle */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between text-xl font-bold text-slate-900 w-full text-left"
            >
              <span>Services</span>
              <span
                className={`text-sm transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {/* Conditional Mobile Services List */}
            <div
              className={`flex flex-col pl-4 space-y-4 border-l-2 border-sky-100 mt-4 transition-all duration-300 overflow-hidden ${isMobileServicesOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"}`}
            >
              {serviceList.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className="text-[12px] font-black text-slate-600 uppercase tracking-widest hover:text-[#0081c2]"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/Blogs"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-slate-900"
          >
            Blogs
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-slate-900"
          >
            Contact
          </Link>

          {/* Added Get in Touch Button for Mobile */}
          <div className="pt-6 border-t border-slate-50">
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-[#0081c2] hover:bg-[#006da3] text-white text-center font-bold px-6 py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}