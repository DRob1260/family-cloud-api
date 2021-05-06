import mongoose from "mongoose";

export const PostFeedSchema = new mongoose.Schema(
	{
		active: Boolean,
		adminUserIds: [String]
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
