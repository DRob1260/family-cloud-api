const mongoose = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");
const { FamilyTC } = require("../Family/Family");
const { UserTC } = require("../User/User");

const FamilyMemberSchema = new mongoose.Schema(
    {
        familyId: String,
        userId: String,
        admin: Boolean
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const FamilyMemberModel = mongoose.model("FamilyMember", FamilyMemberSchema);

const FamilyMemberTC = composeMongoose(FamilyMemberModel, {});

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

const FamilyMemberQueries = {
    familyMemberById: FamilyMemberTC.mongooseResolvers.findById(),
    familyMemberByIds: FamilyMemberTC.mongooseResolvers.findByIds(),
    familyMemberOne: FamilyMemberTC.mongooseResolvers.findOne(),
    familyMemberMany: FamilyMemberTC.mongooseResolvers.findMany(),
    familyMemberCount: FamilyMemberTC.mongooseResolvers.count(),
    familyMemberPagination: FamilyMemberTC.mongooseResolvers.pagination()
};

const FamilyMemberMutations = {
    familyMemberCreateOne: FamilyMemberTC.mongooseResolvers.createOne(),
    familyMemberCreateMany: FamilyMemberTC.mongooseResolvers.createMany(),
    familyMemberUpdateById: FamilyMemberTC.mongooseResolvers.updateById(),
    familyMemberUpdateOne: FamilyMemberTC.mongooseResolvers.updateOne(),
    familyMemberUpdateMany: FamilyMemberTC.mongooseResolvers.updateMany(),
    familyMemberRemoveById: FamilyMemberTC.mongooseResolvers.removeById(),
    familyMemberRemoveMany: FamilyMemberTC.mongooseResolvers.removeMany()
};

module.exports = {
    FamilyMemberSchema: FamilyMemberSchema,
    FamilyMemberModel: FamilyMemberModel,
    FamilyMemberTC: FamilyMemberTC,
    FamilyMemberQueries: FamilyMemberQueries,
    FamilyMemberMutations: FamilyMemberMutations
}
