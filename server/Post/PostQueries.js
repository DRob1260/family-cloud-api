import { PostTC } from "./PostTC";

export const PostQueries = {
	postById: PostTC.mongooseResolvers.findById(),
	postByIds: PostTC.mongooseResolvers.findByIds(),
	postOne: PostTC.mongooseResolvers.findOne(),
	postMany: PostTC.mongooseResolvers.findMany(),
	postCount: PostTC.mongooseResolvers.count(),
	postConnection: PostTC.mongooseResolvers.connection(),
	postPagination: PostTC.mongooseResolvers.pagination()
};
