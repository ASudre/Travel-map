import passport from 'passport';
import jwt from 'jsonwebtoken';
import conf from '../../../conf/server-configuration';
import User from '../models/User/User';

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.sendStatus(403);
};

passport.serializeUser((user, cb) => cb(null, user.token));
passport.deserializeUser((token, callback) => {
    try {
        const payload = jwt.verify(
            token,
            conf.authentication.jwtSecret,
            { issuer: conf.authentication.issuer },
        );

        return User.findById(payload.sub)
            .then((user) => {
                callback(null,
                    {
                        id: user._id,
                        email: user.email,
                        countries: user.countries,
                    },
                );
            });
    } catch (e) {
        return callback(e);
    }
});

/** *********************
 * Export               *
 ************************
 */
export default ensureAuthenticated;
