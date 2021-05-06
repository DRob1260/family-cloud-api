import mongoose from "mongoose";
import { FamilyEventSchema } from "./FamilyEventSchema";

export const FamilyEventModel = mongoose.model("FamilyEvent", FamilyEventSchema);
