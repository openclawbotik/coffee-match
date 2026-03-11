"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@convexjs/auth";

export function Navbar() {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/coffees", label: "Coffees" },
    { href: "/roasters", label: "Roasters" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-coffee-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span className="text-xl font-bold text-espresso">Coffee Match</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-amber-700"
                    : "text-gray-600 hover:text-amber-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {isLoading ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-full" />
            ) : user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/favorites"
                  className="text-gray-600 hover:text-amber-700 font-medium"
                >
                  Favorites
                </Link>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-full transition-colors"
                >
                  Dashboard
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-amber-700 font-medium"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-espresso hover:bg-coffee-800 text-white font-medium rounded-full transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
