import { composeMongoose } from "graphql-compose-mongoose";
import { PostModel } from "./PostModel";
import { PostFeedTC } from "../PostFeed/PostFeedTC";
import {UserTC} from "../User/UserTC";

const PostTC = composeMongoose(PostModel, {});

PostTC.addRelation(
	"postFeedConnection",
	{
		resolver: () => PostFeedTC.mongooseResolvers.dataLoader(),
		prepareArgs: {
			_id: (source) => (source.postFeedId)
		},
		projection: { postFeedId: 1 }
	}
);

PostTC.addRelation(
	"authorUserConnection",
	{
		resolver: () => UserTC.mongooseResolvers.dataLoader(),
		prepareArgs: {
			_id: (source) => (source.authorUserId)
		},
		projection: { authorUserId: 1 }
	}
);

export { PostTC };
