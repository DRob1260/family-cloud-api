import {composeMongoose} from "graphql-compose-mongoose";
import {UserProfileModel} from "./UserProfileModel";
import faker from "faker";
import {AccountTC} from "../Account/AccountTC";

const UserProfileTC = composeMongoose(UserProfileModel, {});

UserProfileTC.addResolver({
	name: "userCreateRandom",
	type: UserProfileTC,
	args: {record: UserProfileTC.getInputType()},
	resolve: async () => {
		let user = new UserProfileModel({
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email()
		});
		return await user.save();
	}
});

UserProfileTC.addRelation(
	"accountConnection",
	{
		resolver: () => AccountTC.mongooseResolvers.findById(),
		prepareArgs: {
			_id: (source) => source.accountId
		},
		projection: {accountId: 1}
	}
);

export { UserProfileTC };
