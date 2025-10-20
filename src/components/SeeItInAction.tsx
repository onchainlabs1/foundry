"use client";

const SeeItInAction = () => {
  const screenshots = [
    {
      title: "Wizard Onboarding",
      description: "Guided setup for AI system inventory and risk classification",
      placeholder: "/public/screens/wizard.png",
      caption: "Step-by-step wizard for comprehensive AI system discovery"
    },
    {
      title: "Evidence Management",
      description: "Cryptographically sealed evidence with SHA-256 integrity",
      placeholder: "/public/screens/evidence.png", 
      caption: "Evidence sealed with SHA-256 for audit integrity"
    },
    {
      title: "Generate Drafts",
      description: "One-click generation of Annex IV, FRIA and SoA documents",
      placeholder: "/public/screens/generate.png",
      caption: "Audit-ready documentation generated instantly"
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
              Real screenshots from AIMS Studio showing the complete compliance workflow in action.
            </p>
          </div>

          {/* Screenshots grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Screenshot placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-soft-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-soft-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{screenshot.title}</p>
                    <p className="text-xs text-gray-400 mt-1">Screenshot placeholder</p>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-soft-green transition-colors duration-300">
                  {screenshot.title}
                </h3>
                
                <p className="text-graphite mb-4 leading-relaxed">
                  {screenshot.description}
                </p>

                <p className="text-sm text-soft-green font-medium">
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-soft-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>All screenshots show actual AIMS Studio interface</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeItInAction;
