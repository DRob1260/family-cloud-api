import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		familyId: {
			type: String,
			index: true
		}
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
