import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AuthProvider } from "@/components/AuthProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: "Coffee Match - Find Your Ideal Coffee",
  description: "AI-powered coffee recommendation platform. Discover your ideal cup based on personal taste preferences.",
  keywords: ["coffee", "coffee matching", "AI coffee", "coffee recommendations", "specialty coffee"],
  openGraph: {
    title: "Coffee Match - Find Your Ideal Coffee",
    description: "AI-powered coffee recommendation platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${source.variable} min-h-screen flex flex-col`}>
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="bg-amber-900 text-amber-100 py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-amber-300 text-sm">
                ☕ Made with love for coffee lovers everywhere
              </p>
              <p className="text-amber-400 text-xs mt-2">
                © 2026 Coffee Match. All rights reserved.
              </p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
