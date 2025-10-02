const WhyNow = () => {
  const deadlines = [
    {
      date: "Feb 2, 2025",
      title: "Prohibitions & AI literacy",
    },
    {
      date: "Aug 2, 2025",
      title: "GPAI transparency & governance rules",
    },
    {
      date: "Aug 2, 2026",
      title: "Most obligations for high-risk AI",
    },
    {
      date: "Aug 2, 2027",
      title: "Regulated products with embedded AI",
    },
  ];

  return (
    <section id="why" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tight scroll-m-24">Why Now</h2>
        <p className="text-lg text-graphite mb-16 max-w-4xl mx-auto font-light leading-relaxed">
          Key EU AI Act milestones affect GPAI, high-risk systems, and regulated products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
          {deadlines.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-white/30"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-soft-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {/* Animated Calendar Icon */}
                  <div className="relative">
                    <svg
                      className="w-6 h-6 text-soft-green mr-4 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-6 h-6 bg-soft-green/20 rounded-full animate-ping" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium tracking-wide">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-navy leading-tight group-hover:text-soft-green transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Glassmorphism note */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-xl border border-white/30 shadow-lg" />
          <p className="relative z-10 text-sm text-gray-600 p-6 font-medium">
            We prioritize what matters for your role (provider/deployer).
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;