import { UserProfileTC } from "./UserProfileTC";

export const UserProfileMutations = {
	userProfileCreateOne: UserProfileTC.mongooseResolvers.createOne(),
	userProfileCreateMany: UserProfileTC.mongooseResolvers.createMany(),
	userProfileCreateRandom: UserProfileTC.getResolver("userCreateRandom"),
	userProfileUpdateById: UserProfileTC.mongooseResolvers.updateById(),
	userProfileUpdateOne: UserProfileTC.mongooseResolvers.updateOne(),
	userProfileUpdateMany: UserProfileTC.mongooseResolvers.updateMany(),
	userProfileRemoveById: UserProfileTC.mongooseResolvers.removeById(),
	userProfileRemoveMany: UserProfileTC.mongooseResolvers.removeMany(),
};
