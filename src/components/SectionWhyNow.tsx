"use client";

import React from 'react';

const SectionWhyNow = () => {
  const handleCTAClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-now" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              Why it matters now
            </h2>
            <p className="section-subheading text-graphite max-w-4xl mx-auto">
              The EU AI Act applies in phases. GPAI/transparency obligations begin in <strong>2025</strong>; most <strong>high-risk</strong> obligations apply in <strong>2026</strong> — preparation takes months, not weeks.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* Bullets */}
            <ul className="space-y-6 mb-12">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-soft-green rounded-full mt-3 mr-4"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium border border-slate-300 text-black dark:border-slate-600 dark:text-white bg-yellow-200 dark:bg-yellow-800">
                      <svg className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      〔2025〕
                    </span>
                  </div>
                  <p className="text-lg text-graphite leading-relaxed">
                    <strong>2025:</strong> GPAI & transparency obligations begin; set governance foundations.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-soft-green rounded-full mt-3 mr-4"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium border border-slate-300 text-black dark:border-slate-600 dark:text-white bg-yellow-200 dark:bg-yellow-800">
                      <svg className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      〔2026〕
                    </span>
                  </div>
                  <p className="text-lg text-graphite leading-relaxed">
                    <strong>2026:</strong> High-risk systems require risk management, <strong>Annex IV</strong> technical documentation, logging & <strong>post-market monitoring (Article 72)</strong>.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-soft-green rounded-full mt-3 mr-4"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium border border-slate-300 text-black dark:border-slate-600 dark:text-white bg-yellow-200 dark:bg-yellow-800">
                      <svg className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      〔Now〕
                    </span>
                  </div>
                  <p className="text-lg text-graphite leading-relaxed">
                    <strong>What you need now:</strong> AI system inventory & role, AI Act risk classification, <strong>FRIA (when applicable, Art. 27)</strong>, <strong>ISO 42001 controls (SoA)</strong>, evidence vault, <strong>Annex IV</strong>.
                  </p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <div className="text-center mb-8">
              <button
                onClick={handleCTAClick}
                className="group relative bg-gradient-to-r from-navy via-navy to-navy/90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-navy/90 hover:to-navy transition-all duration-300"
              >
                <span className="relative z-10">Request a demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Muted note */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Dates are indicative; requirements vary by role (provider/deployer) and sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyNow;
