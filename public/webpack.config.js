module.exports = (env) => {
    if(env) {
        return require(`./webpack.${env}.js`);
    }
    return require('./webpack.dev.js');
};
