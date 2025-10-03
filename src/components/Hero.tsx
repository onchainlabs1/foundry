"use client";

import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Track hero view for analytics
    window.dispatchEvent(new CustomEvent("track", { detail: { name: "hero_view" } }));
  }, []);

  const handleCTAClick = (type: string) => {
    window.dispatchEvent(new CustomEvent("track", { detail: { name: "cta_click", type } }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/8 via-transparent to-soft-green/8" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-soft-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Beacon/Arrow SVG with animation */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <svg
          width="300"
          height="200"
          viewBox="0 0 300 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20 animate-pulse"
        >
          {/* Upward arrow/beacon */}
          <path
            d="M150 20 L280 150 L260 170 L150 40 L40 170 L20 150 Z"
            fill="#0B1F3B"
            opacity="0.4"
          />
          
          {/* Beacon light rays */}
          <path
            d="M150 20 L200 70 L190 80 L150 30 Z"
            fill="#10B981"
            opacity="0.3"
          />
          <path
            d="M150 20 L100 70 L110 80 L150 30 Z"
            fill="#10B981"
            opacity="0.3"
          />
          
          {/* Central beacon dot */}
          <circle cx="150" cy="20" r="8" fill="#10B981" opacity="0.6" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust signals */}
          <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Vendor-neutral</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>ISO/IEC 42001-aligned AIMS</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Annex IV technical documentation</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>EU AI Act (2025–2027)</span>
            </div>
          </div>

          {/* Main heading with sophisticated typography */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-navy mb-8 leading-[0.9] tracking-tight">
            Independent AI governance for the EU AI Act — audit-ready in weeks.
          </h1>
          
          {/* Subheading with better typography */}
          <p className="text-xl md:text-2xl text-graphite mb-6 max-w-5xl mx-auto leading-relaxed font-light">
            We help you meet the EU AI Act without slowing your product roadmap. Vendor-neutral (Azure, AWS, GCP, Databricks, Snowflake). We turn requirements into <strong>ISO/IEC 42001</strong> (AI Management System) and <strong>Annex IV</strong> (EU technical file) evidence you can audit.
          </p>

          {/* Who we serve line */}
          <p className="text-sm text-gray-600 mb-12 font-medium">
            <strong>Who we serve:</strong> Industrial AI/robotics (high-risk) · B2B SaaS with GenAI/ML · GPAI integrators
          </p>

          {/* Glassmorphism CTA section */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl" />
            <div className="relative p-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
                <button
                  onClick={() => {
                    handleCTAClick("primary");
                    scrollToSection("#contact");
                  }}
                  className="group relative bg-navy text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10">Book a 30-min Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={() => {
                    handleCTAClick("secondary");
                    scrollToSection("#resources");
                  }}
                  className="group relative bg-white/30 backdrop-blur-md border border-white/40 text-navy px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <span className="relative z-10">Get the AI Act Readiness Checklist</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Response in 1 business day
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free consultation
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No commitment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;