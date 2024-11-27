import React from "react";
import { Upload } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Understand Your Medical Reports with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Upload your medical reports and get instant insights, personalized
            recommendations, and actionable health improvement plans.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <Upload className="h-5 w-5" />
              <span>Upload Medical Report</span>
            </button>
            <span className="text-sm text-gray-500">
              Supports PDF format • Secure & Private
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
