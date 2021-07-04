import mongoose from "mongoose";
import {AccountSchema} from "./AccountSchema";

export const AccountModel = mongoose.model("AccountModel", AccountSchema);
