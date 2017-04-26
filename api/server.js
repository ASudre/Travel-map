'use strict';

import conf from './config/conf';
import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import mongoSession from 'mongoose-express-session';
import passport from 'passport';
import localStrategy from './passport/strategy/localStrategy';

import logger from './config/logger';
import morgan from 'morgan';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';

const app = express();
const port = 8080;
const MongooseStore = mongoSession(session.Store);

mongoose.Promise = global.Promise;
mongoose.connect(`${conf.storage.type}://${conf.storage.baseUrl}:${conf.storage.port}/${conf.storage.database}`);
const mongoStore = new MongooseStore({connection: mongoose});

passport.use(localStrategy);

app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { "stream": logger.stream }));
app.use(cors({
    origin: 'http://travel.map.com:8081',
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser(conf.session.secret));
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
    }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

app.use(express.static(__dirname + '/../public'));
    // maxAge: '0',
    // setHeaders: (res, path) => {
        // const mimeType = serveStatic.mime.lookup(path || '');
        // const cacheControl = cacheControlByMimeType[mimeType];
        // if (cacheControl) {
        //     res.setHeader('Cache-Control', 'public, max-age=' + cacheControl)
        // }
//     },
// }));


app.listen(port);

logger.info(`Server running on port ${port}`);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`An error occurred : ${err.message}`);
});

app.use((req, res, next) => {
    res.status(404).send('Endpoint not found.');
});
