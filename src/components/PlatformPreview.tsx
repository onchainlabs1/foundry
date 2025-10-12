"use client";

import { ArrowRight, ShieldCheck, Package2, FileText, BarChart3, TrendingUp, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

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

        {/* Dashboard Preview */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-navy" />
                <h3 className="text-xl font-semibold text-navy">AIMS Readiness Dashboard</h3>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm hover:shadow-md transition-all">
                  Filters
                </button>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200">
                  <BarChart3 className="h-4 w-4 text-slate-500" />
                  <input placeholder="Quick search..." className="outline-none text-sm w-32" />
                </div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-500">AI Readiness Score</div>
                  <TrendingUp className="h-4 w-4 text-soft-green" />
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold text-navy">78</div>
                  <div className="text-sm text-soft-green">+5 MoM</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-500">AI Systems</div>
                  <Package2 className="h-4 w-4 text-slate-500" />
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold text-navy">4</div>
                  <div className="text-sm text-slate-500">tracked</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-500">Controls Implemented</div>
                  <CheckCircle2 className="h-4 w-4 text-soft-green" />
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold text-navy">62%</div>
                  <div className="text-sm text-soft-green">+3%</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-500">Due in 7 days</div>
                  <Clock className="h-4 w-4 text-amber-500" />
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold text-navy">7</div>
                  <div className="text-sm text-amber-600">actions</div>
                </div>
              </div>
            </div>

            {/* Chart and Table */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Readiness Trend Chart */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-5 w-5 text-slate-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Readiness Trend</h4>
                    <p className="text-xs text-slate-500">Last 6 months</p>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-t from-soft-green/10 to-transparent rounded-xl flex items-end justify-center">
                  <div className="w-full h-full flex items-end justify-between px-4 pb-4">
                    {[42, 48, 55, 61, 67, 73, 78].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div 
                          className="bg-soft-green rounded-t w-6 transition-all duration-500 hover:bg-opacity-80"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-slate-500">{['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Actions */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-slate-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Upcoming Actions</h4>
                    <p className="text-xs text-slate-500">Next 14 days</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { control: "8.3.2 Robustness testing", system: "VisionID", due: "Oct 20", status: "Pending" },
                    { control: "6.1 Risk register", system: "CreditScorer", due: "Oct 21", status: "In progress" },
                    { control: "9.1 Monitoring plan", system: "ChatAssist", due: "Oct 23", status: "Pending" },
                  ].map((action, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-800">{action.control}</div>
                        <div className="text-xs text-slate-500">{action.system} • Due {action.due}</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        action.status === 'In progress' ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-700'
                      }`}>
                        {action.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* System Inventory Preview */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Package2 className="h-5 w-5 text-slate-600" />
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">AI System Inventory</h4>
                  <p className="text-xs text-slate-500">Risk classification overview</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500 border-b border-slate-200">
                      <th className="py-2 pr-4">System</th>
                      <th className="py-2 pr-4">Domain</th>
                      <th className="py-2 pr-4">Risk Class</th>
                      <th className="py-2 pr-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "VisionID", domain: "Public Services", risk: "High risk", status: "Needs Controls" },
                      { name: "ChatAssist", domain: "Customer Support", risk: "Limited", status: "Monitoring" },
                      { name: "DemandLGBM", domain: "Retail", risk: "Minimal", status: "OK" },
                    ].map((system, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-2 pr-4 font-medium text-slate-800">{system.name}</td>
                        <td className="py-2 pr-4 text-slate-600">{system.domain}</td>
                        <td className="py-2 pr-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            system.risk === 'High risk' ? 'bg-amber-100 text-amber-800' :
                            system.risk === 'Limited' ? 'bg-indigo-100 text-indigo-800' :
                            'bg-emerald-100 text-emerald-800'
                          }`}>
                            {system.risk}
                          </span>
                        </td>
                        <td className="py-2 pr-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            system.status === 'OK' ? 'bg-emerald-50 text-emerald-700' :
                            system.status === 'Monitoring' ? 'bg-sky-50 text-sky-700' :
                            'bg-amber-50 text-amber-700'
                          }`}>
                            {system.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-6">
            Want to explore the full interactive platform?
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
