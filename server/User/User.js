const mongoose = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");
const faker = require("mongoose");
const { FamilyTC } = require("../Family/Family");

const UserSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        familyId: {
            type: String,
            index: true
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const UserModel = mongoose.model("User", UserSchema);

const UserTC = composeMongoose(UserModel, {});

UserTC.addResolver({
    name: "userCreateRandom",
    type: UserTC,
    args: {record: UserTC.getInputType()},
    resolve: async ({source, args}) => {
        let user = new UserModel({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        });
        return await user.save();
    }
});

UserTC.addRelation(
    "family",
    {
        resolver: () => FamilyTC.mongooseResolvers.dataLoader(),
        prepareArgs: {
            _id: (source) => source.familyId
        },
        projection: { familyId: 1 }
    }
);

const UserQueries = {
    userById: UserTC.mongooseResolvers.findById(),
    userByIds: UserTC.mongooseResolvers.findByIds(),
    userOne: UserTC.mongooseResolvers.findOne(),
    userMany: UserTC.mongooseResolvers.findMany(),
    userCount: UserTC.mongooseResolvers.count(),
    userConnection: UserTC.mongooseResolvers.connection(),
    userPagination: UserTC.mongooseResolvers.pagination()
}

const UserMutations = {
    userCreateOne: UserTC.mongooseResolvers.createOne(),
    userCreateMany: UserTC.mongooseResolvers.createMany(),
    userCreateRandom: UserTC.getResolver("userCreateRandom"),
    userUpdateById: UserTC.mongooseResolvers.updateById(),
    userUpdateOne: UserTC.mongooseResolvers.updateOne(),
    userUpdateMany: UserTC.mongooseResolvers.updateMany(),
    userRemoveById: UserTC.mongooseResolvers.removeById(),
    userRemoveMany: UserTC.mongooseResolvers.removeMany(),
}

module.exports = {
    UserSchema: UserSchema,
    UserModel: UserModel,
    UserTC: UserTC,
    UserQueries: UserQueries,
    UserMutations: UserMutations
}
