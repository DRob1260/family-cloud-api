import mongoose from "mongoose";

export const UserProfileSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		accountId: String
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
