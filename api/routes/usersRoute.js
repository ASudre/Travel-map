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
        console.log('token :', token);
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

router.post('/:userId/countries/:country', //ensureAuthenticated,
    (req, res, next) => {
        try {
            const userId = req.params.userId;
            const country = req.params.country;
            console.log(userId, country);
            return models.User.findByIdAndUpdate(
                userId,
                {$push: {"countries": country}},
                {safe: true, upsert: true}
            )
            .then((data) => {
                console.log('data :', data);
                return models.User.findById(userId);
            })
            .then((response) => {
                console.log('response :', response);
                res.json(response);
            });
        }
        catch(e) {
            console.log('e :', e);
        }
    }
);

export default router;