"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { FileUpload } from "@/components/FileUpload"
import { LanguageSelector } from "@/components/LanguageSelector"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, HeartPulse, Activity, FileHeart, BadgePlus } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFileSelect = async (file: File) => {
    setIsLoading(true)
    // Simulate API call to process the file
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setResult("Your medical report shows normal blood pressure levels of 120/80 mmHg, which is within the healthy range. Your cholesterol levels are slightly elevated at 210 mg/dL, and it's recommended to maintain a balanced diet and regular exercise. All other indicators are within normal parameters.")
    setIsLoading(false)
  }

  const handleLanguageChange = (language: string) => {
    // Here you would typically make an API call to translate the content
    console.log(`Translating to ${language}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>
        
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-2">
              <FileHeart className="h-12 w-12 text-primary hidden sm:block" />
              <h1 className="text-4xl font-bold tracking-tight">Medical Report Analyzer</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Upload your medical report and get an easy-to-understand explanation
            </p>
            
            {/* Medical Icons Row */}
            <div className="flex justify-center gap-8 pt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Diagnosis</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Vitals</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Analysis</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <BadgePlus className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Results</span>
              </div>
            </div>
          </div>

          <FileUpload onFileSelect={handleFileSelect} isLoading={isLoading} />

          {result && (
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Analysis Result</h2>
                  </div>
                  <LanguageSelector 
                    onLanguageChange={handleLanguageChange}
                    disabled={isLoading}
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed">{result}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}

