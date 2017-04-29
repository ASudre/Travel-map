export default {
    environment: process.env.NODE_ENV,
    authentication: {
        jwtSecret: process.env.JWT_SECRET,
        issuer: 'travelMap',
    },
    database: {
        type: 'mongodb',
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_POST,
        database: process.env.MONGODB_DATABASE,
    },
    session: {
        secret: process.env.SESSION_SECRET,
    },
};