import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getLabels = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    const userId = identity.subject as Id<"users">;
    return await ctx.db
      .query("labels")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});

export const addLabel = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }
    const userId = identity.subject as Id<"users">;
    return await ctx.db.insert("labels", {
      userId,
      name: args.name,
      type: "user",
    });
  },
});
