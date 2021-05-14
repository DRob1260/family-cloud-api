import mongoose from "mongoose";
const jwt = require('jsonwebtoken');

export const UserSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		loginProviders: {
			facebook: {
				id: String,
				token: String
			}
		}
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

UserSchema.methods.generateJWT = function () {
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDate(today.getDate() + 60);

	return jwt.sign({
		email: this.email,
		id: this._id,
		exp: parseInt(expirationDate.getTime() / 1000, 10),
	}, 'secret');
}

UserSchema.statics.upsertFbUser = async function ({ accessToken, refreshToken, profile }) {
	const User = this;

	const user = await User.findOne({ 'loginProvider.facebook.id': profile.id });

	// no user was found, lets create a new one
	if (!user) {
		const newUser = await User.create({
			firstName: profile.first_name,
			lastName: profile.last_name,
			email: profile.emails[0].value,
			'loginProvider.facebook': {
				id: profile.id,
				token: accessToken,
			},
		});

		return newUser;
	}
	return user;
};
