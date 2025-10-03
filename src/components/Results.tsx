const Results = () => {
  const artifacts = [
    {
      icon: (
        <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "AIMS handbook (v1) · Risk Register · PMM plan",
      description: "Complete governance framework ready for internal audit"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Annex IV technical file (tests, datasheets, oversight, logs)",
      description: "Technical documentation for high-risk AI systems"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "CE-readiness checklist · Monthly evidence bundles",
      description: "Conformity assessment preparation and ongoing compliance evidence"
    }
  ];

  return (
    <section id="results" className="section-padding bg-white scroll-m-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight scroll-m-24">
            Results
          </h2>
          <p className="text-lg md:text-xl text-graphite mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            <strong>Audit-ready artifacts, not just reports.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artifacts.map((artifact, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-white/30 text-center group">
              <div className="flex justify-center mb-4">
                {artifact.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-soft-green transition-colors">
                {artifact.title}
              </h3>
              <p className="text-graphite text-sm leading-relaxed">
                {artifact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;