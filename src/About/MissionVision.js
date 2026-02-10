export default function MissionVision() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <span className="text-4xl mb-4 block">🎯</span>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
          <p className="text-slate-600 leading-relaxed">To empower businesses with intelligent, scalable, and secure technology solutions that simplify complexity and accelerate growth.</p>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <span className="text-4xl mb-4 block">🌍</span>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
          <p className="text-slate-600 leading-relaxed">To become a globally trusted technology partner, redefining how businesses leverage cloud, AI, and data for long-term success.</p>
        </div>
      </div>
    </section>
  );
}