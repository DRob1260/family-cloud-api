import {composeMongoose} from "graphql-compose-mongoose";
import {AccountModel} from "./AccountModel";
import {UserProfileTC} from "../UserProfile/UserProfileTC";
import {FamilyMembershipTC} from "../FamilyMembership/FamilyMembershipTC";

const AccountTC = composeMongoose(AccountModel, {});

AccountTC.addRelation(
	"userProfileConnection",
	{
		resolver: () => UserProfileTC.mongooseResolvers.findOne(),
		prepareArgs: {
			accountId: (source) => (source._id)
		},
		projection: { _id: 1 }
	}
);

AccountTC.addRelation(
	"familyMembershipConnections",
	{
		resolver: () => FamilyMembershipTC.mongooseResolvers.findMany(),
		prepareArgs: {
			filter: (source) => ({ accountId: source._id })
		},
		projection: { _id: 1 }
	}
);

export { AccountTC };
