"use client";

import { useState } from "react";

interface CoffeeCardProps {
  coffee: {
    _id: any;
    name: string;
    roast: string;
    origin: string;
    flavors: string;
    description: string;
    price: number;
    roaster?: {
      name: string;
      location: string;
    };
  };
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    alert("Login to save favorites!");
  };

  const roastColors: Record<string, string> = {
    light: "bg-yellow-100 text-yellow-800",
    medium: "bg-orange-100 text-orange-800",
    dark: "bg-amber-900 text-amber-100",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Placeholder */}
      <div className="h-40 bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
        <span className="text-6xl">☕</span>
      </div>

      <div className="p-5">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              roastColors[coffee.roast] || "bg-gray-100 text-gray-800"
            }`}
          >
            {coffee.roast?.charAt(0).toUpperCase() || 'M'}edium Roast
          </span>
          <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">
            {coffee.origin || 'Blend'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-amber-900 mb-1">{coffee.name}</h3>
        
        {/* Roaster */}
        {coffee.roaster && (
          <p className="text-sm text-gray-500 mb-2">
            by {coffee.roaster.name} • {coffee.roaster.location}
          </p>
        )}

        {/* Flavors */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {coffee.flavors || 'Rich and balanced'}
        </p>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-amber-100">
          <span className="text-xl font-bold text-amber-900">
            ${coffee.price || 19}
            <span className="text-sm font-normal text-gray-500">/lb</span>
          </span>
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-full transition-colors ${
              isFavorited
                ? "bg-red-100 text-red-500"
                : "bg-amber-50 text-amber-400 hover:bg-red-50 hover:text-red-400"
            }`}
          >
            {isFavorited ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
