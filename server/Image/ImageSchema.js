import mongoose from "mongoose";

export const ImageSchema = new mongoose.Schema(
	{
		url: String,
		source: String,
		sourceId: String
	}
);
