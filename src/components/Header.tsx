"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["#why", "#services", "#how", "#proof", "#resources", "#contact"];
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
    { label: "Why Now", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "How We Work", href: "#how" },
    { label: "Proof", href: "#proof" },
    { label: "Resources", href: "#resources" },
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
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="container flex items-center justify-between h-full">
        <Link 
          href="/" 
          className="text-xl font-bold text-navy hover:scale-105 transition-transform duration-300 group"
        >
          <span className="group-hover:text-soft-green transition-colors duration-300">
            Foundry AI Governance
          </span>
        </Link>

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

        <div className="flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group relative bg-navy text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10">Book a 30-min Consultation</span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;