import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all active coffees with roaster info
export const getCoffees = query({
  args: {},
  handler: async (ctx) => {
    const coffees = await ctx.db.query("coffees").filter((q) => q.eq("active", true)).collect();
    const roasters = await ctx.db.query("roasters").filter((q) => q.eq("approved", true)).collect();
    
    return coffees.map((coffee) => {
      const roaster = roasters.find((r) => r._id === coffee.roasterId);
      return { ...coffee, roaster };
    });
  },
});

// Get coffee by ID
export const getCoffeeById = query({
  args: { id: v.id("coffees") },
  handler: async (ctx, args) => {
    const coffee = await ctx.db.get(args.id);
    if (!coffee) return null;
    const roaster = await ctx.db.get(coffee.roasterId);
    return { ...coffee, roaster };
  },
});

// Get roasters
export const getRoasters = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("roasters").filter((q) => q.eq("approved", true)).collect();
  },
});

// Get roaster by ID
export const getRoasterById = query({
  args: { id: v.id("roasters") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get roaster's coffees
export const getRoasterCoffees = query({
  args: { roasterId: v.id("roasters") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("coffees")
      .filter((q) => q.and(q.eq("roasterId", args.roasterId), q.eq("active", true)))
      .collect();
  },
});

// Get user's favorites
export const getUserFavorites = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const favorites = await ctx.db
      .query("favorites")
      .filter((q) => q.eq("userId", args.userId))
      .collect();
    
    const coffees = await ctx.db.query("coffees").collect();
    const roasters = await ctx.db.query("roasters").collect();
    
    return favorites.map((fav) => {
      const coffee = coffees.find((c) => c._id === fav.coffeeId);
      const roaster = roasters.find((r) => r && coffee && r._id === coffee.roasterId);
      return { ...fav, coffee, roaster };
    }).filter(f => f.coffee);
  },
});

// Add coffee to favorites
export const addFavorite = mutation({
  args: { userId: v.id("users"), coffeeId: v.id("coffees") },
  handler: async (ctx, args) => {
    // Check if already favorited
    const existing = await ctx.db
      .query("favorites")
      .filter((q) => q.and(q.eq("userId", args.userId), q.eq("coffeeId", args.coffeeId)))
      .first();
    
    if (existing) return existing._id;
    
    return await ctx.db.insert("favorites", {
      userId: args.userId,
      coffeeId: args.coffeeId,
      createdAt: Date.now(),
    });
  },
});

// Remove favorite
export const removeFavorite = mutation({
  args: { id: v.id("favorites") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Create roaster (signup)
export const createRoaster = mutation({
  args: {
    userId: v.id("users"),
    name: v.string(),
    location: v.string(),
    bio: v.string(),
    email: v.string(),
    website: v.optional(v.string()),
    instagram: v.optional(v.string()),
    twitter: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("roasters", {
      ...args,
      approved: false, // Requires admin approval
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

// Add coffee (roaster only)
export const addCoffee = mutation({
  args: {
    roasterId: v.id("roasters"),
    name: v.string(),
    roast: v.string(),
    origin: v.string(),
    flavors: v.string(),
    description: v.string(),
    price: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("coffees", {
      ...args,
      active: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

// Update coffee
export const updateCoffee = mutation({
  args: {
    id: v.id("coffees"),
    name: v.optional(v.string()),
    roast: v.optional(v.string()),
    origin: v.optional(v.string()),
    flavors: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, { ...updates, updatedAt: Date.now() });
  },
});

// Delete coffee
export const deleteCoffee = mutation({
  args: { id: v.id("coffees") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Get current user (for auth)
export const getCurrentUser = query({
  args: { userId: v.optional(v.id("users")) },
  handler: async (ctx, args) => {
    if (!args.userId) return null;
    return await ctx.db.get(args.userId);
  },
});
