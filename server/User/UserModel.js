import mongoose from 'mongoose';
import {UserSchema} from './UserSchema';

export const UserModel = mongoose.model("User", UserSchema);
