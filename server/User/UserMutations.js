import { UserTC } from './UserTC';

export const UserMutations = {
    userCreateOne: UserTC.mongooseResolvers.createOne(),
    userCreateMany: UserTC.mongooseResolvers.createMany(),
    userCreateRandom: UserTC.getResolver("userCreateRandom"),
    userUpdateById: UserTC.mongooseResolvers.updateById(),
    userUpdateOne: UserTC.mongooseResolvers.updateOne(),
    userUpdateMany: UserTC.mongooseResolvers.updateMany(),
    userRemoveById: UserTC.mongooseResolvers.removeById(),
    userRemoveMany: UserTC.mongooseResolvers.removeMany(),
}
