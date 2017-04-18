'use strict';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import mongoose from 'mongoose';
import { makeExecutableSchema } from 'graphql-tools';
import serveStatic from 'serve-static';

import models from './models';

import graphqlSchema from './graphql/schema.graphql';
import createResolvers from './graphql/resolvers';

const server = express();

//server.route(routes);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/travel-map');

const executableSchema = makeExecutableSchema({
    typeDefs: [graphqlSchema],
    resolvers: createResolvers(models),
});

server.use('/api', graphqlHTTP(
    {
        schema: executableSchema,
        graphiql: true,
    })
);

server.use(express.static(__dirname + '/../public'));
    // maxAge: '0',
    // setHeaders: (res, path) => {
        // const mimeType = serveStatic.mime.lookup(path || '');
        // const cacheControl = cacheControlByMimeType[mimeType];
        // if (cacheControl) {
        //     res.setHeader('Cache-Control', 'public, max-age=' + cacheControl)
        // }
//     },
// }));


server.listen(8080);

console.log("The GraphQL Server is running.");
