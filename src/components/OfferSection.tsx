const OfferSection = () => {
  return (
    <section id="offer" className="section-padding bg-white scroll-m-24">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight scroll-m-24">
            What you get — simple, fixed-scope
          </h2>
        </div>

        {/* Quickstart Sprint */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30 mb-8">
            <h3 className="text-2xl font-bold text-navy mb-6">
              <strong>Quickstart Compliance Sprint (≈2 weeks)</strong>
            </h3>
            <p className="text-graphite mb-6 font-medium">
              <strong>Outcome:</strong> in ~2 weeks you know exactly what the EU AI Act asks from you and you have a <strong>90-day, audit-ready plan</strong>.
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
            
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <p className="text-graphite text-sm">
                <strong>Collaboration:</strong> intensive, with rapid access to your product/ML/compliance owners (daily check-ins).
              </p>
              <p className="text-graphite text-sm">
                <strong>Post-sprint support:</strong> one review session within 30 days for auditor feedback or minor tweaks.
              </p>
              <p className="text-graphite text-sm">
                <strong>Note:</strong> policy drafting and technical file assembly happen in the phases below.
              </p>
            </div>
          </div>
        </div>

        {/* Phases */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-navy text-center mb-12">
            Phases (complementary, sequential)
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phase A */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30">
              <h4 className="text-xl font-bold text-navy mb-4">
                <strong>Phase A — Approval (Annex IV & CE-readiness)</strong>
              </h4>
              <p className="text-graphite mb-6 font-medium">
                <strong>Outcome:</strong> <strong>Annex IV technical file (v1)</strong> ready for internal review or submission.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-navy mb-3">Deliverables:</h5>
                <ul className="space-y-2 text-sm text-graphite">
                  <li>• <strong>Test & evaluation plan</strong> (accuracy/robustness/bias/safety) + documented <strong>results</strong></li>
                  <li>• <strong>Fundamental Rights Impact Assessment (FRIA)</strong> and <strong>user transparency notices</strong></li>
                  <li>• <strong>Data & Model Cards</strong> (purpose, limits, data lineage)</li>
                  <li>• <strong>Human oversight</strong> plan (intervention thresholds, fallbacks)</li>
                  <li>• <strong>Minimal logging</strong> for traceability (trace_id, model_version, score, latency, digests)</li>
                  <li>• <strong>CE-readiness checklist</strong> and submission guidance</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">
                Note: we prepare; <strong>certification/conformity is performed by accredited bodies</strong>.
              </p>
            </div>

            {/* Phase B */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30">
              <h4 className="text-xl font-bold text-navy mb-4">
                <strong>Phase B — Monitoring (Post-Market Monitoring, Art. 61)</strong>
              </h4>
              <p className="text-graphite mb-6 font-medium">
                <strong>Outcome:</strong> continuous compliance in production with <strong>audit-ready evidence</strong>.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-navy mb-3">Deliverables:</h5>
                <ul className="space-y-2 text-sm text-graphite">
                  <li>• <strong>KPIs & thresholds</strong> (quality, drift, bias; for LLMs: hallucination/safety)</li>
                  <li>• <strong>Dashboards & alerts</strong> (exportable) and monthly <strong>evidence bundle</strong> (CSV/HTML/PDF)</li>
                  <li>• <strong>Incident playbooks</strong> (serious-incident criteria, timelines, audit trail)</li>
                  <li>• <strong>Internal audit cadence</strong> and improvement loop</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AIMS Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              <strong>AIMS (ISO/IEC 42001) Lite</strong> underpins both phases (policies, RACI, risk, PMM, internal-audit checklist).
            </p>
          </div>
        </div>

        {/* Optional Tech Implementation Block */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-navy/5 to-soft-green/5 rounded-2xl p-6 border border-navy/10">
            <h4 className="text-lg font-semibold text-navy mb-3">
              <strong>Tech Implementation (beyond documents)</strong>
            </h4>
            <p className="text-graphite text-sm italic mb-4">
              We don't just write documents — we instrument your AI so compliance runs in production.
            </p>
            <ul className="space-y-2 text-sm text-graphite">
              <li>• <strong>Observability:</strong> drift/bias/quality KPIs, logs, dashboards & alerts (exportable)</li>
              <li>• <strong>Explainability:</strong> model/data cards, SHAP/LIME, human-oversight guides</li>
              <li>• <strong>Evaluation gates:</strong> YAML policies + CI checks, release reports</li>
              <li>• <strong>Evidence bundles:</strong> monthly Annex IV/PMM packages for audits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;