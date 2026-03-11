"use client";

import { ReactNode } from "react";
import { ConvexProviderWithAuth } from "convexjs/auth/react";
import { ConvexClient } from "convex/client";

// Create a single client instance
const convex = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL || "http://localhost:3000");

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <ConvexProviderWithAuth client={convex} useAuth={() => {
      // This would be replaced with actual auth from Convex
      return {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        signIn: async () => {},
        signOut: async () => {},
      };
    }}>
      {children}
    </ConvexProviderWithAuth>
  );
}

// Simple hook for development (replace with real auth later)
export function useAuth() {
  return {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    signIn: async () => {},
    signOut: async () => {},
  };
}
