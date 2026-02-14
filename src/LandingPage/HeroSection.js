"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CloudUpload, Bot, UserCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const container = useRef(); 
  
  // --- Existing Typing Logic ---
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ["PENTACLOUD", "SALESFORCE CONSULTING"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
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

  // --- GSAP Animation Logic ---
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    gsap.set(".gsap-line", { y: 100, opacity: 0 });
    gsap.set([".gsap-reveal-sub", ".gsap-video", ".gsap-badge"], { opacity: 0, y: 30 });

    tl.to(".gsap-line", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
    })
    .to(".gsap-reveal-sub", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
    }, "-=0.6") 
    .from(".gsap-border", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1,
    }, "-=0.4")
    .to(".gsap-video", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.2)",
    }, "-=0.8")
    .to(".gsap-badge", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
    }, "-=0.5");

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[85vh] flex items-center bg-white px-6 pt-24 pb-12 md:pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-5 text-left order-1">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase overflow-hidden">
              <span className="gsap-line block">Redefining Technology</span>
              <span className="gsap-line block text-[#38bdf8]">With AI Brilliance</span>
              <span className="gsap-line block">& Human Touch</span>
            </h1>
            
            <div className="gsap-reveal-sub h-8">
              <p className="text-lg md:text-2xl font-bold text-[#0284c7] tracking-[0.1em] md:tracking-[0.2em]">
                {text}<span className="animate-pulse border-r-2 border-[#0284c7] ml-1"></span>
              </p>
            </div>
          </div>

          <p className="gsap-reveal-sub gsap-border text-sm md:text-lg text-slate-600 font-medium max-w-lg leading-relaxed border-l-4 border-[#38bdf8] pl-5 py-1">
            Empower your business with Salesforce. We bridge the gap between complex tech and human-centric solutions.
          </p>

          <div className="gsap-reveal-sub pt-2">
            <Link href="/contactus" className="inline-block bg-[#0081c2] hover:bg-[#006da3] text-white text-xs md:text-sm font-bold px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-wider">
              Get Started
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex flex-col items-center order-2 mt-8 lg:mt-0">
          <div className="gsap-video relative z-10 w-full max-w-[400px] md:max-w-[460px] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-white pointer-events-none" style={{transform: "scale(0.8)"}}>
            <video autoPlay loop muted playsInline disablePictureInPicture className="w-full h-auto object-cover scale-105">
              <source src="/penta-brain.mp4" type="video/mp4" />
            </video>
          </div>

          {/* INCREASED TOP MARGIN (mt-16 md:mt-24) to bring them down */}
          <div className="w-full max-w-[500px] mt-16 md:mt-24 grid grid-cols-3 gap-2 pointer-events-none">
             
             {/* Cloud Migration */}
             <div className="gsap-badge flex flex-col items-center animate-float">
                <div className="bg-white p-3 rounded-full shadow-lg border border-sky-50 mb-2 hover:scale-125 hover:rotate-12 transition-all duration-300 pointer-events-auto flex items-center justify-center group">
                  <CloudUpload className="w-5 h-5 md:w-6 md:h-6 text-[#0284c7] group-hover:text-[#38bdf8]" strokeWidth={2.5} />
                </div>
                <p className="text-[8px] md:text-[10px] font-black text-slate-800 text-center leading-tight uppercase">
                  Cloud Migration<br/><span className="text-slate-400 font-bold lowercase block">seamless transfer</span>
                </p>
             </div>

             {/* AI Implementation */}
             <div className="gsap-badge flex flex-col items-center translate-y-3 md:translate-y-5 animate-float [animation-delay:0.5s]">
                <div className="bg-white p-3 rounded-full shadow-lg border border-sky-50 mb-2 hover:scale-125 hover:-rotate-12 transition-all duration-300 pointer-events-auto flex items-center justify-center group">
                  <Bot className="w-5 h-5 md:w-6 md:h-6 text-[#0284c7] group-hover:text-[#38bdf8]" strokeWidth={2.5} />
                </div>
                <p className="text-[8px] md:text-[10px] font-black text-slate-800 text-center leading-tight uppercase">
                  AI Implementation<br/><span className="text-slate-400 font-bold lowercase block">smart automation</span>
                </p>
             </div>

             {/* Human-Centric */}
             <div className="gsap-badge flex flex-col items-center animate-float [animation-delay:1s]">
                <div className="bg-white p-3 rounded-full shadow-lg border border-sky-50 mb-2 hover:scale-125 hover:rotate-12 transition-all duration-300 pointer-events-auto flex items-center justify-center group">
                  <UserCheck className="w-5 h-5 md:w-6 md:h-6 text-[#0284c7] group-hover:text-[#38bdf8]" strokeWidth={2.5} />
                </div>
                <p className="text-[8px] md:text-[10px] font-black text-slate-800 text-center leading-tight uppercase">
                    Human-Centric<br/><span className="text-slate-400 font-bold lowercase block">user focused</span>
                </p>
             </div>

          </div>
        </div>
      </div>

      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] -z-10" />
    </section>
  );
}