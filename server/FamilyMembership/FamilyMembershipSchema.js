import mongoose from "mongoose";

export const FamilyMembershipSchema = new mongoose.Schema(
	{
		familyId: String,
		userId: String,
		admin: Boolean
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
