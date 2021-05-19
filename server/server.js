import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import {Schema} from "./SchemaComposer";
import cors from "cors";
import {authMiddleware} from "./AuthMiddleware";
import "regenerator-runtime/runtime.js";
import * as bodyParser from "body-parser";
import {context} from "./Context";

const app = express();

app.use(cors());

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

if(process.env.LOCAL) {
	app.use(
		"/schema",
		graphqlHTTP( () => {
			return {
				schema: Schema
			}
		})
	);
}

app.use(
	"/graphql",
	bodyParser.json(),
	authMiddleware,
	graphqlHTTP(async (req) => {
		const c = await context(req);
		return {
			context: c,
			graphiql: true,
			schema: Schema,
		};
	})
);
