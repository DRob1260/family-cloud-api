import {composeMongoose} from "graphql-compose-mongoose";
import { FamilyMembershipModel } from "./FamilyMembershipModel";
import { FamilyTC } from "../Family/FamilyTC";
import {AccountTC} from "../Account/AccountTC";

const FamilyMembershipTC = composeMongoose(FamilyMembershipModel, {});

FamilyMembershipTC.addRelation(
	"familyConnection",
	{
		resolver: () => FamilyTC.mongooseResolvers.findById(),
		prepareArgs: {
			_id: (source) => source.familyId
		},
		projection: { familyId: 1}
	}
);

FamilyMembershipTC.addRelation(
	"accountConnection",
	{
		resolver: () => AccountTC.mongooseResolvers.findById(),
		prepareArgs: {
			_id: (source) => source.accountId
		},
		projection: { accountId: 1 }
	}
);

export {  FamilyMembershipTC };
