/* eslint-disable @typescript-eslint/no-unused-vars */
import { Heart, Brain, Dumbbell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ResultsCard({
  analysisResult,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  analysisResult: any;
}) {
  const analysis = analysisResult?.report?.analysis || ""; // Access dynamic analysis data
  const recommendedActions = analysisResult?.report?.recommendedActions || []; // Dynamic actions array

  return (
    <div className="max-w-full mx-auto space-y-6 mt-10">
      {analysis && (
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              Analysis Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Analysis Section */}
              <Alert className="bg-green-50 border-green-200">
                <Brain className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-700">
                  Detailed Analysis
                </AlertTitle>
                <AlertDescription>
                  <div className="mt-2 text-green-800 space-y-4">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {analysis}
                    </ReactMarkdown>
                  </div>
                </AlertDescription>
              </Alert>

              {/* Recommended Actions Section */}
              {recommendedActions.length > 0 && (
                <Alert className="bg-green-50 border-green-200">
                  <Dumbbell className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-700">
                    Recommended Actions
                  </AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc pl-4 mt-2 text-green-800">
                      {recommendedActions.map(
                        (action: string, index: number) => (
                          <li key={index} className="text-sm leading-relaxed">
                            {action}
                          </li>
                        )
                      )}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
