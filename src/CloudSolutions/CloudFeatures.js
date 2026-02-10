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
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cloudItems.map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              {/* Number Circle */}
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#0284c7] transition-colors duration-300">
                <span className="text-[#0284c7] font-bold text-sm md:text-lg group-hover:text-white">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-base md:text-xl font-black text-slate-900 mb-2 md:mb-4 group-hover:text-[#0284c7] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[11px] md:text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}