import { FamilyEventModel } from "./FamilyEventModel";
import { composeMongoose } from "graphql-compose-mongoose";
import { FamilyTC } from "../Family/FamilyTC";
import {PostFeedTC} from "../PostFeed/PostFeedTC";

const FamilyEventTC = composeMongoose(FamilyEventModel, {});

FamilyEventTC.addRelation(
	"familyConnection",
	{
		resolver: () => FamilyTC.mongooseResolvers.dataLoader(),
		prepareArgs: {
			_id: (source) => source.familyId
		},
		projection: { familyId: 1 }
	}
);

FamilyEventTC.addRelation(
	"postFeedConnections",
	{
		resolver: () => PostFeedTC.mongooseResolvers.dataLoaderMany(),
		prepareArgs: {
			_ids: (source) => (source.postFeedIds)
		},
		projection: { postFeedIds: 1 }
	}
);

export { FamilyEventTC };
