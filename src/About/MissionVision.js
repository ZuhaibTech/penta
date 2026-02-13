import React from 'react';
// 1. Import Lucide icons
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Mission Card */}
        <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md group">
          {/* Icon Container with subtle background hover effect */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
            <Target className="w-6 h-6 md:w-8 md:h-8 text-[#0284c7]" strokeWidth={2.5} />
          </div>
          
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-4">Our Mission</h3>
          <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
            To empower businesses with intelligent, scalable, and secure technology solutions that simplify complexity and accelerate growth.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md group">
          {/* Icon Container */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
            <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#0284c7]" strokeWidth={2.5} />
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-4">Our Vision</h3>
          <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
            To become a globally trusted technology partner, redefining how businesses leverage cloud, AI, and data for long-term success.
          </p>
        </div>

      </div>
    </section>
  );
}