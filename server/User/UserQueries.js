import { UserTC } from "./UserTC";

export const UserQueries = {
	userById: UserTC.mongooseResolvers.findById(),
	userByIds: UserTC.mongooseResolvers.findByIds(),
	userOne: UserTC.mongooseResolvers.findOne(),
	userMany: UserTC.mongooseResolvers.findMany(),
	userCount: UserTC.mongooseResolvers.count(),
	userConnection: UserTC.mongooseResolvers.connection(),
	userPagination: UserTC.mongooseResolvers.pagination(),
	userCurrent: UserTC.getResolver("userCurrent")
};
