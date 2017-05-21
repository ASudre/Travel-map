import path from 'path';
import webpackRules from './webpackRules';

const config = {
    entry: path.resolve(__dirname, '../src/main/main.js'),

    output: {
        path: path.resolve(__dirname, '../dist/assets'),
        filename: 'index.js',
        publicPath: '/assets',
    },

    devServer: {
        inline: true,
        port: 8081,
        contentBase: path.resolve(__dirname, '../'),
        public: 'travel.map.com:8081',
    },

    devtool: 'cheap-module-inline-source-map',

    module: {
        rules: [
            webpackRules.babelLoaderRule,
            webpackRules.cssLoaderRule,
            webpackRules.fontLoaderRule,
            webpackRules.eslintLoaderRule,
        ],
    },
};

export default config;
