"use client";

const SecurityTrust = () => {
  const securityFeatures = [
    {
      title: "API-key security",
      description: "Secure API access with tenant isolation and key-based authentication",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    {
      title: "Evidence integrity & audit trail",
      description: "Cryptographically sealed evidence with immutable audit trails for compliance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Secure document previews",
      description: "Secure document previews with XSS protection and content sanitization",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Rate limiting per key",
      description: "API rate limiting and throttling to prevent abuse and ensure fair usage",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Docker deployment",
      description: "Containerized deployment with health checks and readiness monitoring",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  return (
    <section id="security" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              Security & Trust
            </h2>
            <p className="section-subheading text-graphite max-w-3xl mx-auto">
              Enterprise-grade security and compliance features built into every aspect of AIMS Studio.
            </p>
          </div>

          {/* Security features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-soft-green/10 to-soft-green/20 rounded-xl mb-4 text-soft-green group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-soft-green transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-graphite text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance note */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Compliance & Certification
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  <strong>AIMS Studio prepares documentation and evidence for ISO 42001 and EU AI Act compliance. Certification and conformity assessment are performed by accredited bodies.</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
