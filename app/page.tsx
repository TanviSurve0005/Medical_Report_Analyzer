"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import UploadCard from "@/components/UploadCard";

export default function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisMethod, setAnalysisMethod] = useState<"url" | "upload">("upload");

  const handleAnalyze = (result: any) => {
    // Save to localStorage
    localStorage.setItem("lastMedicalAnalysis", JSON.stringify(result));
    // Redirect to results page with data
    window.location.href = `/results?result=${encodeURIComponent(JSON.stringify(result))}`;
  };

  return (
    <>
      <HeroSection />
      
      <section id="analyze" className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Upload Your Medical Report
          </h2>
          <UploadCard
            isAnalyzing={isAnalyzing}
            setIsAnalyzing={setIsAnalyzing}
            onAnalyze={handleAnalyze}
            analysisMethod={analysisMethod}
            setAnalysisMethod={setAnalysisMethod}
          />
        </div>
      </section>

      <section className="py-12 bg-white rounded-lg shadow-sm my-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Report</h3>
              <p className="text-gray-600">
                Upload your PDF, JPEG, or PNG medical report
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI scans and interprets your medical data
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-gray-600">
                View easy-to-understand insights and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}