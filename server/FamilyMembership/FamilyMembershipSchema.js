import mongoose from "mongoose";

export const FamilyMembershipSchema = new mongoose.Schema(
	{
		familyId: String,
		accountId: String,
		admin: Boolean
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
