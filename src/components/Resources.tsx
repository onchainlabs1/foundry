"use client";

import { useSearchParams } from "next/navigation";

const Resources = () => {
  const searchParams = useSearchParams();
  const goal = searchParams.get("goal");

  const resources = [
    {
      title: "AI Act Readiness Checklist",
      description: "Free comprehensive checklist to assess your AI Act compliance readiness",
      goal: "Checklist",
    },
    {
      title: "Annex IV Technical File — Starter Outline",
      description: "Template and guidance for creating technical documentation",
      goal: "AnnexIV",
    },
    {
      title: "Post-Market Monitoring — Key Metrics",
      description: "Essential KPIs and monitoring frameworks for AI systems",
      goal: "PMM",
    },
  ];

  const handleResourceClick = (resourceGoal: string) => {
    window.dispatchEvent(new CustomEvent("track", { 
      detail: { name: "resource_click", resource: resourceGoal } 
    }));
    
    // Prefill the contact form with the goal
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Set the goal in the form (this will be handled by the Contact component)
      const url = new URL(window.location.href);
      url.searchParams.set("goal", resourceGoal);
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-heading">
            Resources
          </h2>
          <p className="section-subheading">
            Free resources to help you get started with AI governance and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="card group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-soft-green/20 transition-colors">
                  <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-soft-green transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-graphite text-sm mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <button
                  onClick={() => handleResourceClick(resource.goal)}
                  className="btn-secondary text-sm w-full"
                >
                  Get This Resource
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
