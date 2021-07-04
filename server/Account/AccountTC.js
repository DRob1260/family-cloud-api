import {composeMongoose} from "graphql-compose-mongoose";
import {AccountModel} from "./AccountModel";
import {UserProfileTC} from "../UserProfile/UserProfileTC";

const AccountTC = composeMongoose(AccountModel, {});

AccountTC.mongooseResolvers.dataLoader.apply()

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

export { AccountTC };
