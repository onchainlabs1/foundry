"use client";

const Services = () => {
  const services = [
    {
      title: "Readiness Sprint (2–3 weeks)",
      bullets: [
        "Inventory of AI systems",
        "Risk classification",
        "Gap analysis",
        "Roadmap by legal deadlines"
      ],
    },
    {
      title: "ISO/IEC 42001 AIMS Kickstart (8–12 weeks)",
      bullets: [
        "Policies & RACI",
        "Risk & controls",
        "Internal audit",
        "Training & adoption"
      ],
    },
    {
      title: "High-Risk Conformity (Annex IV & CE readiness)",
      bullets: [
        "QMS",
        "Technical documentation",
        "Testing & evaluation",
        "Human oversight"
      ],
    },
    {
      title: "GPAI Transparency Pack",
      bullets: [
        "Code of Practice alignment",
        "Transparency reports",
        "Model & data documentation"
      ],
    },
    {
      title: "Post-Market Monitoring & Incidents",
      bullets: [
        "KPIs, drift/bias",
        "Serious-incident playbooks",
        "Continuous improvement"
      ],
    },
  ];

  const handleCTAClick = () => {
    window.dispatchEvent(new CustomEvent("track", { detail: { name: "cta_click", type: "services" } }));
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight">
            Services
          </h2>
          <p className="text-lg md:text-xl text-graphite mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive AI governance solutions tailored to your compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 p-8 border border-white/30">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-soft-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-navy mb-6 group-hover:text-soft-green transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start group/item">
                      <div className="relative mr-4 mt-1">
                        <svg
                          className="w-5 h-5 text-soft-green group-hover/item:scale-110 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 w-5 h-5 bg-soft-green/20 rounded-full animate-ping opacity-0 group-hover/item:opacity-100" />
                      </div>
                      <span className="text-graphite text-sm leading-relaxed group-hover/item:text-navy transition-colors duration-300">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCTAClick}
                  className="group/btn w-full relative bg-white/30 backdrop-blur-md border border-white/40 text-navy px-6 py-3 rounded-xl font-semibold hover:bg-white/50 hover:scale-105 transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  <span className="relative z-10">Let's talk</span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;