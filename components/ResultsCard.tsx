import { Heart, Brain, Dumbbell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ResultsCard() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-green-700">
            <Heart className="w-5 h-5 mr-2 text-red-500" />
            Analysis Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="bg-green-50 border-green-200">
              <Brain className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-700">Key Findings</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-4 mt-2 text-green-800">
                  <li>Cholesterol levels slightly elevated</li>
                  <li>Blood pressure within normal range</li>
                  <li>Vitamin D deficiency detected</li>
                </ul>
              </AlertDescription>
            </Alert>

            <Alert className="bg-green-50 border-green-200">
              <Dumbbell className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-700">
                Recommended Actions
              </AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-4 mt-2 text-green-800">
                  <li>Incorporate 30 minutes of daily moderate exercise</li>
                  <li>Reduce saturated fat intake</li>
                  <li>Consider vitamin D supplementation</li>
                  <li>Schedule follow-up in 3 months</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
