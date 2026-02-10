export default function WhyChooseUs() {
  const points = [
    "Certified Salesforce & Cloud Experts",
    "End-to-End Consulting (Strategy → Execution → Support)",
    "Industry-focused Solutions (Not one-size-fits-all)",
    "Agile & Transparent Delivery Process",
    "Human-first approach backed by AI innovation"
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-12">Why Businesses Choose PentaCloud</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {points.map((pt, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-sky-50 transition-colors">
              <span className="text-[#0081c2] font-bold text-xl">✔</span>
              <p className="font-bold text-slate-700">{pt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}