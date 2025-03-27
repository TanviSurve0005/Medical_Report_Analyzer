"use client";

import { useEffect, useState } from "react";
import ResultsCard from "@/components/ResultsCard";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  useEffect(() => {
    // Check for result in URL params (if coming from upload)
    const resultParam = searchParams.get("result");
    if (resultParam) {
      try {
        setAnalysisResult(JSON.parse(decodeURIComponent(resultParam)));
      } catch (e) {
        console.error("Error parsing result:", e);
      }
    }

    // Alternatively, check localStorage for saved results
    const savedResult = localStorage.getItem("lastMedicalAnalysis");
    if (savedResult && !resultParam) {
      setAnalysisResult(JSON.parse(savedResult));
    }
  }, [searchParams]);

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">
            Your Analysis Results
          </h1>
          <Link href="/">
            <Button variant="outline" className="text-green-700">
              Analyze Another Report
            </Button>
          </Link>
        </div>

        {analysisResult ? (
          <ResultsCard analysisResult={analysisResult} />
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No Analysis Results Found
            </h3>
            <p className="text-gray-600 mb-6">
              Please upload a medical report to view analysis results.
            </p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700">
                Download Report
              </Button>
            </Link>
          </div>
        )}
      </div>
      
    </div>
  );
}