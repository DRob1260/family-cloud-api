import mongoose from "mongoose";

export const AccountSchema = new mongoose.Schema(
	{
		firebase: {
			uid: String
		}
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
