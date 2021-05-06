import {composeMongoose} from "graphql-compose-mongoose";
import {UserModel} from "./UserModel";
import faker from "faker";
import {FamilyMembershipTC} from "../FamilyMembership/FamilyMembershipTC";

const UserTC = composeMongoose(UserModel, {});

UserTC.addResolver({
	name: "userCreateRandom",
	type: UserTC,
	args: {record: UserTC.getInputType()},
	resolve: async () => {
		let user = new UserModel({
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email()
		});
		return await user.save();
	}
});

UserTC.addRelation(
	"familyMembershipConnections",
	{
		resolver: () => FamilyMembershipTC.mongooseResolvers.findMany(),
		prepareArgs: {
			filter: (source) => ({ userId: source._id })
		},
		projection: { _id: 1 }
	}
);

export { UserTC };
