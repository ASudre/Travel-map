/* eslint-disable global-require */
const conf = () => {
    switch (process.env.NODE_ENV) {
    case 'production':
        return require('./webapp-configuration.production').default;
    default:
        return require('./webapp-configuration.dev').default;
    }
};

export default conf();
