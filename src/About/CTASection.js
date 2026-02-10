export default function CTASection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6 bg-[#0081c2] p-12 rounded-[3rem] text-white shadow-2xl shadow-blue-200">
        <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Transform Your Business?</h2>
        <p className="text-white/80 text-lg mb-10">Let’s discuss how PentaCloud can help you unlock growth with smarter technology solutions.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-[#0081c2] font-black px-10 py-4 rounded-2xl hover:bg-slate-100 transition-all">Get in Touch</button>
          <button className="bg-transparent border-2 border-white text-white font-black px-10 py-4 rounded-2xl hover:bg-white/10 transition-all">Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
}