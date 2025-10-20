"use client";

import { useState, useEffect } from "react";

export default function PartialTypewriterHero() {
  const fullText = " simple.";
  const [displayed, setDisplayed] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { 
      setDisplayed(fullText); 
      return; 
    }
    
    // Start delay of 300ms
    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(interval);
        }
      }, 60); // 60ms per character
      
      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <span>
      Make AI compliance
      <span 
        className="caret" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {displayed}
      </span>
    </span>
  );
}
