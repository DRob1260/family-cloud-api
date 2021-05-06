import mongoose from "mongoose";

export const FamilySchema = new mongoose.Schema(
	{
		surname: String,
		city: String,
		state: String,
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
