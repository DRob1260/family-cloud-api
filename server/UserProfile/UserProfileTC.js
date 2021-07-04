import {composeMongoose} from "graphql-compose-mongoose";
import {UserProfileModel} from "./UserProfileModel";
import faker from "faker";
import {FamilyMembershipTC} from "../FamilyMembership/FamilyMembershipTC";
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
	"familyMembershipConnections",
	{
		resolver: () => FamilyMembershipTC.mongooseResolvers.findMany(),
		prepareArgs: {
			filter: (source) => ({ accountId: source._id })
		},
		projection: { _id: 1 }
	}
);

UserProfileTC.addRelation(
	"accountConnection",
	{
		resolver: () => AccountTC.mongooseResolvers.dataLoader(),
		prepareArgs: {
			_id: (source) => source.accountId
		},
		projection: {accountId: 1}
	}
);

export { UserProfileTC };
