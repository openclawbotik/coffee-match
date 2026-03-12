import { CoffeeCard } from "@/components/CoffeeCard";
import { getCoffees } from "@/convex/coffees";

export default async function Home() {
  const coffees = await getCoffees();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-espresso via-coffee-900 to-coffee-800 text-cream py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-coffee-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Ideal ☕
          </h1>
          <p className="text-xl text-coffee-200 max-w-2xl mx-auto mb-8">
            Tell us about your taste preferences and our AI will match you with the perfect beans from artisan roasters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#discover"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-colors"
            >
              Start Matching
            </a>
            <a
              href="#roasters"
              className="px-8 py-4 border-2 border-coffee-400 hover:bg-coffee-800 text-coffee-100 font-semibold rounded-full transition-colors"
            >
              I'm a Roaster
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-espresso">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                1️⃣
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Taste</h3>
              <p className="text-gray-600">
                Tell us what flavors you love — fruity, chocolatey, nutty, or bold.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                2️⃣
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our smart system analyzes your preferences and finds your perfect match.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                3️⃣
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized coffee suggestions from top roasters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coffees */}
      <section id="discover" className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-espresso">
            Discover Amazing Coffees
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Browse our selection of specialty coffees from verified roasters
          </p>
          
          {coffees.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No coffees available yet.</p>
              <p className="text-gray-400">Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffees.map((coffee) => (
                <CoffeeCard key={coffee._id} coffee={coffee} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* For Roasters */}
      <section id="roasters" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-espresso">
            For Coffee Roasters
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our platform to reach coffee lovers actively seeking quality beans. 
            Create your roaster profile and list your coffees.
          </p>
          <a
            href="/roaster/signup"
            className="inline-block px-8 py-4 bg-espresso hover:bg-coffee-800 text-white font-semibold rounded-full transition-colors"
          >
            Apply as a Roaster
          </a>
        </div>
      </section>
    </div>
  );
}
