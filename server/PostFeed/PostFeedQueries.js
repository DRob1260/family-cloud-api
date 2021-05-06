import {PostFeedTC} from "./PostFeedTC";

export const PostFeedQueries = {
	postFeedById: PostFeedTC.mongooseResolvers.findById(),
	postFeedByIds: PostFeedTC.mongooseResolvers.findByIds(),
	postFeedOne: PostFeedTC.mongooseResolvers.findOne(),
	postFeedMany: PostFeedTC.mongooseResolvers.findMany(),
	postFeedCount: PostFeedTC.mongooseResolvers.count(),
	postFeedConnection: PostFeedTC.mongooseResolvers.connection(),
	postFeedPagination: PostFeedTC.mongooseResolvers.pagination()
};
