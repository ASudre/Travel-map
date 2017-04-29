const conf = process.env.NODE_ENV === 'production' ?
    require('./server-configuration.production').default :
    require('./server-configuration.dev').default;

export default conf;
