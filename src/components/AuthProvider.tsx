"use client";

import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  return <>{children}</>;
}

// Simple auth hook for now
export function useAuth() {
  return {
    isLoading: false,
    isAuthenticated: false,
    user: null as any,
    signIn: async () => {},
    signOut: async () => {},
  };
}
