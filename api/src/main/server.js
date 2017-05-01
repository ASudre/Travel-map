import express from 'express';
import mongoose from 'mongoose';
import mongoSession from 'mongoose-express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';

import routes from './routes/routes';
import localStrategy from './passport/strategy/localStrategy';
import logger from '../../conf/logger';

const startServer = (serverConfiguration) => {
    const app = express();

    /** *********************
     * MongoDB              *
     ************************
     */
    const MongooseStore = mongoSession(session.Store);
    mongoose.Promise = global.Promise;

    const db = mongoose.connect(`${serverConfiguration.database.type}://${serverConfiguration.database.host}:${serverConfiguration.database.port}/${serverConfiguration.database.database}`);
    const mongoStore = new MongooseStore({ connection: mongoose });
    app.use(session(
        {
            secret: serverConfiguration.session.secret,
            resave: true,
            saveUninitialized: false,
            store: mongoStore,
            cookie: {
                domain: 'travel.map.com',
                //maxAge: new Date(Date.now() + 3600000 - new Date().getTimezoneOffset() * 60000),
            },
            key: 'sessionId',
        }),
    );

    app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: logger.stream }));
    app.use(cors({
        origin: `${serverConfiguration.webApp.baseUrl}:${serverConfiguration.webApp.port}`,
        credentials: true,
    }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(cookieParser(serverConfiguration.session.secret));

    /** *********************
     * Passport             *
     ************************
     */
    passport.use(localStrategy);
    app.use(passport.initialize());
    app.use(passport.session());

    /** *********************
     * Routes               *
     ************************
     */
    app.use('/api', routes);

    const serverUrl = serverConfiguration.server.baseUrl;
    const serverPort = serverConfiguration.server.port;

    logger.info(`Server running on port ${serverUrl}:${serverConfiguration.server.port} on ${serverConfiguration.environment}`);

    app.use((err, req, res) => {
        logger.error(`Error 500, stack : ${err.stack}`);
        res.sendStatus(500).send(`An error occurred : ${err.message}`);
    });

    app.use((req, res) => {
        res.status(404).send('Endpoint not found.');
    });

    return new Promise((resolve) => {
        // start server
        const server = app.listen(serverPort, () => {
            resolve({
                stop() {
                    return new Promise((stopResolve) => {
                        server.close(() => {
                            db.disconnect();
                            stopResolve();
                        });
                    });
                },
            });
        });
    });
};

export default startServer;
