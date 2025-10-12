"use client";

import { ArrowRight, ShieldCheck, Package2, FileText, BarChart3 } from "lucide-react";

const PlatformPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight">
            Platform Preview
          </h2>
          <p className="text-lg md:text-xl text-graphite mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            See how the AIMS Readiness platform helps you track compliance in real-time.
          </p>
        </div>

        {/* Preview Cards */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Dashboard Overview</h3>
              <p className="text-sm text-slate-600 mb-4">Track readiness scores, KPIs, and upcoming actions in real-time.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit mb-4">
                <Package2 className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">System Inventory</h3>
              <p className="text-sm text-slate-600 mb-4">Catalog and classify all AI systems by risk level and domain.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit mb-4">
                <ShieldCheck className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Gap Analysis</h3>
              <p className="text-sm text-slate-600 mb-4">Identify ISO/IEC 42001 compliance gaps and assign owners.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit mb-4">
                <FileText className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Evidence Vault</h3>
              <p className="text-sm text-slate-600 mb-4">Store and version all compliance artifacts with integrity checks.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-6">
            Want to explore the full platform?
          </p>
          <a
            href="/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View Live Demo
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Opens in a new tab • Interactive demo environment
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
