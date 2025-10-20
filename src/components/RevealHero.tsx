"use client";

import { useState, useEffect } from "react";

export default function RevealHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReduced) {
      setIsVisible(true);
      setShowCaret(false);
      return;
    }

    // Start animation after component mounts
    const startTimer = setTimeout(() => {
      setIsVisible(true);
    }, 250); // 250ms delay

    // Hide caret after animation completes
    const hideCaretTimer = setTimeout(() => {
      setShowCaret(false);
    }, 1200); // 900ms animation + 300ms buffer

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideCaretTimer);
    };
  }, []);

  return (
    <span>
      Make AI compliance
      <span className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        simple.
      </span>
      {showCaret && (
        <span 
          className="caret-block" 
          aria-hidden="true"
        />
      )}
    </span>
  );
}
