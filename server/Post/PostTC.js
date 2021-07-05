import { composeMongoose } from "graphql-compose-mongoose";
import { PostModel } from "./PostModel";
import { PostFeedTC } from "../PostFeed/PostFeedTC";
import {AccountTC} from "../Account/AccountTC";

const PostTC = composeMongoose(PostModel, {});

PostTC.addRelation(
	"postFeedConnection",
	{
		resolver: () => PostFeedTC.mongooseResolvers.findById(),
		prepareArgs: {
			_id: (source) => (source.postFeedId)
		},
		projection: { postFeedId: 1 }
	}
);

PostTC.addRelation(
	"authorAccountConnection",
	{
		resolver: () => AccountTC.mongooseResolvers.findById(),
		prepareArgs: {
			_id: (source) => (source.authorAccountId)
		},
		projection: { authorAccountId: 1 }
	}
);

export { PostTC };
