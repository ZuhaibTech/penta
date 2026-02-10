export default function OurApproach() {
  const steps = [
    { t: "Discover", d: "Understand business goals & challenges" },
    { t: "Design", d: "Craft tailored, scalable solutions" },
    { t: "Deliver", d: "Agile execution with continuous feedback" },
    { t: "Optimize", d: "Ongoing support & performance improvement" }
  ];
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-12">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl relative">
              <span className="absolute top-4 right-6 text-5xl font-black text-slate-50">{i + 1}</span>
              <h3 className="text-xl font-black text-[#0081c2] mb-2">{step.t}</h3>
              <p className="text-sm text-slate-600">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}