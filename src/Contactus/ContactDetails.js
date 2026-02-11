import React from 'react';

export default function ContactDetails() {
  const infoCards = [
    { 
        icon: "📞", 
        title: "Support", 
        desc: "Available 24/7 for technical assistance and troubleshooting.", 
        contact: "+1 (800) PENTA-TECH" 
    },
    { 
        icon: "🤝", 
        title: "Partnerships", 
        desc: "Let's grow together. Join our global ecosystem of innovators.", 
        contact: "partners@pentacloud.com" 
    },
    { 
        icon: "💼", 
        title: "Careers", 
        desc: "Ready to change the world? View our open positions today.", 
        contact: "careers.pentacloud.com" 
    }
  ];

  return (
    <section className="pb-24 pt-10 md:pt-20 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {infoCards.map((card, index) => (
          <div key={index} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center space-y-5 hover:shadow-xl hover:bg-white transition-all duration-300">
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{card.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
            <p className="text-[#0081c2] font-black pt-2">{card.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}