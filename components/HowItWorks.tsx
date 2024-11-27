import React from "react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Report",
      description:
        "Upload your medical report in PDF format securely to our platform.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our AI analyzes your report to identify key health indicators and patterns.",
    },
    {
      number: "03",
      title: "Get Insights",
      description:
        "Receive a comprehensive breakdown of your health status and areas of concern.",
    },
    {
      number: "04",
      title: "Take Action",
      description:
        "Follow personalized recommendations for exercises and lifestyle changes.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-blue-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
