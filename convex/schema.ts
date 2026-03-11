import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // User accounts (customers)
  users: defineTable({
    name: v.string(),
    email: v.string(),
    emailVerified: v.boolean(),
    image: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_email", ["email"]),

  // Coffee roasters
  roasters: defineTable({
    userId: v.id("users"), // Owner
    name: v.string(),
    location: v.string(),
    bio: v.string(),
    email: v.string(),
    website: v.optional(v.string()),
    instagram: v.optional(v.string()),
    twitter: v.optional(v.string()),
    approved: v.boolean(), // Admin approval
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_user", ["userId"]),

  // Coffees
  coffees: defineTable({
    roasterId: v.id("roasters"),
    name: v.string(),
    roast: // light, medium, dark
    origin: v.string(),
    flavors: v.string(),
    description: v.string(),
    price: v.number(), // Price per lb
    active: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_roaster", ["roasterId"]),

  // User favorites (saved coffees)
  favorites: defineTable({
    userId: v.id("users"),
    coffeeId: v.id("coffees"),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_coffee", ["coffeeId"])
    .index("by_user_coffee", ["userId", "coffeeId"]),
});
