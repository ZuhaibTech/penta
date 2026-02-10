export default function ExpertiseSnapshot() {
  const skills = [
    "Salesforce Consulting", "Cloud Infrastructure", "Data Migration", 
    "Web & App Dev", "Digital Marketing", "Zoho Services"
  ];
  return (
    <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-12">What We Do Best</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <div key={skill} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-bold hover:bg-[#0081c2] transition-all cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}