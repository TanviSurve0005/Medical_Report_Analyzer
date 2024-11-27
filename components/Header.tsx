import React from "react";
import {Activity } from "lucide-react";

export function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">HealthInsight AI</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600"
              >
                How it Works
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
