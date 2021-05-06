import {PostFeedTC} from "./PostFeedTC";

export const PostFeedMutations = {
	postFeedCreateOne: PostFeedTC.mongooseResolvers.createOne(),
	postFeedCreateMany: PostFeedTC.mongooseResolvers.createMany(),
	postFeedUpdateById: PostFeedTC.mongooseResolvers.updateById(),
	postFeedUpdateMany: PostFeedTC.mongooseResolvers.updateMany(),
	postFeedRemoveById: PostFeedTC.mongooseResolvers.removeById(),
	postFeedRemoveMany: PostFeedTC.mongooseResolvers.removeMany()
};
