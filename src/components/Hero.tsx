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
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-navy mb-8 leading-[0.9] tracking-tight">
            From AI inventory to Annex IV — fast.
          </h1>
          
          {/* Subheading with better typography */}
          <p className="text-lg sm:text-xl md:text-2xl text-graphite mb-6 max-w-5xl mx-auto leading-relaxed font-light px-4">
            <strong>AIMS Studio centralizes AI system inventory, AI Act risk classification, ISO 42001 gap analysis, and evidence with SHA-256 integrity — producing Annex IV, FRIA and SoA documentation instantly.</strong>
          </p>

          {/* Product screenshot placeholder */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="text-center text-gray-500 mb-4">
                <div className="w-16 h-16 bg-soft-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-soft-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Wizard onboarding interface</p>
                <p className="text-xs text-gray-400">Screenshot placeholder: /public/screens/wizard.png</p>
              </div>
            </div>
          </div>

          {/* Glassmorphism CTA section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/80 rounded-2xl border border-gray-200/30 shadow-2xl" />
            <div className="relative p-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
                <button
                  onClick={() => {
                    handleCTAClick("primary");
                    scrollToSection("#contact");
                  }}
                  className="group relative bg-gradient-to-r from-navy via-navy to-navy/90 text-white px-6 py-3 sm:px-10 sm:py-5 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-navy/90 hover:to-navy transition-all duration-300"
                >
                  <span className="relative z-10">Request a demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={() => {
                    handleCTAClick("secondary");
                    scrollToSection("#features");
                  }}
                  className="group relative bg-gradient-to-br from-white/90 to-white/70 border border-gray-200/50 text-navy px-6 py-3 sm:px-10 sm:py-5 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-white hover:to-white/90 transition-all duration-300"
                >
                  <span className="relative z-10">See how it works</span>
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