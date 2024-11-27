import React from "react";
import { FileText, Brain, Activity, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Analysis",
      description:
        "Advanced AI algorithms analyze your medical reports to provide comprehensive insights.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Simple Report Upload",
      description:
        "Just upload your PDF medical reports and get instant analysis and recommendations.",
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Health Insights",
      description:
        "Get detailed breakdowns of what's good, what needs attention, and areas for improvement.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Results",
      description:
        "Receive personalized exercise and lifestyle recommendations within minutes.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
