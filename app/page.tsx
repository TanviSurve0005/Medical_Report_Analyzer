"use client";

import { useState } from "react";
import {
  Activity,
  FileText,
  Upload,
  Stethoscope,
  Heart,
  Brain,
  Dumbbell,
  FileUp,
  Search,
  Clipboard,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function MedicalReportAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    // Simulate analysis
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // const file = e.dataTransfer.files[0];
    // Handle file upload logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-8 text-green-700">
          <div className="flex items-center mb-4">
            <Stethoscope className="w-8 h-8 mr-2" />
            <h1 className="text-3xl font-bold">Medical Report Analyzer</h1>
          </div>
          <div className="flex justify-center items-center w-full max-w-2xl">
            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-green-100 p-3 mb-2">
                <FileUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-700">Upload</span>
            </div>
            <div className="h-0.5 w-full bg-green-200 mx-2" />
            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-green-100 p-3 mb-2">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-700">
                Analyze
              </span>
            </div>
            <div className="h-0.5 w-full bg-green-200 mx-2" />
            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-green-100 p-3 mb-2">
                <Clipboard className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-700">
                Results
              </span>
            </div>
            <div className="h-0.5 w-full bg-green-200 mx-2" />
            <div className="flex flex-col items-center mx-4">
              <div className="rounded-full bg-green-100 p-3 mb-2">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-700">Action</span>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto mb-8 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-green-700">
              Upload Your Medical Report
            </CardTitle>
            <CardDescription>
              Upload your medical report file or provide a URL for analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Tabs defaultValue="url" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-green-100">
                  <TabsTrigger
                    value="url"
                    className="data-[state=active]:bg-white data-[state=active]:text-green-700"
                  >
                    URL
                  </TabsTrigger>
                  <TabsTrigger
                    value="upload"
                    className="data-[state=active]:bg-white data-[state=active]:text-green-700"
                  >
                    Upload
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="url">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter report URL"
                      type="url"
                      value={fileUrl}
                      onChange={(e) => setFileUrl(e.target.value)}
                      className="flex-1 border-green-200 focus:ring-green-500"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="upload">
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-green-200 rounded-lg p-8 text-center"
                  >
                    <Upload className="w-8 h-8 mx-auto mb-4 text-green-400" />
                    <p className="text-sm text-gray-600">
                      Drag and drop your file here, or click to select
                    </p>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.jpg,.png,.jpeg"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="mt-4 inline-block cursor-pointer text-sm text-green-600 hover:text-green-700"
                    >
                      Browse files
                    </label>
                  </div>
                </TabsContent>
              </Tabs>
              <Button
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Activity className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    Analyze Report
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {showResults && (
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
                    <AlertTitle className="text-green-700">
                      Key Findings
                    </AlertTitle>
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
                        <li>
                          Incorporate 30 minutes of daily moderate exercise
                        </li>
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
        )}
      </div>
    </div>
  );
}
