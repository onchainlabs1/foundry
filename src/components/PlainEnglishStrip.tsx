const PlainEnglishStrip = () => {
  return (
    <section className="py-8 bg-white/50 backdrop-blur-sm border-b border-gray-100">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-navy mb-2">EU AI Act</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Europe's new rulebook for safe, transparent AI.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-soft-green rounded-full flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-navy mb-2">ISO/IEC 42001 (AIMS)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                An auditable <strong>AI Management System</strong>: policies, roles, risk controls.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-navy mb-2">Annex IV</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                The EU-required <strong>technical file</strong>: tests, docs, and oversight that show your AI is safe and monitored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlainEnglishStrip;
