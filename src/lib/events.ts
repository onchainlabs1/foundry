// Lightweight analytics events
// TODO: Integrate with GA4, LinkedIn Insight, or other analytics platforms

export const trackEvent = (name: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("track", {
        detail: { name, properties }
      })
    );
  }
};

// Predefined event types
export const events = {
  heroView: () => trackEvent("hero_view"),
  ctaClick: (type: string) => trackEvent("cta_click", { type }),
  formSubmit: () => trackEvent("form_submit"),
  resourceClick: (resource: string) => trackEvent("resource_click", { resource }),
  navClick: (section: string) => trackEvent("nav_click", { section }),
} as const;
