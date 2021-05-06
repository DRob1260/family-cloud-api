import { SchemaComposer } from 'graphql-compose';
import { UserQueries } from "./User/UserQueries";
import { UserMutations } from './User/UserMutations';
import { FamilyMutations } from "./Family/FamilyMutations";
import { FamilyQueries } from "./Family/FamilyQueries";

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...UserQueries,
    ...FamilyQueries
});

schemaComposer.Mutation.addFields({
    ...UserMutations,
    ...FamilyMutations
});

export const Schema = schemaComposer.buildSchema();
