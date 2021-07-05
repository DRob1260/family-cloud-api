import { composeMongoose } from "graphql-compose-mongoose";
import { PostFeedModel } from "./PostFeedModel";
import { UserProfileTC } from "../UserProfile/UserProfileTC";
import {PostTC} from "../Post/PostTC";

const PostFeedTC = composeMongoose(PostFeedModel, {});

PostFeedTC.addRelation(
	"adminUserConnections",
	{
		resolver: () => UserProfileTC.mongooseResolvers.findMany(),
		prepareArgs: {
			_ids: (source) => (source.adminAccountIds)
		},
		projection: { adminAccountIds: 1 }
	}
);

PostFeedTC.addRelation(
	"postConnections",
	{
		resolver: () => PostTC.mongooseResolvers.findMany(),
		prepareArgs: {
			filter: (source) => ({postFeedId: source._id})
		},
		projection: { _id: 1 }
	}
);

export { PostFeedTC };
