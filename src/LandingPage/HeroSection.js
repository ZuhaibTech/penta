"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["PENTACLOUD", "SALESFORCE CONSULTING"];

  // Scroll listener for the brain movement
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white px-6 py-12">
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* 1. Header Area */}
        <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            REDEFINING TECHNOLOGY WITH <span className="text-[#38bdf8]">AI BRILLIANCE</span> & HUMAN TOUCH
          </h1>
          
          {/* Typing Animation Subtext */}
          <div className="mt-4 h-8">
            <p className="text-xl md:text-2xl font-bold text-[#0284c7] tracking-widest uppercase">
              {text}
              <span className="animate-pulse border-r-2 border-[#0284c7] ml-1"></span>
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 2. Glassy Card */}
          <div className="flex justify-center lg:justify-start order-3 lg:order-1">
            <div className="relative group">
              <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-6 md:p-8 flex items-center gap-6">
                <div className="flex items-end gap-1.5 h-16">
                  <div className="w-2.5 h-[40%] bg-slate-200 rounded-full" />
                  <div className="w-2.5 h-[60%] bg-slate-300 rounded-full" />
                  <div className="w-2.5 h-[80%] bg-[#38bdf8] rounded-full" />
                  <div className="w-2.5 h-[100%] bg-[#0284c7] rounded-full" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">10x</h3>
                  <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                    Growth in <br/> Client Success
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Interaction Area */}
          <div className="relative flex justify-center items-center order-2 lg:order-2">
            {/* Desktop Brain (Moves on scroll) */}
            <div 
              style={{ 
                transform: `translateX(-${offset * 0.4}px)`,
                transition: "transform 0.1s ease-out" 
              }}
              className="hidden lg:block relative z-10 w-full max-w-[450px]"
            >
              <Image 
                src="/penta-brain.png" 
                alt="Penta Brain" 
                width={500} 
                height={500} 
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* GET STARTED Button: Centered on mobile, absolute on desktop */}
            <div className="lg:absolute lg:-right-4 lg:bottom-12 z-20">
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-[#E0F7FF] shadow-2xl shadow-sky-200/50 border-[6px] border-white flex flex-col items-center justify-center text-center p-5 cursor-pointer hover:scale-110 transition-transform">
                <span className="text-xs md:text-sm font-black border-b-2 border-slate-900 mb-2">GET STARTED</span>
                <span className="text-[9px] md:text-[11px] font-bold text-slate-600 leading-tight">Empower your business with Salesforce</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[120px] -z-10" />
    </section>
  );
}