import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		email: String
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
