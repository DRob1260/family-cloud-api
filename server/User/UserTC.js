import {composeMongoose} from "graphql-compose-mongoose";
import {UserModel} from "./UserModel";
import faker from "faker";
import {FamilyTC} from "../Family/FamilyTC";

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
	"family",
	{
		resolver: () => FamilyTC.mongooseResolvers.dataLoader(),
		prepareArgs: {
			_id: (source) => source.familyId
		},
		projection: { familyId: 1 }
	}
);

export { UserTC };
