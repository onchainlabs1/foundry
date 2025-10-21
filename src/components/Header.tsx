"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["#why-now", "#features", "#onboarding-wizard", "#dashboard", "#security", "#contact"];
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Why now", href: "#why-now" },
    { label: "Features", href: "#features" },
    { label: "Onboarding", href: "#onboarding-wizard" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Security", href: "#security" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="container flex items-center justify-between h-full">
        <Link 
          href="/" 
          className="hover:scale-105 transition-transform duration-300 group"
        >
          <Logo className="group-hover:opacity-90 transition-opacity duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                activeSection === item.href
                  ? "text-navy"
                  : "text-graphite hover:text-navy"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {/* Animated underline */}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-soft-green transition-all duration-300 ${
                  activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
              {/* Hover background */}
              <span className="absolute inset-0 bg-soft-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-navy hover:text-soft-green transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group relative bg-gradient-to-r from-navy via-navy to-navy/90 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-navy/90 hover:to-navy transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Request a demo</span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium py-2 transition-colors ${
                    activeSection === item.href
                      ? "text-navy"
                      : "text-graphite hover:text-navy"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleNavClick(e, "#contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full bg-navy text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Request a demo
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;