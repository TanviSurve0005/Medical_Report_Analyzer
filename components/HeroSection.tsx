import { FileText, HeartPulse, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          Understand Your Medical Reports with AI
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          MediScan analyzes your lab reports, identifies key health indicators,
          and provides easy-to-understand insights to help you make informed
          health decisions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-3 rounded-lg">
            <FileText className="w-5 h-5 text-green-600" />
            <span>Upload PDF/Image</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-3 rounded-lg">
            <HeartPulse className="w-5 h-5 text-green-600" />
            <span>Get AI Analysis</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-3 rounded-lg">
            <Shield className="w-5 h-5 text-green-600" />
            <span>100% Private</span>
          </div>
        </div>
        
        <Link href="#analyze">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
            Analyze Your Report Now
          </Button>
        </Link>
      </div>
    </section>
  );
}