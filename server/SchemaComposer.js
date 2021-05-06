import { SchemaComposer } from "graphql-compose";
import { UserQueries } from "./User/UserQueries";
import { UserMutations } from "./User/UserMutations";
import { FamilyMutations } from "./Family/FamilyMutations";
import { FamilyQueries } from "./Family/FamilyQueries";
import { FamilyMembershipQueries } from "./FamilyMembership/FamilyMembershipQueries";
import { FamilyMembershipMutations } from "./FamilyMembership/FamilyMembershipMutations";

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
	...UserQueries,
	...FamilyQueries,
	...FamilyMembershipQueries
});

schemaComposer.Mutation.addFields({
	...UserMutations,
	...FamilyMutations,
	...FamilyMembershipMutations
});

export const Schema = schemaComposer.buildSchema();
