/* eslint-disable global-require */
const conf = () => {
    switch (process.env.NODE_ENV) {
    case 'production':
        return require('./server-configuration.production').default;
    case 'test':
        return require('./server-configuration.tests').default;
    default:
        return require('./server-configuration.dev').default;
    }
};

export default conf();
