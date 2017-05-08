import passport from 'passport';
import User from '../../models/User/User';
import logger from '../../../../conf/logger';

const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(403).json(info);
        }
        return req.logIn(user, (loginErr) => {
            if (loginErr) {
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
    return user.save()
        .then(response => res.json(response))
        .catch((error) => {
            logger.error(`Error while trying to create a user ${error}`);
            if (error.code === 11000) {
                return res.status(500).json({ email: 'User already existing' });
            }
            return res.status(500).json({ _error: `Error code : ${error.code}` });
        });
};

const createCountry = (req, res) => {
    try {
        const country = req.params.country;
        User.find({ _id: req.user.id, 'countries.name': { $regex: new RegExp(country, 'i') } }).then((users) => {
            if (users.length > 0) {
                return res.status(500).json({ country: 'The country already exists !' });
            }
            return User.findByIdAndUpdate(
                    { _id: req.user.id, 'countries.name': country },
                    { $push: { countries: { name: country } } },
                    { safe: true, upsert: true },
                )
                .then(() => User.findById(req.user.id))
                .then((user) => {
                    res.json({ countries: user.countries });
                });
        });
    } catch (e) {
        throw new Error(e);
    }
};

const removeCountry = (req, res) => {
    const country = req.params.country;
    return User.findByIdAndUpdate(
            req.user.id,
            { $pull: { countries: { name: country } } },
            { safe: true, upsert: true },
        )
        .then(() => User.findById(req.user.id))
        .then((user) => {
            res.json({ countries: user.countries });
        });
};

/** *********************
 * Export               *
 ************************
 */
export default {
    createCountry,
    removeCountry,
    createUser,
    logout,
    login,
};
