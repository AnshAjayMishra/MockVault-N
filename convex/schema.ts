import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    age: v.optional(v.number()),
    role: v.union(v.literal("candidate"), v.literal("interviewer")), //
    clerkId: v.string(),
   })
   .index("by_clerk_id", ["clerkId"])
    // .index("by_email", ["email"]) // Index for faster email lookups
   
});
