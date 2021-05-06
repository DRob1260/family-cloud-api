import { SchemaComposer } from "graphql-compose";
import { UserQueries } from "./User/UserQueries";
import { UserMutations } from "./User/UserMutations";
import { FamilyMutations } from "./Family/FamilyMutations";
import { FamilyQueries } from "./Family/FamilyQueries";
import { FamilyMembershipQueries } from "./FamilyMembership/FamilyMembershipQueries";
import { FamilyMembershipMutations } from "./FamilyMembership/FamilyMembershipMutations";
import { FamilyEventQueries } from "./FamilyEvent/FamilyEventQueries";
import { FamilyEventMutations } from "./FamilyEvent/FamilyEventMutations";
import { PostFeedQueries } from "./PostFeed/PostFeedQueries";
import { PostFeedMutations } from "./PostFeed/PostFeedMutations";
import { PostQueries } from "./Post/PostQueries";
import { PostMutations } from "./Post/PostMutations";

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
	...UserQueries,
	...FamilyQueries,
	...FamilyMembershipQueries,
	...FamilyEventQueries,
	...PostFeedQueries,
	...PostQueries
});

schemaComposer.Mutation.addFields({
	...UserMutations,
	...FamilyMutations,
	...FamilyMembershipMutations,
	...FamilyEventMutations,
	...PostFeedMutations,
	...PostMutations
});

export const Schema = schemaComposer.buildSchema();
