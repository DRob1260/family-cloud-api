import admin from "firebase-admin";
import firebaseConfig from "./firebaseConfig.json";

admin.initializeApp({
	credential: admin.credential.cert(firebaseConfig)
});

export const authMiddleware = async (req, res, next) => {
	const header = req.headers?.authorization;
	if(
		header !== "Bearer null" &&
		req.headers?.authorization?.startsWith("Bearer")
	) {
		const token = req.headers.authorization.split("Bearer ")[1];
		try {
			const decodedToken = await admin.auth().verifyIdToken(token);
			req.currentUser = decodedToken;
		} catch(error) {
			console.log(error);
		}

		next();
	}
};


