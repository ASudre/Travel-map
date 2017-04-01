'use strict';

import Hapi from 'hapi';
import Good from 'good';
import mongoose from 'mongoose';
import { apolloHapi, graphiqlHapi } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

import models from './models';
import routes from './routes';

import graphqlSchema from './graphql/schema.graphql';
import createResolvers from './graphql/resolvers';

const server = new Hapi.Server();
server.connection(
    {
        port: 3001,
        host: 'localhost',
    }
);

server.route(routes);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/haveyoubetDotcom');

const executableSchema = makeExecutableSchema({
    typeDefs: [graphqlSchema],
    resolvers: createResolvers(models),
});

server.register({
    register: apolloHapi,
    options: {
        path: '/graphql',
        apolloOptions: () => ({
            pretty: true,
            schema: executableSchema,
        }),
    },
});

server.register({
    register: graphiqlHapi,
    options: {
        path: '/graphiql',
        graphiqlOptions: {
            endpointURL: '/graphql',
        },
    },
});

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*',
                }],
            }, {
                module: 'good-console',
            }, 'stdout'],
        },
    },
}, (err) => {
    if (err) {
        throw err; // something bad happened loading the plugin
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    server.log('info', 'Server running at: ' + server.info.uri);
});
