"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are you a law firm?",
      answer: "No—technical & governance consulting; we partner with counsel."
    },
    {
      question: "Do you certify ISO/IEC 42001?",
      answer: "We implement AIMS and prepare internal audits; certification is by accredited bodies."
    },
    {
      question: "Do we need both phases?",
      answer: "Most providers start with Phase A (Approval) to deploy, then add Phase B (Monitoring) as soon as the system is live."
    },
    {
      question: "What's expected from our team?",
      answer: "A 2-week intensive sprint with rapid access to product, ML and compliance owners; we write the docs and set up controls together."
    },
    {
      question: "How long to \"get compliant\"?",
      answer: "Start with the Quickstart Sprint (~2 weeks); then Phase A and/or Phase B as needed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-slate-50 to-white scroll-m-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-navy text-center mb-12 tracking-tight scroll-m-24">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-navy">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-graphite transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-graphite leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;