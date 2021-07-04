import {UserProfileModel} from "./UserProfile/UserProfileModel";

export const context = async (req) => {
	const auth0User = req.user;

	let currentUser;

	if(auth0User && auth0User.sub) {
		await UserProfileModel.findOne({
			account: {
				auth0: {
					sub: auth0User.sub
				}
			}
		}).then(result => {
			currentUser = result;
		});
	}

	return {
		user: currentUser,
		auth0User: auth0User
	};
};
