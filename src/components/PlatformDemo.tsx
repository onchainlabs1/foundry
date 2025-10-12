"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Package2,
  ShieldCheck,
  FileSpreadsheet,
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  LineChart as LineChartIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Fake data
const readinessTrend = [
  { month: "Apr", score: 42 },
  { month: "May", score: 48 },
  { month: "Jun", score: 55 },
  { month: "Jul", score: 61 },
  { month: "Aug", score: 67 },
  { month: "Sep", score: 73 },
  { month: "Oct", score: 78 },
];

const systemsSeed = [
  {
    id: 1,
    name: "VisionID",
    domain: "Public Services",
    owner: "anna.nagy@org.eu",
    class: "high",
    status: "needs controls",
  },
  {
    id: 2,
    name: "ChatAssist",
    domain: "Customer Support",
    owner: "mark.toth@org.eu",
    class: "limited",
    status: "monitoring",
  },
  {
    id: 3,
    name: "DemandLGBM",
    domain: "Retail Forecasting",
    owner: "eva.kovacs@org.eu",
    class: "minimal",
    status: "ok",
  },
];

const Badge = ({ children, color = "slate" }: { children: React.ReactNode; color?: string }) => {
  const colorMap: Record<string, string> = {
    slate: "bg-slate-100 text-slate-800",
    amber: "bg-amber-100 text-amber-800",
    emerald: "bg-emerald-100 text-emerald-800",
    indigo: "bg-indigo-100 text-indigo-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorMap[color] || colorMap.slate}`}>
      {children}
    </span>
  );
};

const PlatformDemo = () => {
  const [activeView, setActiveView] = useState("Overview");

  const views = [
    { name: "Overview", icon: LayoutGrid },
    { name: "Inventory", icon: Package2 },
    { name: "Gap Analysis", icon: ShieldCheck },
    { name: "Reports", icon: FileSpreadsheet },
  ];

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

        {/* Tab Navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex items-center gap-2 overflow-x-auto bg-white/60 backdrop-blur-xl rounded-2xl p-2 border border-white/30">
            {views.map((view) => {
              const Icon = view.icon;
              return (
                <button
                  key={view.name}
                  onClick={() => setActiveView(view.name)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                    activeView === view.name
                      ? "bg-navy text-white"
                      : "text-graphite hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {view.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30"
          >
            {activeView === "Overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <div className="text-sm text-slate-500">AI Readiness Score</div>
                    <div className="flex items-end gap-2 mt-2">
                      <div className="text-3xl font-semibold text-navy">78</div>
                      <div className="text-xs text-soft-green">+5 MoM</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <div className="text-sm text-slate-500">AI Systems</div>
                    <div className="flex items-end gap-2 mt-2">
                      <div className="text-3xl font-semibold text-navy">{systemsSeed.length}</div>
                      <div className="text-xs text-slate-500">tracked</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <div className="text-sm text-slate-500">Controls Implemented</div>
                    <div className="flex items-end gap-2 mt-2">
                      <div className="text-3xl font-semibold text-navy">62%</div>
                      <div className="text-xs text-soft-green">+3%</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <div className="text-sm text-slate-500">Due in 7 days</div>
                    <div className="flex items-end gap-2 mt-2">
                      <div className="text-3xl font-semibold text-navy">7</div>
                      <div className="text-xs text-amber-600">actions</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <LineChartIcon className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Readiness Trend</h3>
                      <p className="text-xs text-slate-500">Last 6 months</p>
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={readinessTrend}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="month" stroke="#64748b" />
                        <YAxis domain={[0, 100]} stroke="#64748b" />
                        <Tooltip />
                        <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} dot={{ fill: "#10B981", r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {activeView === "Inventory" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <Package2 className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">AI System Inventory</h3>
                    <p className="text-xs text-slate-500">Track and classify all AI systems</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500 border-b border-slate-200">
                        <th className="py-3 pr-4">Name</th>
                        <th className="py-3 pr-4">Domain</th>
                        <th className="py-3 pr-4">AI Act Class</th>
                        <th className="py-3 pr-4">Owner</th>
                        <th className="py-3 pr-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {systemsSeed.map((s) => (
                        <tr key={s.id} className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium text-slate-800">{s.name}</td>
                          <td className="py-3 pr-4 text-slate-600">{s.domain}</td>
                          <td className="py-3 pr-4">
                            <Badge color={s.class === "high" ? "amber" : s.class === "limited" ? "indigo" : "emerald"}>
                              {s.class === "high" ? "High risk" : s.class === "limited" ? "Limited" : "Minimal"}
                            </Badge>
                          </td>
                          <td className="py-3 pr-4 text-slate-600">{s.owner}</td>
                          <td className="py-3 pr-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              s.status === "ok" ? "bg-emerald-50 text-emerald-700" :
                              s.status === "monitoring" ? "bg-sky-50 text-sky-700" :
                              "bg-amber-50 text-amber-700"
                            }`}>
                              {s.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeView === "Gap Analysis" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Gap Matrix (ISO/IEC 42001)</h3>
                    <p className="text-xs text-slate-500">Prioritized by severity</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { clause: "ISO42001:5.1 Governance", severity: "high", status: "missing" },
                    { clause: "ISO42001:6.1 Risk Management", severity: "high", status: "missing" },
                    { clause: "ISO42001:7.2 Competence", severity: "medium", status: "partial" },
                    { clause: "ISO42001:8.3 Design & Dev", severity: "high", status: "missing" },
                    { clause: "ISO42001:9.1 Monitoring", severity: "medium", status: "partial" },
                  ].map((g, i) => (
                    <div key={i} className="flex items-center justify-between bg-white rounded-xl p-4 border border-slate-100">
                      <div className="flex items-center gap-3">
                        {g.severity === "high" ? (
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                        ) : (
                          <Clock3 className="h-4 w-4 text-slate-500" />
                        )}
                        <div className="text-sm font-medium text-slate-800">{g.clause}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge color={g.severity === "high" ? "amber" : "slate"}>{g.severity}</Badge>
                        <span className="text-xs text-slate-500">{g.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeView === "Reports" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <FileSpreadsheet className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Generate Reports</h3>
                    <p className="text-xs text-slate-500">Executive deck & CSV exports</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button className="bg-white rounded-xl p-4 border border-slate-100 hover:border-soft-green hover:shadow-md transition-all text-left group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-800">Executive Deck (PPTX)</div>
                        <div className="text-xs text-slate-500 mt-1">10 slides · AI Act readiness summary</div>
                      </div>
                      <FileText className="h-5 w-5 text-slate-400 group-hover:text-soft-green transition-colors" />
                    </div>
                  </button>
                  <button className="bg-white rounded-xl p-4 border border-slate-100 hover:border-soft-green hover:shadow-md transition-all text-left group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-800">Inventory CSV</div>
                        <div className="text-xs text-slate-500 mt-1">All systems · risk classifications</div>
                      </div>
                      <FileSpreadsheet className="h-5 w-5 text-slate-400 group-hover:text-soft-green transition-colors" />
                    </div>
                  </button>
                  <button className="bg-white rounded-xl p-4 border border-slate-100 hover:border-soft-green hover:shadow-md transition-all text-left group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-800">Gap Matrix CSV</div>
                        <div className="text-xs text-slate-500 mt-1">ISO/IEC 42001 compliance gaps</div>
                      </div>
                      <FileSpreadsheet className="h-5 w-5 text-slate-400 group-hover:text-soft-green transition-colors" />
                    </div>
                  </button>
                  <button className="bg-white rounded-xl p-4 border border-slate-100 hover:border-soft-green hover:shadow-md transition-all text-left group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-800">Evidence Vault</div>
                        <div className="text-xs text-slate-500 mt-1">All artifacts · versioned & hashed</div>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-slate-400 group-hover:text-soft-green transition-colors" />
                    </div>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 mb-4">
            Want to see the full platform in action?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-navy text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformDemo;
