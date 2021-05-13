import mongoose from "mongoose";

export const PostFeedSchema = new mongoose.Schema(
	{
		active: Boolean,
		name: String,
		description: String,
		adminUserIds: [String]
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
