import LocalStrategy from 'passport-local';
import jwt from 'jsonwebtoken';
import conf from '../../../../conf/server-configuration';
import User from '../../models/User/User';

export default new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) =>
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                return done(null, false, { message: 'User not found', email });
            }
            return user.comparePassword(password)
                .then((isMatch) => {
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
                            },
                        );
                        return done(null, {
                            id: user._id,
                            email: user.email,
                            countries: user.countries,
                            token,
                        });
                    }
                    return done(null, false, { message: 'Incorrect password', email });
                });
        }),
);
