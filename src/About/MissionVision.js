export default function MissionVision() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Mission Card */}
        <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
          <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">🎯</span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-4">Our Mission</h3>
          <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
            To empower businesses with intelligent, scalable, and secure technology solutions that simplify complexity and accelerate growth.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
          <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">🌍</span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-4">Our Vision</h3>
          <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
            To become a globally trusted technology partner, redefining how businesses leverage cloud, AI, and data for long-term success.
          </p>
        </div>

      </div>
    </section>
  );
}