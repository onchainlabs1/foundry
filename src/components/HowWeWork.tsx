const HowWeWork = () => {
  const tracks = [
    {
      title: "Governance",
      subtitle: "ISO/IEC 42001",
      description: "Comprehensive AI management system implementation",
    },
    {
      title: "Technical Evidence",
      subtitle: "Annex IV",
      description: "Technical documentation and conformity assessment",
    },
    {
      title: "Risk",
      subtitle: "NIST AI RMF",
      description: "Risk management framework and controls",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "Scope, inventory, provider/deployer mapping",
    },
    {
      number: "2",
      title: "Implement",
      description: "Policies, controls, evaluations, evidence",
    },
    {
      number: "3",
      title: "Prove",
      description: "Documentation, audit trail, CE-readiness (where applicable)",
    },
    {
      number: "4",
      title: "Monitor",
      description: "Post-market KPIs, incidents, continuous improvement",
    },
  ];

  return (
    <section id="how" className="section-padding bg-white scroll-m-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight scroll-m-24">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-graphite mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Three complementary tracks with a proven 4-step methodology.
          </p>
        </div>

        {/* Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tracks.map((track, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {track.title}
              </h3>
              <p className="text-soft-green font-medium mb-3">
                {track.subtitle}
              </p>
              <p className="text-graphite text-sm">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-navy text-center mb-12">
            Our 4-Step Process
          </h3>
          
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
                      {step.title}
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