import Image from "next/image";

export default function Services() {
  const serviceList = [
    {
      title: "Salesforce Consulting",
      image: "/Salesforce Consulting.png",
      desc: "Unlock the full potential of your Salesforce investment with tailored consulting services, expert integrations, and comprehensive training programs.",
    },
    {
      title: "Web Development",
      image: "/web-development.png",
      desc: "We create stunning, user-friendly websites tailored to your business needs, ensuring exceptional performance, security, and scalability.",
    },
    {
      title: "Zoho Service",
      image: "/zoho-service.png",
      desc: "Unlock the full potential of your Zoho investment with tailored consulting services, expert integrations, and comprehensive training programs.",
    },
    {
      title: "App Development",
      image: "/app-development.png",
      desc: "We specialize in creating intuitive, high-performance applications that enhance user experiences and meet the evolving needs of businesses.",
    },
    {
      title: "Digital Marketing",
      image: "/digital marketing.png",
      desc: "Elevate your brand visibility with our comprehensive digital marketing services, including data-driven strategies and creative campaigns.",
    },
    {
      title: "Data Migration",
      image: "/data-migration.png",
      desc: "Ensure seamless data migration with our expert services, focusing on data integrity, security, and compliance.",
    },
    {
      title: "End-to-End Cloud Solutions",
      image: "/end-to-end-cloud solutions.png",
      desc: "At Pentacloud Consulting, we provide complete cloud solutions tailored to your business needs — from strategy and migration to deployment, optimization, and ongoing support.",
    },
  ];

  return (
    // Added a subtle radial gradient to the background to make the glass blur visible
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decorative elements for Glassmorphism depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16">
          <h2 className="text-[#38bdf8] font-black tracking-[0.2em] text-[10px] md:text-sm uppercase mb-3">
            Our Expertise
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Tailored Solutions for <br className="hidden md:block" />
            <span className="text-[#0284c7]">Modern Enterprises.</span>
          </h1>
        </div>

        {/* CSS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((service, index) => {
            const isLast = index === 6;
            
            return (
              <div
                key={index}
                // REDESIGNED: bg-white/60 + backdrop-blur + white border for depth
                className={`group p-10 bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500 hover:-translate-y-4 flex flex-col items-center text-center
                ${isLast ? "md:col-span-2 lg:col-span-3 min-w-full" : "col-span-1"}
                `}
              >
                {/* Logo Container - Made more glass-like */}
                <div className="w-full h-48 flex items-center justify-center mb-6 relative overflow-hidden rounded-3xl bg-white/40 border border-white/50 group-hover:bg-white transition-colors duration-500 shadow-inner">
                  <div className="relative w-40 h-40 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0284c7] transition-colors">
                  {service.title}
                </h3>

                <div className="flex-grow">
                  <p className={`text-slate-500 leading-relaxed text-sm md:text-base ${isLast ? "max-w-3xl" : "max-w-xs"}`}>
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 w-full">
                  {/* Button Redesign: Glassy Button */}
                  <div className="inline-block px-8 py-3 rounded-full border border-white bg-white/50 shadow-sm text-[#0284c7] font-bold text-xs uppercase tracking-widest group-hover:bg-[#0284c7] group-hover:text-white group-hover:border-[#0284c7] group-hover:shadow-lg group-hover:shadow-sky-200 transition-all duration-300 cursor-pointer">
                    Explore Service
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}