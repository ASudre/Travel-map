const path = require('path');

const config = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'index.js',
        publicPath: '/assets',
    },

    devServer: {
        inline: true,
        port: 8081,
        contentBase: path.resolve(__dirname, '.'),
    },

    devtool: 'sourceMap',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'es2017', 'react'],
                        plugins: ['babel-plugin-transform-object-rest-spread', 'relay'],
                    },
                }],
            },
        ],
    },
};

module.exports = config;