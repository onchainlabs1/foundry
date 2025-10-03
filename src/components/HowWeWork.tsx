const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "Scope, inventory, provider/deployer mapping",
    },
    {
      number: "2",
      title: "Implement",
      description: "Lightweight controls & evidence in your SDLC",
    },
    {
      number: "3",
      title: "Prove",
      description: "Audit-ready documents (AIMS / Annex IV / FRIA / transparency)",
    },
    {
      number: "4",
      title: "Monitor",
      description: "PMM basics, dashboards & incident playbooks",
    },
  ];

  return (
    <section id="how" className="section-padding bg-gradient-to-br from-slate-50 to-white scroll-m-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight scroll-m-24">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-graphite mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            A proven 4-step methodology that embeds governance into your development process.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-soft-green rounded-full border-4 border-white shadow-md hidden md:block" />
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-soft-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-semibold text-navy mb-2">
                      <strong>{step.title}</strong>
                    </h4>
                    <p className="text-graphite text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;