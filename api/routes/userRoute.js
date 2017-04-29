import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import models from '../models';
import conf from '../conf/server-configuration';
import ensureAuthenticated from '../passport/security';

const router = express.Router({ mergeParams: true });

passport.serializeUser((user, cb) => cb(null, user.token));

passport.deserializeUser((token, cb) => {
    try {
        const payload = jwt.verify(
            token,
            conf.authentication.jwtSecret,
            { issuer: conf.authentication.issuer },
        );
        return models.User.findById(payload.sub)
        .then((err, user) => {
            if (err) {
                return cb(err);
            }
            return {
                id: user._id, // eslint-disable-line no-underscore-dangle
                email: user.email,
                countries: user.countries,
            };
        });
    } catch (e) {
        return cb(e);
    }
});

router.get('/', ensureAuthenticated,
    (req, res) => res.json(req.user),
);

router.post('/login', (req, res, next) => {
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
});

router.post('/logout', (req, res) => {
    req.logOut();
    return res.json({});
});

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const user = new models.User({ email, password });
    return user.save().then(response => res.json(response));
});

router.post('/countries/:country', ensureAuthenticated,
    (req, res) => {
        try {
            const country = req.params.country;
            return models.User.findByIdAndUpdate(
                req.user.id,
                { $push: { countries: country } },
                { safe: true, upsert: true },
            )
            .then(() => models.User.findById(req.user.id))
            .then((user) => {
                res.json({ countries: user.countries });
            });
        } catch (e) {
            throw new Error(e);
        }
    },
);

export default router;
