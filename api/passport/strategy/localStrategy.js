////////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////////

import LocalStrategy from 'passport-local';
import conf from '../../config/conf';
import jwt from 'jsonwebtoken';
import models from '../../models';

export default new LocalStrategy({ usernameField: 'email',  passwordField: 'password' }, (email, password, done) => {
    return models.User.findOne({ email })
        .then(user => {
            if(!user) {
                return done(null, false, { message: 'User not found', email: email });
            }
            return user.comparePassword(password)
            .then(isMatch => {
                if (isMatch) {
                    const token = jwt.sign(
                        {
                            sub: user.id,
                            iat: Math.floor(Date.now() / 1000) - 30,
                        },
                        conf.authentication.jwtSecret,
                        {
                            issuer: 'travelMap',
                            algorithm: 'HS256',
                        }
                    );
                    return done(null, {
                        id: user._id,
                        email: user.email,
                        countries: user.countries,
                        token,
                    });
                }
                else {
                    return done(null, false, { message: 'Incorrect password', email: email });
                }
            });
        });
});