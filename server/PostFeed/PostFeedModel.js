import mongoose from "mongoose";
import { PostFeedSchema } from "./PostFeedSchema";

export const PostFeedModel = mongoose.model("PostFeed", PostFeedSchema);
