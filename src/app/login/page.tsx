import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-coffee-100 p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-espresso mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to save your favorite coffees</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-espresso hover:bg-coffee-800 text-white font-semibold rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-amber-700 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
