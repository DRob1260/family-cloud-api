import { FamilyEventModel } from "./FamilyEventModel";
import { composeMongoose } from "graphql-compose-mongoose";
import { FamilyTC } from "../Family/FamilyTC";

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

export { FamilyEventTC };
