"use client";

import { useState, useEffect } from "react";

const KPIAnalytics = () => {
  const [metrics, setMetrics] = useState({
    systemsCount: 0,
    highRiskSystems: 0,
    evidenceCoverage: 0,
    complianceScore: 0,
    openActions: 0
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        systemsCount: Math.floor(Math.random() * 50) + 20,
        highRiskSystems: Math.floor(Math.random() * 15) + 5,
        evidenceCoverage: Math.floor(Math.random() * 30) + 70,
        complianceScore: Math.floor(Math.random() * 20) + 80,
        openActions: Math.floor(Math.random() * 10) + 2
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const kpiCards = [
    {
      title: "Systems Count",
      value: metrics.systemsCount,
      unit: "AI systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "High-Risk Systems",
      value: metrics.highRiskSystems,
      unit: "systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Evidence Coverage",
      value: metrics.evidenceCoverage,
      unit: "%",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Compliance Score",
      value: metrics.complianceScore,
      unit: "%",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Open Actions",
      value: metrics.openActions,
      unit: "items",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="dashboard" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              Dashboard Overview
            </h2>
            <p className="section-subheading text-graphite max-w-3xl mx-auto">
              View systems, risk levels, evidence coverage %, open actions, and the overall compliance score.
            </p>
          </div>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {kpiCards.map((kpi, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200/50 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${kpi.bgColor} rounded-xl flex items-center justify-center mb-4 ${kpi.color} group-hover:scale-110 transition-transform duration-300`}>
                  {kpi.icon}
                </div>

                {/* Value */}
                <div className="mb-2">
                  <span className="text-3xl font-bold text-navy">
                    {kpi.value}
                  </span>
                  <span className="text-lg text-gray-500 ml-1">
                    {kpi.unit}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-700">
                  {kpi.title}
                </h3>

                {/* Live indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional metrics */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Progress bars */}
              <div className="space-y-4">
                <h4 className="font-semibold text-navy mb-4">Compliance Progress</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">ISO 42001 Controls</span>
                      <span className="text-gray-900 font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-soft-green h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Evidence Collection</span>
                      <span className="text-gray-900 font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Documentation</span>
                      <span className="text-gray-900 font-medium">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent activity */}
              <div>
                <h4 className="font-semibold text-navy mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">3 new systems added</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Evidence updated for 2 systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Annex IV generated</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">2 actions require attention</span>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div>
                <h4 className="font-semibold text-navy mb-4">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    Generate Annex IV
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    Export SoA
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    Run FRIA Wizard
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    View Evidence Report
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Generate Annex IV · Export SoA · Run FRIA Wizard · View Evidence Report
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sample data caption */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Sample data for demonstration purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIAnalytics;
