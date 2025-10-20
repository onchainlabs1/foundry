"use client";

const ConsultingSupport = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy/5 to-soft-green/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              Consulting & Expert Support
            </h2>
            <p className="section-subheading text-graphite max-w-3xl mx-auto">
              Compliance isn't just software — sometimes you need guidance. Our experts help you implement controls, validate FRIA, and prepare for ISO 42001 certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-soft-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Control Implementation</h3>
              <p className="text-graphite leading-relaxed">
                Expert guidance on implementing ISO 42001 controls and mapping them to your specific AI systems and processes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-soft-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">FRIA Validation</h3>
              <p className="text-graphite leading-relaxed">
                Professional review and validation of your Fundamental Rights Impact Assessment to ensure compliance with Article 27.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-soft-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Certification Prep</h3>
              <p className="text-graphite leading-relaxed">
                Comprehensive preparation for ISO 42001 certification, including gap analysis, documentation review, and audit readiness.
              </p>
            </div>
          </div>

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
              <span className="relative z-10">Talk to an expert</span>
              <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSupport;
