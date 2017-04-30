import passport from 'passport';
import User from '../../models/User/User';

const login = (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.sendStatus(403);
        }
        return req.logIn(user, (loginErr) => {
            if (err) {
                return next(loginErr);
            }
            return res.json({
                id: user.id,
                email: user.email,
                countries: user.countries,
            });
        });
    })(req, res, next);
};

const logout = (req, res) => {
    req.logOut();
    return res.json({});
};

const createUser = (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    return user.save().then(response => res.json(response));
};

const createCountry = (req, res) => {
    try {
        const country = req.params.country;
        return User.findByIdAndUpdate(
            req.user.id,
            { $push: { countries: { name: country } } },
            { safe: true, upsert: true },
        )
            .then(() => User.findById(req.user.id))
            .then((user) => {
                res.json({ countries: user.countries });
            });
    } catch (e) {
        throw new Error(e);
    }
};

/** *********************
 * Export               *
 ************************
 */
export default {
    createCountry,
    createUser,
    logout,
    login,
};
