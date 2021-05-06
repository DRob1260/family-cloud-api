import mongoose from "mongoose";
import { PostSchema } from "./PostSchema";

export const PostModel = mongoose.model("PostModel", PostSchema);
