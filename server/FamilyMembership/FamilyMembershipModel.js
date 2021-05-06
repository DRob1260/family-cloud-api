import mongoose from "mongoose";
import { FamilyMembershipSchema } from "./FamilyMembershipSchema";

export const FamilyMembershipModel = mongoose.model("FamilyMembership", FamilyMembershipSchema);
