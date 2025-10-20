"use client";

import { useState } from "react";

const FeaturePillars = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      title: "Inventory & Risk",
      description: "Centralize AI systems and automatically classify risk levels for EU AI Act compliance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "Centralized AI system inventory",
        "Automated risk classification",
        "EU AI Act compliance mapping"
      ]
    },
    {
      title: "Controls & Evidence",
      description: "Map ISO 42001 controls, assign owners, and link evidence with integrity verification.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "ISO 42001 control mapping",
        "Evidence integrity verification",
        "Statement of Applicability (SoA) export"
      ]
    },
    {
      title: "FRIA & Incidents",
      description: "Guided FRIA wizard and incident tracking for compliance reporting.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      features: [
        "FRIA wizard (when applicable)",
        "Incident tracking",
        "Compliance reporting"
      ]
    },
    {
      title: "Docs & Exports",
      description: "Generate Annex IV, FRIA and SoA documentation — ready for audits.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "Annex IV generation",
        "FRIA documentation",
        "Audit-ready exports"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              Four pillars of AI compliance
            </h2>
            <p className="section-subheading text-graphite max-w-3xl mx-auto">
              AIMS Studio covers every step of AI compliance — from system inventory to audit-ready documentation.
            </p>
          </div>

          {/* Feature pillars grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl shadow-xl hover:shadow-2xl p-8 border border-gray-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                  activeCard === index ? 'ring-2 ring-soft-green/50' : ''
                }`}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-soft-green/10 to-soft-green/20 rounded-2xl mb-6 text-soft-green group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-soft-green transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-graphite mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-soft-green rounded-full mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-soft-green/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4">
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative bg-gradient-to-r from-navy via-navy to-navy/90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-navy/90 hover:to-navy transition-all duration-300"
              >
                <span className="relative z-10">Request a demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <span className="text-gray-500 text-sm">
                See all features in action
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePillars;
