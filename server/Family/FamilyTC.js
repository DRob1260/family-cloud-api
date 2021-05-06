import {FamilyModel} from "./FamilyModel";
import {composeMongoose} from "graphql-compose-mongoose";
import faker from "faker";
import {FamilyMembershipTC} from "../FamilyMembership/FamilyMembershipTC";
import {FamilyEventTC} from "../FamilyEvent/FamilyEventTC";

const FamilyTC = composeMongoose(FamilyModel, {});

FamilyTC.addResolver({
	name: "familyCreateRandom",
	type: FamilyTC,
	args: { record: FamilyTC.getInputType() },
	resolve: async () => {
		let family = new FamilyModel({
			surname: faker.name.lastName(),
			city: faker.address.city(),
			state: faker.address.state()
		});
		return await family.save();
	},
});

FamilyTC.addRelation(
	"familyMembershipConnections",
	{
		resolver: () => FamilyMembershipTC.mongooseResolvers.findMany(),
		prepareArgs: {
			filter: (source) => ({ familyId: source._id })
		},
		projection: { _id: 1 }
	}
);

FamilyTC.addRelation(
	"familyEventConnections",
	{
		resolver: () => FamilyEventTC.mongooseResolvers.findMany(),
		prepareArgs: {
			filter: (source) => ({ familyId: source._id })
		},
		projection: { _id: 1 }
	}
);

export { FamilyTC };
