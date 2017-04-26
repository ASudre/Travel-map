import express from 'express';
import passport from 'passport';
import models from '../models';
import conf from '../config/conf';
import jwt from 'jsonwebtoken';
import ensureAuthenticated from '../passport/security';

const router = express.Router({mergeParams: true});

passport.serializeUser((user, cb) => {
    cb(null, user.token);
});

passport.deserializeUser((token, cb) => {
    try {
        const payload = jwt.verify(token, conf.authentication.jwtSecret, {issuer: conf.authentication.issuer});
        models.User.findById(payload.sub, (err, user) => {
            if (err) {
                return cb(err);
            }
            cb(null, {
                id: user._id,
                email: user.email,
                countries: user.countries,
            });
        });
    }
    catch(e) {
        cb(e);
    }
});

router.get('/', ensureAuthenticated,
    (req, res, next) => {
        res.json(req.user);
    }
);

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            return res.sendStatus(403);
        }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            return res.json({
                id: user.id,
                email: user.email,
                countries: user.countries,
            });
        });
    })(req, res, next);
});

router.post('/', (req, res) => {
    const {email, password} = req.body;
    const user = new models.User({ email, password });
    return user.save().then(response => res.json(response));
});

router.post('/countries/:country', ensureAuthenticated,
    (req, res, next) => {
        try {
            const country = req.params.country;
            return models.User.findByIdAndUpdate(
                req.user.id,
                {$push: {"countries": country}},
                {safe: true, upsert: true}
            )
            .then((data) => {
                return models.User.findById(req.user.id);
            })
            .then((response) => {
                res.json(response);
            });
        }
        catch(e) {
        }
    }
);

export default router;