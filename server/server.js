import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from 'express-graphql';
import { Schema } from "./SchemaComposer";
import "regenerator-runtime/runtime.js";

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
    graphqlHTTP(() => {
        return {
            context: { startTime: Date.now() },
            graphiql: true,
            schema: Schema,
            extensions,
        };
    })
);
