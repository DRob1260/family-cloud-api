import jwt from "express-jwt";
import jwks from "jwks-rsa";

export const authMiddleware = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: "https://family-cloud.us.auth0.com/.well-known/jwks.json"
	}),
	audience: "family-cloud",
	issuer: "https://family-cloud.us.auth0.com/",
	algorithms: ["RS256"],
	credentialsRequired: false
});

