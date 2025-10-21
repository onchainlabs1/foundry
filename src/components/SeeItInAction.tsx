"use client";

const SeeItInAction = () => {
  const features = [
    {
      title: "Compliance Setup Wizard",
      description: "Guided setup for inventory and risk.",
      caption: "Step-by-step discovery → start now"
    },
    {
      title: "Evidence Management",
      description: "SHA-256 integrity and immutable history.",
      caption: "Sealed evidence for audits → view example"
    },
    {
      title: "Generate Drafts",
      description: "One-click Annex IV, FRIA, SoA.",
      caption: "Audit-ready docs → preview output"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              See it in action
            </h2>
            <p className="section-subheading text-graphite max-w-3xl mx-auto">
              Core features of AIMS Studio for complete AI compliance workflow.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-soft-green/20 rounded-2xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-soft-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-soft-green transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-graphite mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <p className="text-sm text-soft-green font-medium">
                  {feature.caption}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeeItInAction;
