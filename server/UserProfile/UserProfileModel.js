import mongoose from "mongoose";
import {UserProfileSchema} from "./UserProfileSchema";

export const UserProfileModel = mongoose.model("UserProfile", UserProfileSchema);
