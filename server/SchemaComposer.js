import { SchemaComposer } from "graphql-compose";
import { UserProfileQueries } from "./UserProfile/UserProfileQueries";
import { UserProfileMutations } from "./UserProfile/UserProfileMutations";
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
import {AccountQueries} from "./Account/AccountQueries";
import {AccountMutations} from "./Account/AccountMutations";

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
	...AccountQueries,
	...UserProfileQueries,
	...FamilyQueries,
	...FamilyMembershipQueries,
	...FamilyEventQueries,
	...PostFeedQueries,
	...PostQueries
});

schemaComposer.Mutation.addFields({
	...AccountMutations,
	...UserProfileMutations,
	...FamilyMutations,
	...FamilyMembershipMutations,
	...FamilyEventMutations,
	...PostFeedMutations,
	...PostMutations
});

export const Schema = schemaComposer.buildSchema();
