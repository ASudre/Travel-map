import express from 'express';
import mongoose from 'mongoose';
import mongoSession from 'mongoose-express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';

import conf from '../../conf/server-configuration';
import routes from './routes/routes';
import localStrategy from './passport/strategy/localStrategy';
import logger from '../../conf/logger';

const app = express();
const port = 8080;

/** *********************
 * MongoDB              *
 ************************
 */
const MongooseStore = mongoSession(session.Store);
mongoose.Promise = global.Promise;

mongoose.connect(`${conf.database.type}://${conf.database.host}:${conf.database.port}/${conf.database.database}`);
const mongoStore = new MongooseStore({ connection: mongoose });
app.use(session(
    {
        secret: conf.session.secret,
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
    origin: 'http://travel.map.com:8081',
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser(conf.session.secret));

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

app.listen(port);

logger.info(`Server running on port ${port} on ${conf.environment}`);

app.use((err, req, res) => {
    logger.error(`Error 500, stack : ${err.stack}`);
    res.status(500).send(`An error occurred : ${err.message}`);
});

app.use((req, res) => {
    res.status(404).send('Endpoint not found.');
});
