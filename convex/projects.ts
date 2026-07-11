import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    const userId = identity.subject as Id<"users">;
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});

export const addProject = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }
    const userId = identity.subject as Id<"users">;
    return await ctx.db.insert("projects", {
      userId,
      name: args.name,
      type: "user",
    });
  },
});
