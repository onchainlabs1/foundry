"use client";

import { useState } from "react";

export default function DemoPage() {
  const [page, setPage] = useState("Overview");

  const nav = [
    { name: "Overview", icon: "📊" },
    { name: "Inventory", icon: "📦" },
    { name: "Gap Analysis", icon: "🛡️" },
    { name: "Evidence", icon: "📄" },
    { name: "Reports", icon: "📈" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Topbar */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold text-slate-900">AIMS Readiness</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm hover:shadow-md transition-all">
              🔍 Filters
            </button>
            <input placeholder="Quick search…" className="px-3 py-2 rounded-xl border border-slate-200 text-sm" />
            <a 
              href="/"
              className="px-3 py-2 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all text-sm"
            >
              🏠 Home
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-5">
        {/* Sidebar */}
        <aside className="col-span-3 xl:col-span-2">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5">
            <div className="text-xs text-slate-500 mb-2">Navigation</div>
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <button
                  key={n.name}
                  onClick={() => setPage(n.name)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-left border transition-all ${
                    page === n.name ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>{n.icon}</span>
                  {n.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 mt-4">
            <div className="text-xs text-slate-500 mb-2">Organization</div>
            <div className="text-sm font-medium">Foundry AI Governance</div>
            <div className="text-xs text-slate-500">EU • Demo Environment</div>
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-9 xl:col-span-10 space-y-5">
          {page === "Overview" && (
            <div className="space-y-5">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="text-sm text-slate-500">AI Readiness Score</div>
                  <div className="flex items-end gap-2 mt-2">
                    <div className="text-3xl font-semibold text-slate-800">78</div>
                    <div className="text-xs text-emerald-600">+5 MoM</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="text-sm text-slate-500">AI Systems</div>
                  <div className="flex items-end gap-2 mt-2">
                    <div className="text-3xl font-semibold text-slate-800">4</div>
                    <div className="text-xs text-slate-500">tracked</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="text-sm text-slate-500">Controls Implemented</div>
                  <div className="flex items-end gap-2 mt-2">
                    <div className="text-3xl font-semibold text-slate-800">62%</div>
                    <div className="text-xs text-emerald-600">+3%</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="text-sm text-slate-500">Due in 7 days</div>
                  <div className="flex items-end gap-2 mt-2">
                    <div className="text-3xl font-semibold text-slate-800">7</div>
                    <div className="text-xs text-amber-600">actions</div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📈</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Readiness Trend</h4>
                    <p className="text-xs text-slate-500">Last 6 months</p>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-t from-emerald-50 to-transparent rounded-xl flex items-end justify-center">
                  <div className="w-full h-full flex items-end justify-between px-4 pb-4">
                    {[42, 48, 55, 61, 67, 73, 78].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div 
                          className="bg-emerald-500 rounded-t w-6 transition-all duration-500"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-slate-500">{['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Table */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">⏰</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Upcoming Actions</h4>
                    <p className="text-xs text-slate-500">Next 14 days</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500 border-b border-slate-200">
                        <th className="py-2 pr-4">Control</th>
                        <th className="py-2 pr-4">System</th>
                        <th className="py-2 pr-4">Owner</th>
                        <th className="py-2 pr-4">Due</th>
                        <th className="py-2 pr-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 pr-4">8.3.2 Robustness testing</td>
                        <td className="py-2 pr-4">VisionID</td>
                        <td className="py-2 pr-4">anna.nagy</td>
                        <td className="py-2 pr-4">2025-10-20</td>
                        <td className="py-2 pr-4">Pending</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 pr-4">6.1 Risk register</td>
                        <td className="py-2 pr-4">CreditScorer</td>
                        <td className="py-2 pr-4">mario.silva</td>
                        <td className="py-2 pr-4">2025-10-21</td>
                        <td className="py-2 pr-4">In progress</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 pr-4">9.1 Monitoring plan</td>
                        <td className="py-2 pr-4">ChatAssist</td>
                        <td className="py-2 pr-4">mark.toth</td>
                        <td className="py-2 pr-4">2025-10-23</td>
                        <td className="py-2 pr-4">Pending</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {page === "Inventory" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input placeholder="Search systems, domain…" className="px-3 py-2 rounded-xl border border-slate-200 text-sm flex-1 max-w-md" />
                <button className="px-3 py-2 rounded-xl border border-slate-200 text-sm hover:shadow-md transition-all">
                  📤 Import CSV
                </button>
                <button className="px-3 py-2 rounded-xl border border-slate-200 text-sm hover:shadow-md transition-all">
                  ➕ New System
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📦</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">AI System Inventory</h4>
                    <p className="text-xs text-slate-500">Filter by risk, domain, owner</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500 border-b border-slate-200">
                        <th className="py-2 pr-4">Name</th>
                        <th className="py-2 pr-4">Domain</th>
                        <th className="py-2 pr-4">AI Act Class</th>
                        <th className="py-2 pr-4">Owner</th>
                        <th className="py-2 pr-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 pr-4 font-medium text-slate-800">VisionID</td>
                        <td className="py-2 pr-4">Public Services</td>
                        <td className="py-2 pr-4"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">High risk</span></td>
                        <td className="py-2 pr-4">anna.nagy@org.eu</td>
                        <td className="py-2 pr-4"><span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Needs Controls</span></td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 pr-4 font-medium text-slate-800">ChatAssist</td>
                        <td className="py-2 pr-4">Customer Support</td>
                        <td className="py-2 pr-4"><span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">Limited</span></td>
                        <td className="py-2 pr-4">mark.toth@org.eu</td>
                        <td className="py-2 pr-4"><span className="px-2 py-1 bg-sky-50 text-sky-700 rounded-full text-xs">Monitoring</span></td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 pr-4 font-medium text-slate-800">DemandLGBM</td>
                        <td className="py-2 pr-4">Retail Forecasting</td>
                        <td className="py-2 pr-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">Minimal</span></td>
                        <td className="py-2 pr-4">eva.kovacs@org.eu</td>
                        <td className="py-2 pr-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">OK</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {page === "Gap Analysis" && (
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🛡️</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Gap Matrix (ISO/IEC 42001)</h4>
                    <p className="text-xs text-slate-500">Prioritized by severity</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between border border-slate-100 rounded-2xl p-3">
                    <div className="text-sm">ISO42001:5.1 Governance</div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">high</span>
                      <span className="text-xs text-slate-500">missing</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border border-slate-100 rounded-2xl p-3">
                    <div className="text-sm">ISO42001:6.1 Risk Management</div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">high</span>
                      <span className="text-xs text-slate-500">missing</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border border-slate-100 rounded-2xl p-3">
                    <div className="text-sm">ISO42001:7.2 Competence</div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-slate-100 text-slate-800 rounded-full text-xs">medium</span>
                      <span className="text-xs text-slate-500">partial</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📋</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Control Plan & RACI</h4>
                    <p className="text-xs text-slate-500">Assign owners & due dates</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-28 text-xs text-slate-500">Owner</div>
                    <input placeholder="email for owner" className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-28 text-xs text-slate-500">Approver</div>
                    <input placeholder="email for approver" className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-28 text-xs text-slate-500">Due date</div>
                    <input type="date" className="px-3 py-2 border border-slate-200 rounded-xl text-sm" />
                  </div>
                  <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm hover:bg-opacity-90 transition-all">
                    Save Plan
                  </button>
                </div>
              </div>
            </div>
          )}

          {page === "Evidence" && (
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-2xl p-6 text-center text-slate-500 bg-white">
                📎 Drag & drop evidence here • PDF, CSV, DOCX
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📄</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Evidence Vault</h4>
                    <p className="text-xs text-slate-500">Versioned & hashed</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                  <div className="border border-slate-100 rounded-2xl p-3 bg-white flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Model Card v1.2</div>
                      <div className="text-xs text-slate-500">Control 8.3.2 • v3 • 5ab1…c9</div>
                    </div>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="border border-slate-100 rounded-2xl p-3 bg-white flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Data Sheet (Training)</div>
                      <div className="text-xs text-slate-500">Control 8.3.1 • v1 • 229e…51</div>
                    </div>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="border border-slate-100 rounded-2xl p-3 bg-white flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Evaluation Plan</div>
                      <div className="text-xs text-slate-500">Control 9.1.1 • v2 • 88fe…1d</div>
                    </div>
                    <span className="text-emerald-600">✓</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {page === "Reports" && (
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📈</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Generate Reports</h4>
                    <p className="text-xs text-slate-500">Executive deck & CSV exports</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl text-sm hover:bg-slate-100 transition-all">
                    Executive Deck (PPTX) →
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl text-sm hover:bg-slate-100 transition-all">
                    Inventory CSV →
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl text-sm hover:bg-slate-100 transition-all">
                    Gap Matrix CSV →
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl text-sm hover:bg-slate-100 transition-all">
                    RACI CSV →
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📊</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Preview</h4>
                    <p className="text-xs text-slate-500">What the execs will see</p>
                  </div>
                </div>
                <div className="aspect-video w-full rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-sm">
                  Slide 1 – AI Act Readiness Summary
                </div>
              </div>
            </div>
          )}

          {page === "Settings" && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">⚙️</span>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">Settings</h4>
                  <p className="text-xs text-slate-500">Regions, roles, notifications</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Region</div>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm">
                    <option>European Union (EU)</option>
                    <option>United Kingdom (UK)</option>
                    <option>USA</option>
                  </select>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Notifications</div>
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked /> Email
                    <input type="checkbox" className="ml-3" defaultChecked /> Slack/Teams
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <footer className="py-8 text-center text-xs text-slate-400">
        ISO/IEC 42001 • EU AI Act • AIMS Readiness Demo — Built with Tailwind
      </footer>
    </div>
  );
}