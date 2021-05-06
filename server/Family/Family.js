const mongoose = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");
const { UserTC } = require("../User/User");
const faker = require("faker");

export const FamilySchema = new mongoose.Schema(
    {
        surname: String,
        city: String,
        state: String,
        familyUserIds: {
            type: [String],
            index: true
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const FamilyModel = mongoose.model("Family", FamilySchema);

const FamilyTC = composeMongoose(FamilyModel, {});

FamilyTC.addResolver({
    name: "familyCreateRandom",
    type: FamilyTC,
    args: { record: FamilyTC.getInputType() },
    resolve: async ({ source, args }) => {
        let family = new FamilyModel({
            surname: faker.name.lastName(),
            city: faker.address.city(),
            state: faker.address.state()
        });
        return await family.save();
    },
});

// FamilyTC.addRelation(
//     "familyUsers",
//     {
//         resolver: () => UserTC.mongooseResolvers.dataLoaderMany(),
//         prepareArgs: {
//             _ids: (source) => source.familyUserIds
//         },
//         projection: { familyUserIds: 1 }
//     }
// );

const FamilyQueries = {
    familyById: FamilyTC.mongooseResolvers.findById(),
    familyByIds: FamilyTC.mongooseResolvers.findByIds(),
    familyOne: FamilyTC.mongooseResolvers.findOne(),
    familyMany: FamilyTC.mongooseResolvers.findMany(),
    familyCount: FamilyTC.mongooseResolvers.count(),
    familyConnection: FamilyTC.mongooseResolvers.connection(),
    familyPagination: FamilyTC.mongooseResolvers.pagination()
}

const FamilyMutations = {
    familyCreateOne: FamilyTC.mongooseResolvers.createOne(),
    familyCreateMany: FamilyTC.mongooseResolvers.createMany(),
    familyCreateRandom: FamilyTC.getResolver("familyCreateRandom"),
    familyUpdateById: FamilyTC.mongooseResolvers.updateById(),
    familyUpdateOne: FamilyTC.mongooseResolvers.updateOne(),
    familyUpdateMany: FamilyTC.mongooseResolvers.updateMany(),
    familyRemoveById: FamilyTC.mongooseResolvers.removeById(),
    familyRemoveMany: FamilyTC.mongooseResolvers.removeMany()
}

module.exports = {
    FamilySchema: FamilySchema,
    FamilyModel: FamilyModel,
    FamilyTC: FamilyTC,
    FamilyQueries: FamilyQueries,
    FamilyMutations: FamilyMutations
}
