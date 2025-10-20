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

          {/* Main heading with sophisticated typography */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-navy mb-8 leading-[0.9] tracking-tight">
            Make AI compliance simple.
          </h1>
          
          {/* Subheading with better typography */}
          <p className="text-lg sm:text-xl md:text-2xl text-graphite mb-6 max-w-5xl mx-auto leading-relaxed font-light px-4">
            <strong>AIMS Studio helps you centralize AI systems, classify EU AI Act risk, and generate ISO 42001 documentation — all in one secure workspace.</strong>
          </p>


          {/* Glassmorphism CTA section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/80 rounded-2xl border border-gray-200/30 shadow-2xl" />
            <div className="relative p-8">
              <div className="flex justify-center items-center mb-6">
                <button
                  onClick={() => {
                    handleCTAClick("primary");
                    scrollToSection("#contact");
                  }}
                  className="group relative bg-gradient-to-r from-navy via-navy to-navy/90 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-navy/90 hover:to-navy transition-all duration-300"
                >
                  <span className="relative z-10">Request a demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              <div className="flex items-center justify-center text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-soft-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Response in 1 business day
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