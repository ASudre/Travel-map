import { conf } from '../config/conf';
import jwt from 'jsonwebtoken';

const resolvers = (models) => ({
    Query: {
        getUserById(root, { id }) {
            return models.User.findById(id).then((response) => response);
        },
        getUserByEmail(root, { email }) {
            return models.User.findOne({ email }).then((response) => response);
        },
    },
    Mutation: {
        createUser(root, args) {
            const user = new models.User(args);
            return user.save().then((response) => response);
        },
        addUserCountry(root, { userId, countryName }) {
            return models.User.findByIdAndUpdate(
                userId,
                {$push: {"countries": countryName}},
                {safe: true, upsert: true}
            )
            .catch(e => {
                console.error(e.message);
                throw new Error(`Couldn't add country ${countryName} to user of id : ${userId}`);
            });
        },
        createToken(root, { username, password }) {
            return models.User.findOne({ email: username })
            .then(user => {
                return user.comparePassword(password)
                .then(isMatch => {
                    if (isMatch) {
                        return jwt.sign(
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
                    }
                    else {
                        throw new Error("Wrong password");
                    }
                });
            });
        },
    },
});

module.exports = resolvers;