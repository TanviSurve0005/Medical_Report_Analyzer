import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-green-700">
          <Stethoscope className="w-6 h-6" />
          <span className="text-xl font-bold">MediScan</span>
        </Link>
        
        <nav className="flex space-x-6">
          <Link href="/" className="text-green-700 hover:text-green-600 font-medium">
            Home
          </Link>
          <Link href="/results" className="text-green-700 hover:text-green-600 font-medium">
            Results
          </Link>
          <Link href="#" className="text-green-700 hover:text-green-600 font-medium">
            About
          </Link>
          <Link href="#" className="text-green-700 hover:text-green-600 font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}