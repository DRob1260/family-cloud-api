import mongoose from "mongoose";
import { composeMongoose } from "graphql-compose-mongoose";
// import { FamilyTC } from "../Family/FamilyTC";
// import { UserTC } from "../User/UserTC";

export const FamilyMemberSchema = new mongoose.Schema(
	{
		familyId: String,
		userId: String,
		admin: Boolean
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const FamilyMemberModel = mongoose.model("FamilyMember", FamilyMemberSchema);

export const FamilyMemberTC = composeMongoose(FamilyMemberModel, {});

// FamilyMemberTC.addRelation(
//     "family",
//     {
//         resolver: () => FamilyTC.mongooseResolvers.dataLoader(),
//         prepareArgs: {
//             _id: (source) => source.familyId
//         },
//         projection: { familyId: 1}
//     }
// );

// FamilyMemberTC.addRelation(
//     "user",
//     {
//         resolver: () => UserTC.mongooseResolvers.dataLoader(),
//         prepareArgs: {
//             _id: (source) => source.userId
//         },
//         projection: { userId: 1 }
//     }
// );

export const FamilyMemberQueries = {
	familyMemberById: FamilyMemberTC.mongooseResolvers.findById(),
	familyMemberByIds: FamilyMemberTC.mongooseResolvers.findByIds(),
	familyMemberOne: FamilyMemberTC.mongooseResolvers.findOne(),
	familyMemberMany: FamilyMemberTC.mongooseResolvers.findMany(),
	familyMemberCount: FamilyMemberTC.mongooseResolvers.count(),
	familyMemberPagination: FamilyMemberTC.mongooseResolvers.pagination()
};

export const FamilyMemberMutations = {
	familyMemberCreateOne: FamilyMemberTC.mongooseResolvers.createOne(),
	familyMemberCreateMany: FamilyMemberTC.mongooseResolvers.createMany(),
	familyMemberUpdateById: FamilyMemberTC.mongooseResolvers.updateById(),
	familyMemberUpdateOne: FamilyMemberTC.mongooseResolvers.updateOne(),
	familyMemberUpdateMany: FamilyMemberTC.mongooseResolvers.updateMany(),
	familyMemberRemoveById: FamilyMemberTC.mongooseResolvers.removeById(),
	familyMemberRemoveMany: FamilyMemberTC.mongooseResolvers.removeMany()
};
