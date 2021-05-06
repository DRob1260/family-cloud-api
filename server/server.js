const express = require("express");
const mongoose = require("mongoose");
const SchemaComposer = require("./SchemaComposer");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const extensions = ({ context }) => {
    return {
        runTime: Date.now() - context.startTime,
    };
};

app.listen(5000, async () => {
    console.log("server is running ", 5000);
    await mongoose.connect("mongodb://localhost:27017/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);

app.use(
    "/graphql",
    graphqlHTTP((request) => {
        return {
            context: { startTime: Date.now() },
            graphiql: true,
            schema: SchemaComposer,
            extensions,
        };
    })
);
