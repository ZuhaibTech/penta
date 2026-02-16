export default function NumbersMatter() {
  const stats = [
    { label: "Active Clients", val: "10+" },
    { label: "Projects Delivered", val: "3+" },
    { label: "Skilled Professionals", val: "25+" },
    { label: "Global Offices", val: "12+" }
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <h3 className="text-4xl font-black text-[#0081c2]">{s.val}</h3>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}