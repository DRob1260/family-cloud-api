import mongoose from "mongoose";
import { FamilySchema } from "./FamilySchema";

export const FamilyModel = mongoose.model("Family", FamilySchema);
