import mongoose from "mongoose";
import {ImageSchema} from "../Image/ImageSchema";

export const PostSchema = new mongoose.Schema(
	{
		postFeedId: String,
		authorUserId: String,
		message: String,
		images: [ImageSchema]
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
