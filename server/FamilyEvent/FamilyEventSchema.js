import mongoose from "mongoose";

export const FamilyEventSchema = new mongoose.Schema(
	{
		familyId: String,
		dateStart: Date,
		dateEnd: Date,
		name: String,
		description: String,
		postFeedIds: [String]
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
