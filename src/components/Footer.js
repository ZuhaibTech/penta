"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Added Link for routing
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  // Navigation list mapped to your Navbar links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/contactus" }, 
    { name: "Blogs", href: "/Blogs" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <footer className="relative bg-[#0a0f1a] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Image 
                src="/Pentacloud logo.png" 
                alt="Penta Logo" 
                width={160} 
                height={50} 
                className="brightness-0 invert object-contain" 
              />
              
              <p className="text-[#38bdf8] italic text-sm font-medium tracking-wide">
                "Journey Towards Success"
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Transforming organizations through digital excellence and workforce alignment for maximum impact.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0284c7] hover:border-[#0284c7] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links - UPDATED WITH NAVBAR LINKS */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#38bdf8] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white hover:translate-x-2 flex items-center gap-2 transition-all duration-300 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Office Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Office
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#38bdf8] rounded-full"></span>
            </h4>
            <div className="space-y-5 text-slate-400 text-sm">
              <div className="flex gap-3">
                <MapPin size={20} className="text-[#38bdf8] shrink-0" />
                <p className="leading-relaxed">
                  Jagan Arcade, 4th Floor, 1st main Road, Post, Anandnagar, RT Nagar, Bengaluru, Karnataka 560032
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#38bdf8] shrink-0" />
                <p>+971 545132807</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#38bdf8] shrink-0" />
                <p className="break-all">contactus@pentacloudconsulting.com</p>
              </div>
            </div>
          </div>

          {/* 4. Newsletter Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#38bdf8] rounded-full"></span>
            </h4>
            <p className="text-slate-400 text-sm mb-6">Stay updated with our latest insights and services.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 outline-none focus:border-[#38bdf8] transition-all text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#0284c7] hover:bg-[#38bdf8] text-white px-5 rounded-full transition-all group">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 text-center md:text-left w-full md:w-auto">
            © 2026 PentaCloud Consulting. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Link href="/privacy" className="hover:text-[#38bdf8]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#38bdf8]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}