import React from 'react';

export default function CloudFeatures() {
  const cloudItems = [
    { 
      title: "Cloud & Data Center Architecture", 
      desc: "Design & build custom datacenters, hybrid cloud, private/hybrid/public infrastructure." 
    },
    { 
      title: "Startup Infrastructure Enablement", 
      desc: "Rapid setup of secure, scalable environments: VM provisioning, , SRE , pipelines, monitoring, costoptimisation." 
    },
    { 
      title: "AI & Automation Solutions", 
      desc: "AI model deployment, automation workflows (Power Automate, scheduling, data pipelines), integration services." 
    },
    { 
      title: "DevOps & Security", 
      desc: "Infrastructure as Code, network/subnet/VPC design, private endpoints, secure DNS, AD/AD DS integration." 
    },
    { 
      title: "MSP & Break-Fix Support", 
      desc: "Proactive Managed Services: patching, monitoring, helpdesk & SLA-driven support. Rapid break-fix response to minimize downtime" 
    },
    { 
      title: "Cyber Security", 
      desc: "End-to-end protection for digital assets: VAPT Assessments – Penetration testing & hardening, GRC Compliance – ISO, NIST, GDPR, HIPAA." 
    },
    { 
      title: "Turnkey Cloud Solutions", 
      desc: "AI model deployment, automation workflows (Power Automate, scheduling, data pipelines), integration services." 
    },
    { 
      title: "System Integration & DC Partnerships", 
      desc: "Deep partnerships with leading datacenters to deliver seamless infrastructure integrations and DC engagement models." 
    },
    { 
      title: "Networking & IT Overhaul", 
      desc: "Active-Active & Active-Passive designs, SDN-based enterprise networks, firewalling, and full datacenter IT modernization projects." 
    }
  ];

  return (
    <section className="relative py-12 md:py-24 bg-[#f1f5f9] px-4 md:px-6 overflow-hidden">
      {/* Ambient Glass Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cloudItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative"
            >
              {/* Glass Card Container */}
              <div className="h-full bg-white/40 backdrop-blur-xl border border-white/60 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:shadow-[0_20px_60px_rgba(2,132,199,0.15)] hover:bg-white/60 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                
                {/* Number Circle with Glass Pop */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 md:mb-8 
                                group-hover:bg-[#0284c7] group-hover:scale-110 group-hover:rotate-6 
                                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <span className="text-[#0284c7] font-black text-sm md:text-xl group-hover:text-white transition-colors duration-300">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                </div>
                
                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight group-hover:text-[#0284c7] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[12px] md:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Internal Glow */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}