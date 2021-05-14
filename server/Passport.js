import passport from "passport";
import FacebookTokenStrategy from "passport-facebook-token";
import { facebook } from "../variables";

const FacebookTokenStrategyCallback = (accessToken, refreshToken, profile, done) => done(null, {
	accessToken,
	refreshToken,
	profile,
});

passport.use(new FacebookTokenStrategy({
	clientID: facebook.appId,
	clientSecret: facebook.secret,
}, FacebookTokenStrategyCallback));

export const authenticateFacebook = (req, res) => new Promise((resolve, reject) => {
	passport.authenticate('facebook-token', { session: false }, (err, data, info) => {
		if (err) reject(err);
		resolve({ data, info });
	})(req, res);
});

