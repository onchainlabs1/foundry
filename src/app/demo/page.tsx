"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Package2,
  ShieldCheck,
  FileSpreadsheet,
  FileText,
  Settings,
  Search,
  Plus,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Filter,
  ArrowRight,
  Users,
  ClipboardList,
  FolderOpen,
  LineChart as LineChartIcon,
  Home,
  TrendingUp,
} from "lucide-react";

// UI Components
const Button = ({ className = "", children, ...props }: any) => (
  <button
    className={`px-3 py-2 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-px transition-all text-sm bg-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

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

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-3xl shadow-sm border border-slate-200 ${className}`}>{children}</div>
);

const CardHeader = ({ title, subtitle, icon }: { title: string; subtitle?: string; icon: React.ReactNode }) => (
  <div className="p-5 border-b border-slate-100 flex items-center gap-3">
    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
    </div>
  </div>
);

const CardBody = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);

// Fake data
const systemsSeed = [
  {
    id: 1,
    name: "VisionID",
    domain: "Public Services",
    owner: "anna.nagy@org.eu",
    biometrics: true,
    gpai: false,
    class: "high",
    status: "needs controls",
  },
  {
    id: 2,
    name: "ChatAssist",
    domain: "Customer Support",
    owner: "mark.toth@org.eu",
    biometrics: false,
    gpai: true,
    class: "limited",
    status: "monitoring",
  },
  {
    id: 3,
    name: "DemandLGBM",
    domain: "Retail Forecasting",
    owner: "eva.kovacs@org.eu",
    biometrics: false,
    gpai: false,
    class: "minimal",
    status: "ok",
  },
  {
    id: 4,
    name: "CreditScorer",
    domain: "Financial Services",
    owner: "mario.silva@org.eu",
    biometrics: false,
    gpai: false,
    class: "high",
    status: "needs evidence",
  },
];

const gapsSeed = [
  { clause: "ISO42001:5.1 Governance", severity: "high", status: "missing" },
  { clause: "ISO42001:6.1 Risk Management", severity: "high", status: "missing" },
  { clause: "ISO42001:7.2 Competence", severity: "medium", status: "partial" },
  { clause: "ISO42001:8.3 Design & Dev", severity: "high", status: "missing" },
  { clause: "ISO42001:9.1 Monitoring", severity: "medium", status: "partial" },
];

// Utility functions
const classBadge = (cls: string) => {
  const map: Record<string, { text: string; color: string }> = {
    prohibited: { text: "Prohibited", color: "rose" },
    high: { text: "High risk", color: "amber" },
    limited: { text: "Limited", color: "indigo" },
    minimal: { text: "Minimal", color: "emerald" },
  };
  const cfg = map[cls] || map.minimal;
  return <Badge color={cfg.color}>{cfg.text}</Badge>;
};

const statusChip = (status: string) => {
  const map: Record<string, { text: string; color: string }> = {
    ok: { text: "OK", color: "emerald" },
    monitoring: { text: "Monitoring", color: "sky" },
    "needs controls": { text: "Needs Controls", color: "amber" },
    "needs evidence": { text: "Needs Evidence", color: "violet" },
  };
  const cfg = map[status] || map.monitoring;
  return (
    <span className={`text-${cfg.color}-700 bg-${cfg.color}-50 border border-${cfg.color}-200 px-2 py-0.5 rounded-full text-xs`}>
      {cfg.text}
    </span>
  );
};

// Page Components
function Overview({ systems }: { systems: any[] }) {
  const kpis = {
    total: systems.length,
    high: systems.filter((s) => s.class === "high").length,
    implementedPct: 62,
    controlsDue: 7,
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
      {/* KPI Cards */}
      <motion.div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <CardBody>
            <div className="text-sm text-slate-500">AI Readiness Score</div>
            <div className="flex items-end gap-2 mt-2">
              <div className="text-3xl font-semibold text-slate-800">78</div>
              <div className="text-xs text-emerald-600">+5 MoM</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-sm text-slate-500">AI Systems</div>
            <div className="flex items-end gap-2 mt-2">
              <div className="text-3xl font-semibold text-slate-800">{kpis.total}</div>
              <div className="text-xs text-slate-500">tracked</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-sm text-slate-500">Controls Implemented</div>
            <div className="flex items-end gap-2 mt-2">
              <div className="text-3xl font-semibold text-slate-800">{kpis.implementedPct}%</div>
              <div className="text-xs text-emerald-600">+3%</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-sm text-slate-500">Due in 7 days</div>
            <div className="flex items-end gap-2 mt-2">
              <div className="text-3xl font-semibold text-slate-800">{kpis.controlsDue}</div>
              <div className="text-xs text-amber-600">actions</div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Trend */}
      <motion.div className="xl:col-span-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <CardHeader title="Readiness Trend" subtitle="Last 6 months" icon={<LineChartIcon className="h-5 w-5 text-slate-600" />} />
          <CardBody>
            <div className="h-40 bg-gradient-to-t from-emerald-50 to-transparent rounded-xl flex items-end justify-center">
              <div className="w-full h-full flex items-end justify-between px-4 pb-4">
                {[42, 48, 55, 61, 67, 73, 78].map((height, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div 
                      className="bg-emerald-500 rounded-t w-6 transition-all duration-500 hover:bg-opacity-80"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-slate-500">{['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Upcoming actions */}
      <motion.div className="xl:col-span-12" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <CardHeader title="Upcoming Actions" subtitle="Next 14 days" icon={<Clock3 className="h-5 w-5 text-slate-600" />} />
          <CardBody>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-2 pr-4">Control</th>
                    <th className="py-2 pr-4">System</th>
                    <th className="py-2 pr-4">Owner</th>
                    <th className="py-2 pr-4">Due</th>
                    <th className="py-2 pr-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: "8.3.2 Robustness testing", s: "VisionID", o: "anna.nagy", d: "2025-10-20", st: "Pending" },
                    { c: "6.1 Risk register", s: "CreditScorer", o: "mario.silva", d: "2025-10-21", st: "In progress" },
                    { c: "9.1 Monitoring plan", s: "ChatAssist", o: "mark.toth", d: "2025-10-23", st: "Pending" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="py-2 pr-4">{row.c}</td>
                      <td className="py-2 pr-4">{row.s}</td>
                      <td className="py-2 pr-4">{row.o}</td>
                      <td className="py-2 pr-4">{row.d}</td>
                      <td className="py-2 pr-4">{row.st}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}

function Inventory({ systems }: { systems: any[] }) {
  const [q, setQ] = useState("");
  const filtered = systems.filter((s) => s.name.toLowerCase().includes(q.toLowerCase()) || s.domain.toLowerCase().includes(q.toLowerCase()));
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-2xl border border-slate-200 shadow-sm w-full max-w-md">
          <Search className="h-4 w-4 text-slate-500" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search systems, domain…" className="outline-none text-sm w-full" />
        </div>
        <Button className="flex items-center gap-2"><Upload className="h-4 w-4" /> Import CSV</Button>
        <Button className="flex items-center gap-2"><Plus className="h-4 w-4" /> New System</Button>
      </div>
      <Card>
        <CardHeader title="AI System Inventory" subtitle="Filter by risk, domain, owner" icon={<Package2 className="h-5 w-5 text-slate-600" />} />
        <CardBody>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Domain</th>
                  <th className="py-2 pr-4">AI Act Class</th>
                  <th className="py-2 pr-4">Biometrics</th>
                  <th className="py-2 pr-4">GPAI</th>
                  <th className="py-2 pr-4">Owner</th>
                  <th className="py-2 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id} className="border-t border-slate-100">
                    <td className="py-2 pr-4 font-medium text-slate-800">{s.name}</td>
                    <td className="py-2 pr-4">{s.domain}</td>
                    <td className="py-2 pr-4">{classBadge(s.class)}</td>
                    <td className="py-2 pr-4">{s.biometrics ? <Badge color="amber">Yes</Badge> : <Badge color="slate">No</Badge>}</td>
                    <td className="py-2 pr-4">{s.gpai ? <Badge color="indigo">GPAI</Badge> : <span className="text-slate-400">—</span>}</td>
                    <td className="py-2 pr-4">{s.owner}</td>
                    <td className="py-2 pr-4">{statusChip(s.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function GapControls() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Card>
        <CardHeader title="Gap Matrix (ISO/IEC 42001)" subtitle="Prioritized by severity" icon={<ShieldCheck className="h-5 w-5 text-slate-600" />} />
        <CardBody className="space-y-2">
          {gapsSeed.map((g, i) => (
            <div key={i} className="flex items-center justify-between border border-slate-100 rounded-2xl p-3">
              <div className="text-sm">{g.clause}</div>
              <div className="flex items-center gap-2">
                <Badge color={g.severity === "high" ? "amber" : "slate"}>{g.severity}</Badge>
                <span className="text-xs text-slate-500">{g.status}</span>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
      <Card>
        <CardHeader title="Control Plan & RACI" subtitle="Assign owners & due dates" icon={<ClipboardList className="h-5 w-5 text-slate-600" />} />
        <CardBody className="space-y-3">
          {["Owner", "Approver", "Consulted", "Informed"].map((role) => (
            <div key={role} className="flex items-center gap-2">
              <div className="w-28 text-xs text-slate-500">{role}</div>
              <input placeholder={`email for ${role.toLowerCase()}`} className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm" />
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div className="w-28 text-xs text-slate-500">Due date</div>
            <input type="date" className="px-3 py-2 border border-slate-200 rounded-xl text-sm" />
          </div>
          <Button className="mt-2">Save Plan</Button>
        </CardBody>
      </Card>
    </div>
  );
}

function Evidence() {
  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed rounded-2xl p-6 text-center text-slate-500 bg-white">
        Drag & drop evidence here • PDF, CSV, DOCX
      </div>
      <Card>
        <CardHeader title="Evidence Vault" subtitle="Versioned & hashed" icon={<FileText className="h-5 w-5 text-slate-600" />} />
        <CardBody>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
            {[
              { id: "EV-001", label: "Model Card v1.2", control: "8.3.2", version: 3, checksum: "5ab1…c9" },
              { id: "EV-002", label: "Data Sheet (Training)", control: "8.3.1", version: 1, checksum: "229e…51" },
              { id: "EV-003", label: "Evaluation Plan", control: "9.1.1", version: 2, checksum: "88fe…1d" },
            ].map((e) => (
              <div key={e.id} className="border border-slate-100 rounded-2xl p-3 bg-white flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{e.label}</div>
                  <div className="text-xs text-slate-500">Control {e.control} • v{e.version} • {e.checksum}</div>
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Reports() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Card>
        <CardHeader title="Generate Reports" subtitle="Executive deck & CSV exports" icon={<FileSpreadsheet className="h-5 w-5 text-slate-600" />} />
        <CardBody className="space-y-3">
          <Button className="w-full flex items-center justify-between">Executive Deck (PPTX) <ArrowRight className="h-4 w-4" /></Button>
          <Button className="w-full flex items-center justify-between">Inventory CSV <ArrowRight className="h-4 w-4" /></Button>
          <Button className="w-full flex items-center justify-between">Gap Matrix CSV <ArrowRight className="h-4 w-4" /></Button>
          <Button className="w-full flex items-center justify-between">RACI CSV <ArrowRight className="h-4 w-4" /></Button>
        </CardBody>
      </Card>
      <Card>
        <CardHeader title="Preview" subtitle="What the execs will see" icon={<LayoutGrid className="h-5 w-5 text-slate-600" />} />
        <CardBody>
          <div className="aspect-video w-full rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-sm">
            Slide 1 – AI Act Readiness Summary
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default function DemoPage() {
  const [page, setPage] = useState("Overview");
  const [systems] = useState(systemsSeed);
  const nav = [
    { name: "Overview", icon: <LayoutGrid className="h-4 w-4" /> },
    { name: "Inventory", icon: <Package2 className="h-4 w-4" /> },
    { name: "Gap & Controls", icon: <ShieldCheck className="h-4 w-4" /> },
    { name: "Evidence", icon: <FileText className="h-4 w-4" /> },
    { name: "Reports", icon: <FileSpreadsheet className="h-4 w-4" /> },
    { name: "Settings", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Topbar */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-slate-900" />
            <span className="font-semibold text-slate-900">AIMS Readiness</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button className="hidden md:flex items-center gap-2"><Filter className="h-4 w-4" /> Filters</Button>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Search className="h-4 w-4 text-slate-500" />
              <input placeholder="Quick search…" className="outline-none text-sm" />
            </div>
            <a 
              href="/"
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-sm"
            >
              <Home className="h-4 w-4" />
              Home
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-5">
        {/* Sidebar */}
        <aside className="hidden md:block col-span-3 xl:col-span-2">
          <Card>
            <CardBody>
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
                    {n.icon}
                    {n.name}
                  </button>
                ))}
              </nav>
            </CardBody>
          </Card>

          <Card className="mt-4">
            <CardBody>
              <div className="text-xs text-slate-500 mb-2">Organization</div>
              <div className="text-sm font-medium">Foundry AI Governance</div>
              <div className="text-xs text-slate-500">EU • Demo Environment</div>
            </CardBody>
          </Card>
        </aside>

        {/* Main content */}
        <main className="col-span-12 md:col-span-9 xl:col-span-10 space-y-5">
          {page === "Overview" && <Overview systems={systems} />}
          {page === "Inventory" && <Inventory systems={systems} />}
          {page === "Gap & Controls" && <GapControls />}
          {page === "Evidence" && <Evidence />}
          {page === "Reports" && <Reports />}
          {page === "Settings" && (
            <Card>
              <CardHeader title="Settings" subtitle="Regions, roles, notifications" icon={<Settings className="h-5 w-5 text-slate-600" />} />
              <CardBody>
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
              </CardBody>
            </Card>
          )}
        </main>
      </div>

      <footer className="py-8 text-center text-xs text-slate-400">
        ISO/IEC 42001 • EU AI Act • AIMS Readiness Demo — Built with Tailwind + Framer Motion
      </footer>
    </div>
  );
}