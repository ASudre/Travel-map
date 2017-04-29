export default {
    environment: process.env.NODE_ENV ? process.env.NODE_ENV : 'dev',
    authentication: {
        jwtSecret: 'Pw2HwgGdor8ZDWT4kRJmM3qxHxCifasm7PnYSSgR',
        issuer: 'travelMap',
    },
    database: {
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'travel-map',
    },
    session: {
        secret: 'QpoXwHS3kiCd549CxhWYtTKXMcpM88NP849nwcWD',
    },
};
