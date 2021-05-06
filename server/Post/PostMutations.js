import { PostTC} from "./PostTC";

export const PostMutations = {
	postCreateOne: PostTC.mongooseResolvers.createOne(),
	postCreateMany: PostTC.mongooseResolvers.createMany(),
	postUpdateById: PostTC.mongooseResolvers.updateById(),
	postUpdateOne: PostTC.mongooseResolvers.updateOne(),
	postUpdateMany: PostTC.mongooseResolvers.updateMany(),
	postRemoveById: PostTC.mongooseResolvers.removeById(),
	postRemoveMany: PostTC.mongooseResolvers.removeMany()
};
