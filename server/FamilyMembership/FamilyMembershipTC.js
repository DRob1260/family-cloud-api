import {composeMongoose} from "graphql-compose-mongoose";
import { FamilyMembershipModel } from "./FamilyMembershipModel";
import { FamilyTC } from "../Family/FamilyTC";
import { UserTC } from "../User/UserTC";

const FamilyMembershipTC = composeMongoose(FamilyMembershipModel, {});

FamilyMembershipTC.addRelation(
    "family",
    {
        resolver: () => FamilyTC.mongooseResolvers.dataLoader(),
        prepareArgs: {
            _id: (source) => source.familyId
        },
        projection: { familyId: 1}
    }
);

FamilyMembershipTC.addRelation(
    "user",
    {
        resolver: () => UserTC.mongooseResolvers.dataLoader(),
        prepareArgs: {
            _id: (source) => source.userId
        },
        projection: { userId: 1 }
    }
);

export {  FamilyMembershipTC };
