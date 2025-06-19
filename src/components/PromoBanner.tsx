
import { useState } from "react";
import { X, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#06b14a] to-[#048a3a] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Calendar className="h-5 w-5 animate-pulse" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="font-bold text-lg">THE GREEN FEST 2025</span>
              <span className="text-green-100">•</span>
              <span className="text-green-100">21 juin 2025</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/green-fest"
              className="hidden sm:flex items-center space-x-2 bg-white text-[#06b14a] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#f8efc8] transition-colors duration-300"
            >
              <span>Découvrir</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-green-200 transition-colors duration-300"
              aria-label="Fermer la bannière"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile CTA */}
        <div className="sm:hidden mt-3">
          <Link
            to="/green-fest"
            className="flex items-center justify-center space-x-2 bg-white text-[#06b14a] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#f8efc8] transition-colors duration-300"
          >
            <span>Découvrir le festival</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
