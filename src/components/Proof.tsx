const Proof = () => {
  const credentials = [
    {
      icon: (
        <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ISO/IEC 42001 (individual) + AWS/Microsoft AI credentials",
      description: "Certified in AI management systems and cloud AI platforms"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Hands-on MLOps/GenAI (MLflow, LangChain, FastAPI, Terraform)",
      description: "Practical experience with modern AI/ML tooling and infrastructure"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Platform-agnostic across Azure, AWS, GCP, Databricks, Snowflake",
      description: "Vendor-neutral expertise across all major cloud and data platforms"
    }
  ];

  return (
    <section id="proof" className="section-padding bg-gradient-to-br from-slate-50 to-white scroll-m-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight scroll-m-24">
            Proof & Credibility
          </h2>
          <p className="text-lg md:text-xl text-graphite mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Our expertise is backed by certifications and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-white/30 text-center group">
              <div className="flex justify-center mb-4">
                {credential.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-soft-green transition-colors">
                {credential.title}
              </h3>
              <p className="text-graphite text-sm leading-relaxed">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;