export default {
    authentication: {
        jwtSecret: 'Pw2HwgGdor8ZDWT4kRJmM3qxHxCifasm7PnYSSgR',
        issuer: 'travelMap',
    },
    storage: {
        type: 'mongodb',
        baseUrl: 'localhost',
        port: 27017,
        database: 'travel-map',
    },
    session: {
        secret: 'QpoXwHS3kiCd549CxhWYtTKXMcpM88NP849nwcWD',
    },
};