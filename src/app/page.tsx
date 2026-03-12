import { CoffeeCard } from "@/components/CoffeeCard";

// Mock data for demo
const mockCoffees = [
  {
    _id: "1",
    name: "Ethiopian Yirgacheffe",
    roast: "light",
    origin: "Ethiopia",
    flavors: "Blueberry, jasmine, citrus",
    description: "Bright and fruity",
    price: 24,
    roaster: { name: "Artisan Roasters", location: "Portland, OR" }
  },
  {
    _id: "2",
    name: "Colombian Supremo",
    roast: "medium",
    origin: "Colombia",
    flavors: "Caramel, nutty, chocolate",
    description: "Smooth and balanced",
    price: 18,
    roaster: { name: "Mountain Peak", location: "Denver, CO" }
  },
  {
    _id: "3",
    name: "Sumatra Dark Roast",
    roast: "dark",
    origin: "Indonesia",
    flavors: "Earthy, herbal, dark chocolate",
    description: "Bold and intense",
    price: 20,
    roaster: { name: "Bean Brothers", location: "Seattle, WA" }
  },
  {
    _id: "4",
    name: "Guatemala Antigua",
    roast: "medium",
    origin: "Guatemala",
    flavors: "Cocoa, spice, smokey",
    description: "Complex and rich",
    price: 22,
    roaster: { name: "Artisan Roasters", location: "Portland, OR" }
  },
  {
    _id: "5",
    name: "Kenya AA",
    roast: "light",
    origin: "Kenya",
    flavors: "Blackcurrant, grapefruit, wine",
    description: "Bright and complex",
    price: 26,
    roaster: { name: "Mountain Peak", location: "Denver, CO" }
  },
  {
    _id: "6",
    name: "Brazil Santos",
    roast: "medium",
    origin: "Brazil",
    flavors: "Nuts, chocolate, low acidity",
    description: "Smooth and easy",
    price: 16,
    roaster: { name: "Bean Brothers", location: "Seattle, WA" }
  },
];

export default async function Home() {
  const coffees = mockCoffees;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-amber-50 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Ideal Coffee ☕
          </h1>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto mb-8">
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
              className="px-8 py-4 border-2 border-amber-400 hover:bg-amber-800 text-amber-100 font-semibold rounded-full transition-colors"
            >
              I&apos;m a Roaster
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                1️⃣
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Taste</h3>
              <p className="text-gray-600">
                Tell us what flavors you love — fruity, chocolatey, nutty, or bold.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                2️⃣
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our smart system analyzes your preferences and finds your perfect match.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
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
      <section id="discover" className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
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
          <h2 className="text-3xl font-bold mb-4 text-amber-900">
            For Coffee Roasters
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our platform to reach coffee lovers actively seeking quality beans. 
            Create your roaster profile and list your coffees.
          </p>
          <a
            href="/roaster/signup"
            className="inline-block px-8 py-4 bg-amber-900 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors"
          >
            Apply as a Roaster
          </a>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 bg-amber-900 text-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Contact Us
          </h2>
          <p className="text-center text-amber-200 mb-8 max-w-2xl mx-auto">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-amber-200">hello@coffeematch.app</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-amber-200">Portland, OR</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Social</h3>
              <p className="text-amber-200">@coffeematch</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
