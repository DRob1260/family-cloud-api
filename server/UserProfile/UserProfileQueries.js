import { UserProfileTC } from "./UserProfileTC";

export const UserProfileQueries = {
	userProfileById: UserProfileTC.mongooseResolvers.findById(),
	userProfileByIds: UserProfileTC.mongooseResolvers.findByIds(),
	userProfileOne: UserProfileTC.mongooseResolvers.findOne(),
	userProfileMany: UserProfileTC.mongooseResolvers.findMany(),
	userProfileCount: UserProfileTC.mongooseResolvers.count(),
	userProfileConnection: UserProfileTC.mongooseResolvers.connection(),
	userProfilePagination: UserProfileTC.mongooseResolvers.pagination()
};
