# Coffee Match ☕

AI-powered coffee recommendation platform built with Next.js, Tailwind CSS, and Convex.

## Features

### For Coffee Lovers
- 🤖 **AI-Powered Recommendations** - Describe your taste preferences
- 🎯 **Personalized Matching** - Get coffee recommendations tailored to your taste
- ❤️ **Save Favorites** - Create an account to save your favorite coffees
- 📚 **Discover Roasters** - Learn about artisan roasters from around the world

### For Coffee Roasters
- 🏪 **Roaster Profiles** - Create your roaster page with bio and contact info
- 📦 **Manage Inventory** - Add and update your coffee offerings
- 📊 **Analytics** - Track views and favorites
- 🔗 **Reach Customers** - Connect directly with coffee lovers

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Convex (Database, Auth, Server Functions)
- **Deployment**: Vercel (frontend), Convex Cloud (backend)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Convex account (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/coffee-match.git
   cd coffee-match
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   
   a. Create a Convex project:
   ```bash
   npx convex dev
   ```
   
   b. Copy the deployment URL and add to `.env.local`:
   ```
   NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
coffee-match/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── page.tsx       # Home page
│   │   ├── login/        # Login page
│   │   ├── signup/       # Signup page
│   │   ├── dashboard/   # User dashboard
│   │   └── ...
│   ├── components/    # React components
│   │   ├── Navbar.tsx
│   │   ├── CoffeeCard.tsx
│   │   └── AuthProvider.tsx
│   └── lib/          # Utilities
├── convex/
│   ├── schema.ts     # Database schema
│   └── coffees.ts    # Backend functions
├── public/           # Static assets
└── ...
```

## Database Schema

- **users** - User accounts
- **roasters** - Coffee roaster profiles (requires approval)
- **coffees** - Coffee listings with roaster reference
- **favorites** - User's saved coffees

## Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_CONVEX_URL` - Your Convex deployment URL

### Backend (Convex)

Convex automatically deploys when you run `npx convex dev` or push to GitHub (with Convex GitHub app).

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project!

---

Made with ☕ for coffee lovers everywhere
