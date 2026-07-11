import { Id } from "./_generated/dataModel";

export async function handleUserId(ctx: { auth: any }) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    return null;
  }
  return identity.subject as Id<"users">;
}
