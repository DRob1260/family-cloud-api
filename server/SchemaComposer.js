const { SchemaComposer } = require("graphql-compose");
const { UserQueries, UserMutations } = require("./User/User");
const { FamilyQueries, FamilyMutations } = require("./Family/Family");

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...UserQueries,
    ...FamilyQueries
});

schemaComposer.Mutation.addFields({
    ...UserMutations,
    ...FamilyMutations
});

module.exports = schemaComposer.buildSchema();
