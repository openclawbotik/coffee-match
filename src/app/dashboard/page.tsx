"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"user" | "roaster">("user");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-espresso mb-8">Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("user")}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeTab === "user"
              ? "bg-amber-600 text-white"
              : "bg-coffee-100 text-gray-600 hover:bg-coffee-200"
          }`}
        >
          My Profile
        </button>
        <button
          onClick={() => setActiveTab("roaster")}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeTab === "roaster"
              ? "bg-amber-600 text-white"
              : "bg-coffee-100 text-gray-600 hover:bg-coffee-200"
          }`}
        >
          Roaster Dashboard
        </button>
      </div>

      {activeTab === "user" ? (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Favorites */}
          <div className="bg-white rounded-2xl shadow-sm border border-coffee-100 p-6">
            <h2 className="text-xl font-bold text-espresso mb-4">❤️ My Favorites</h2>
            <p className="text-gray-500 mb-4">You haven't saved any coffees yet.</p>
            <Link
              href="/"
              className="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-500 transition-colors"
            >
              Browse Coffees
            </Link>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl shadow-sm border border-coffee-100 p-6">
            <h2 className="text-xl font-bold text-espresso mb-4">⚙️ My Preferences</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-coffee-100">
                <span className="text-gray-600">Preferred Roast</span>
                <span className="font-medium">Not set</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-coffee-100">
                <span className="text-gray-600">Favorite Origins</span>
                <span className="font-medium">Not set</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Favorite Flavors</span>
                <span className="font-medium">Not set</span>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 border border-coffee-300 text-gray-600 rounded-full font-medium hover:bg-coffee-50 transition-colors">
              Update Preferences
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-coffee-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-espresso">My Coffees</h2>
            <button className="px-4 py-2 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-500 transition-colors">
              + Add Coffee
            </button>
          </div>
          <p className="text-gray-500 mb-4">You haven't added any coffees yet.</p>
          <p className="text-sm text-gray-400">
            Note: Roaster accounts require approval. Apply to become a roaster to list your coffees.
          </p>
        </div>
      )}
    </div>
  );
}
