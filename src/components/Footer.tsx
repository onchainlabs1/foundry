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
              Independent AI governance for the EU AI Act (ISO/IEC 42001 & Annex IV)
            </p>
          </div>
          
          <div className="border-t border-gray-600 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Book a 30-min consultation
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
                    href="https://linkedin.com/company/foundry-ai-governance" 
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
                  © Foundry AI Governance. All rights reserved.
                </p>
                <p className="text-xs">
                  <strong>Technical & governance consulting (not legal advice). Not affiliated with Microsoft or Palantir.</strong>
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