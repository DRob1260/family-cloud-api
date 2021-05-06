import { composeMongoose } from "graphql-compose-mongoose";
import { PostFeedModel } from "./PostFeedModel";
import { UserTC } from "../User/UserTC";
import {PostTC} from "../Post/PostTC";

const PostFeedTC = composeMongoose(PostFeedModel, {});

PostFeedTC.addRelation(
	"adminUserConnections",
	{
		resolver: () => UserTC.mongooseResolvers.dataLoaderMany(),
		prepareArgs: {
			_ids: (source) => (source.adminUserIds)
		},
		projection: { adminUserIds: 1 }
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
