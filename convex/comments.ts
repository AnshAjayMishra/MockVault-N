import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";
import { v } from "convex/values";

export const getComments = query({
  args: { interviewId: v.id("interviews") },
  handler: async (ctx, args) => {
    const { interviewId } = args;
    
    const comments = await ctx.db
      .query("comments")
      .filter((q) => q.eq(q.field("interviewId"), interviewId))
      .collect();
    
    return comments;
  },
});

export const addComment = mutation({
  args: { 
    interviewId: v.id("interviews"),
    content: v.string(),
    rating: v.number(),
    interviewerId: v.string()
  },
  handler: async (ctx, args) => {
    const { interviewId, content, rating, interviewerId } = args;
    
    const commentId = await ctx.db.insert("comments", {
      interviewId,
      content,
      rating,
      interviewerId
    });
    
    return commentId;
  },
});