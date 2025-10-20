"use client";

import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-300 mb-6">
              AI Management System for ISO 42001 and EU AI Act compliance
            </p>
          </div>
          
          {/* Footer CTA */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">Reduce AI audit prep from months to days.</h3>
            <div className="flex justify-center items-center">
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative bg-gradient-to-r from-soft-green via-soft-green to-soft-green/90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-soft-green/90 hover:to-soft-green transition-all duration-300"
              >
                <span className="relative z-10">Request demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-soft-green to-soft-green/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Request a demo or join beta
                </p>
                <p className="text-gray-300 text-sm">
                  Response in 1 business day
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <div className="space-y-2">
                  <a 
                    href="#" 
                    className="block text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href="https://linkedin.com/company/aims-studio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-600 pt-6">
              <div className="text-center text-sm text-gray-400">
                <p className="mb-2">
                  © AIMS Studio. All rights reserved.
                </p>
                <p className="text-xs">
                  <strong>AIMS Studio prepares documentation and evidence for ISO 42001 and EU AI Act compliance. Certification is performed by accredited bodies.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;