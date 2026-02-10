import Image from "next/image";

export default function Services() {
  const serviceList = [
    {
      title: "Salesforce Consulting",
      image: "/Salesforce Consulting.png",
      desc: "Optimize your business processes with expert Salesforce implementation and strategy.",
    },
    {
      title: "End-to-End Cloud Solutions",
      image: "/end-to-end-cloud solutions.png",
      desc: "Complete cloud infrastructure management from migration to ongoing optimization.",
    },
    {
      title: "Data Migration",
      image: "/data-migration.png",
      desc: "Secure and seamless transition of your critical business data across platforms.",
    },
    {
      title: "Web Development",
      image: "/web-development.png",
      desc: "Building high-performance, scalable websites tailored to your brand identity.",
    },
    {
      title: "App Development",
      image: "/app-development.png",
      desc: "Custom mobile and desktop applications designed for superior user experience.",
    },
    {
      title: "Digital Marketing",
      image: "/digital marketing.png",
      desc: "Data-driven strategies to increase your online presence and customer engagement.",
    },
    {
      title: "Zoho Service",
      image: "/zoho-service.png",
      desc: "Comprehensive support and customization for the entire Zoho ecosystem.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16">
          <h2 className="text-[#38bdf8] font-black tracking-[0.2em] text-[10px] md:text-sm uppercase mb-3">
            Our Expertise
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Tailored Solutions for <br className="hidden md:block"/>
            <span className="text-[#0284c7]">Modern Enterprises.</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className={`group p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-sky-200/40 transition-all duration-500 hover:-translate-y-4 flex flex-col items-center text-center
              ${index === 6 ? "lg:col-start-2" : ""}
              `}
            >
              {/* Logo Container */}
              <div className="w-full h-48 flex items-center justify-center mb-6 relative overflow-hidden rounded-2xl bg-slate-50/50 group-hover:bg-white transition-colors duration-500">
                <div className="relative w-40 h-40 transition-transform duration-500 group-hover:scale-110">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0284c7] transition-colors">
                {service.title}
              </h3>
              
              {/* Description Wrapper - helps maintain vertical flow */}
              <div className="flex-grow">
                <p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-xs">
                  {service.desc}
                </p>
              </div>

              {/* Action Button - NOW PERFECTLY ALIGNED AT THE BOTTOM */}
              <div className="mt-8 w-full">
                <div className="inline-block px-8 py-3 rounded-full border border-slate-200 text-[#0284c7] font-bold text-xs uppercase tracking-widest group-hover:bg-[#0284c7] group-hover:text-white group-hover:border-[#0284c7] transition-all duration-300 cursor-pointer">
                  Explore Service
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}