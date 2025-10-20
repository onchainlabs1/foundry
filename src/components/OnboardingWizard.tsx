"use client";

const OnboardingWizard = () => {
  const steps = [
    {
      title: "Company Setup",
      description: "Configure your organization details and compliance requirements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      status: "completed"
    },
    {
      title: "AI System Definition",
      description: "Add and categorize your AI systems for compliance tracking",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      status: "completed"
    },
    {
      title: "Risk & Controls",
      description: "Classify risk levels and map ISO 42001 controls to your systems",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      status: "completed"
    },
    {
      title: "Human Oversight",
      description: "Assign RACI owners and define human oversight processes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      status: "completed"
    },
    {
      title: "Monitoring & Improvement",
      description: "Set up basic incident tracking and compliance monitoring",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      status: "current"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              AI System Onboarding
            </h2>
            <p className="section-subheading text-graphite max-w-3xl mx-auto">
              Configure your AI systems for compliance monitoring in 5 simple steps.
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">Step 5 of 5</span>
              <span className="text-sm font-medium text-gray-600">100% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-soft-green h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  step.status === 'current'
                    ? 'border-soft-green bg-soft-green/5'
                    : step.status === 'completed'
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                  step.status === 'current'
                    ? 'bg-soft-green text-white'
                    : step.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-navy mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Current step detail */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="flex items-start space-x-6">
              {/* Large icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-soft-green rounded-2xl flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Monitoring & Improvement
                </h3>
                <p className="text-graphite leading-relaxed mb-6">
                  Set up basic incident tracking and compliance monitoring for your AI systems. Track incidents, monitor compliance metrics, and maintain audit trails for Article 72 reporting.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-soft-green rounded-full"></div>
                    <span className="text-sm text-gray-700">Basic incident tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-soft-green rounded-full"></div>
                    <span className="text-sm text-gray-700">Compliance metrics dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-soft-green rounded-full"></div>
                    <span className="text-sm text-gray-700">Article 72 reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-soft-green rounded-full"></div>
                    <span className="text-sm text-gray-700">Audit trail maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative bg-gradient-to-r from-navy via-navy to-navy/90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-navy/90 hover:to-navy transition-all duration-300"
            >
              <span className="relative z-10">Start your onboarding</span>
              <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingWizard;
