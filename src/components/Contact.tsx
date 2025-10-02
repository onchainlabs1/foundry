"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  role: string;
  goals: string[];
  message: string;
  consent: boolean;
}

const Contact = () => {
  const searchParams = useSearchParams();
  const goal = searchParams.get("goal");
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    role: "",
    goals: [],
    message: "",
    consent: false,
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const roles = [
    "Compliance",
    "Product", 
    "Data/ML",
    "Legal",
    "Executive",
    "Other"
  ];

  const goalOptions = [
    "Readiness",
    "AIMS", 
    "High-Risk",
    "GPAI",
    "PMM",
    "Other"
  ];

  // Prefill goals based on URL parameter
  useEffect(() => {
    if (goal) {
      const goalMap: { [key: string]: string } = {
        "Checklist": "Readiness",
        "AnnexIV": "High-Risk", 
        "PMM": "PMM"
      };
      
      if (goalMap[goal]) {
        setFormData(prev => ({
          ...prev,
          goals: [goalMap[goal]]
        }));
      }
    }
  }, [goal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleGoalChange = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.role) {
      newErrors.role = "Please select your role";
    }
    
    if (formData.goals.length === 0) {
      newErrors.goals = "Please select at least one goal";
    }
    
    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          company: "",
          role: "",
          goals: [],
          message: "",
          consent: false,
        });
        
        // Track form submission
        window.dispatchEvent(new CustomEvent("track", { 
          detail: { name: "form_submit" } 
        }));
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ message: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="section-padding bg-light-bg">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-soft-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-navy mb-4">
              Thanks — we'll email you shortly.
            </h2>
            <p className="text-graphite">
              We'll get back to you within 1 business day to schedule your consultation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-light-bg">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Contact
            </h2>
            <p className="section-subheading">
              Book a 30-min consultation or request the checklist. We reply in 1 business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">
                Get Started Today
              </h3>
              <p className="text-graphite mb-8">
                Ready to make your AI systems compliant with the EU AI Act? 
                Book a free consultation to discuss your specific needs and get 
                a personalized roadmap.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-soft-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-graphite">Free 30-minute consultation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-soft-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-graphite">Vendor-neutral approach</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-soft-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-graphite">Response within 1 business day</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-graphite mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" role="alert" className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-graphite mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-graphite mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                      errors.company ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" role="alert" className="text-red-500 text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-graphite mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                      errors.role ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.role}
                    aria-describedby={errors.role ? "role-error" : undefined}
                  >
                    <option value="">Select your role</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p id="role-error" role="alert" className="text-red-500 text-sm mt-1">
                      {errors.role}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-graphite mb-2">
                  Your Goal *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {goalOptions.map((goal) => (
                    <label key={goal} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleGoalChange(goal)}
                        className="w-4 h-4 text-navy border-gray-300 rounded focus:ring-navy"
                      />
                      <span className="ml-2 text-sm text-graphite">{goal}</span>
                    </label>
                  ))}
                </div>
                {errors.goals && (
                  <p role="alert" className="text-red-500 text-sm mt-1">
                    {errors.goals}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-graphite mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Tell us about your AI governance needs..."
                />
              </div>

              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className={`w-4 h-4 text-navy border-gray-300 rounded focus:ring-navy mt-1 ${
                      errors.consent ? "border-red-500" : ""
                    }`}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  <span className="ml-2 text-sm text-graphite">
                    I agree to be contacted about AI governance services. *
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" role="alert" className="text-red-500 text-sm mt-1">
                    {errors.consent}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send & Book"}
              </button>

              {errors.message && (
                <p role="alert" className="text-red-500 text-sm text-center">
                  {errors.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
