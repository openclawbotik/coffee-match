"use client";

import Image from "next/image";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@convexjs/auth";

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
  const { user } = useAuth();
  const [isFavorited, setIsFavorited] = useState(false);
  const addFavorite = useMutation(api.coffees.addFavorite);

  const handleFavorite = async () => {
    if (!user) {
      alert("Please log in to save favorites");
      return;
    }
    await addFavorite({ userId: user._id, coffeeId: coffee._id });
    setIsFavorited(true);
  };

  const roastColors: Record<string, string> = {
    light: "bg-yellow-100 text-yellow-800",
    medium: "bg-orange-100 text-orange-800",
    dark: "bg-coffee-100 text-coffee-800",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-coffee-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Placeholder */}
      <div className="h-40 bg-gradient-to-br from-coffee-200 to-coffee-300 flex items-center justify-center">
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
            {coffee.roast.charAt(0).toUpperCase() + coffee.roast.slice(1)} Roast
          </span>
          <span className="px-2 py-1 bg-coffee-50 text-coffee-700 rounded-full text-xs font-medium">
            {coffee.origin}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-espresso mb-1">{coffee.name}</h3>
        
        {/* Roaster */}
        {coffee.roaster && (
          <p className="text-sm text-gray-500 mb-2">
            by {coffee.roaster.name} • {coffee.roaster.location}
          </p>
        )}

        {/* Flavors */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {coffee.flavors}
        </p>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-coffee-100">
          <span className="text-xl font-bold text-espresso">
            ${coffee.price}
            <span className="text-sm font-normal text-gray-500">/lb</span>
          </span>
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-full transition-colors ${
              isFavorited
                ? "bg-red-100 text-red-500"
                : "bg-coffee-50 text-coffee-400 hover:bg-red-50 hover:text-red-400"
            }`}
          >
            {isFavorited ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
