"use client";

const RoadmapTransparency = () => {
  const roadmapItems = [
    {
      title: "OAuth2/OIDC authentication",
      description: "Enterprise single sign-on integration with major identity providers",
      status: "planned",
      quarter: "Q1 2025"
    },
    {
      title: "PPTX executive exports",
      description: "PowerPoint-ready compliance reports for executive presentations",
      status: "planned",
      quarter: "Q1 2025"
    },
    {
      title: "S3 storage integration",
      description: "Direct integration with AWS S3 and compatible storage services",
      status: "planned",
      quarter: "Q2 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "planned":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-progress":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case "planned":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-navy mb-6">
              Upcoming features
            </h2>
            <p className="section-subheading text-graphite max-w-3xl mx-auto">
              Planned enhancements to AIMS Studio based on user feedback and compliance requirements.
            </p>
          </div>

          {/* Roadmap items */}
          <div className="space-y-6 mb-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-navy group-hover:text-soft-green transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        <span className="ml-1 capitalize">{item.status.replace('-', ' ')}</span>
                      </span>
                    </div>
                    <p className="text-graphite leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{item.quarter}</span>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex-shrink-0 ml-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-soft-green/10 to-soft-green/20 rounded-full flex items-center justify-center">
                      {item.status === "in-progress" ? (
                        <div className="w-8 h-8 border-2 border-soft-green border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoadmapTransparency;
