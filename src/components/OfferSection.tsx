const OfferSection = () => {
  return (
    <section id="offer" className="section-padding bg-white scroll-m-24">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight scroll-m-24">
            What you get — simple, fixed-scope
          </h2>
        </div>

        {/* Core Offer */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30 mb-8">
            <h3 className="text-2xl font-bold text-navy mb-6">
              <strong>Core Offer — Readiness Sprint (2 weeks)</strong>
            </h3>
            <p className="text-graphite mb-6 font-medium">
              <strong>Outcome:</strong> in two weeks you know exactly what the EU AI Act asks from you and you have a <strong>90-day, audit-ready plan</strong>.
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-navy mb-4">Deliverables (fixed-scope):</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-soft-green mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-graphite">
                    <strong>AI inventory & risk classification</strong> (provider vs deployer)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-soft-green mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-graphite">
                    <strong>Gap analysis</strong> vs legal deadlines + <strong>90-day roadmap</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-soft-green mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-graphite">
                    <strong>Executive readout</strong> (10 slides) + <strong>action tracker</strong> (sheet)
                  </span>
                </li>
              </ul>
            </div>
            
            <p className="text-graphite text-sm">
              <strong>Not included:</strong> policy or Annex IV drafting (see Tracks below)
            </p>
          </div>
        </div>

        {/* Tracks */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-navy text-center mb-12">
            Tracks (choose after the Sprint)
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Track A */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30">
              <h4 className="text-xl font-bold text-navy mb-4">
                <strong>Track A — Approval (Conformity & CE-readiness) (3–5 weeks)</strong>
              </h4>
              <p className="text-graphite mb-6 font-medium">
                <strong>Outcome:</strong> <strong>Annex IV technical file (v1)</strong> for a representative high-risk system.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-navy mb-3">Deliverables:</h5>
                <ul className="space-y-2 text-sm text-graphite">
                  <li>• test & evaluation plan + results</li>
                  <li>• <strong>Data & Model Cards</strong></li>
                  <li>• <strong>human oversight</strong> plan</li>
                  <li>• <strong>minimal logging</strong> for traceability</li>
                  <li>• <strong>CE-readiness checklist</strong></li>
                </ul>
              </div>
            </div>

            {/* Track B */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30">
              <h4 className="text-xl font-bold text-navy mb-4">
                <strong>Track B — Monitoring (Post-Market Monitoring, Art. 61) (4–6 weeks)</strong>
              </h4>
              <p className="text-graphite mb-6 font-medium">
                <strong>Outcome:</strong> continuous compliance in production.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-navy mb-3">Deliverables:</h5>
                <ul className="space-y-2 text-sm text-graphite">
                  <li>• <strong>KPIs</strong> (quality, drift, bias; LLM safety) + <strong>thresholds</strong></li>
                  <li>• <strong>dashboards & alerts</strong></li>
                  <li>• <strong>monthly evidence bundle</strong> (CSV/HTML/PDF)</li>
                  <li>• <strong>incident playbooks</strong></li>
                  <li>• <strong>internal audit cadence</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              <strong>ISO/IEC 42001 (AIMS) Lite</strong> underpins both tracks (policies, RACI, risk, PMM, internal-audit checklist). Certification is by accredited bodies (we prepare; we don't certify).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;