const path = require('path');

const config = {
    entry: './src/main/main.js',

    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'index.js',
        publicPath: '/assets',
    },

    devServer: {
        inline: true,
        port: 8081,
        contentBase: path.resolve(__dirname, '.'),
        public: 'travel.map.com:8081',
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
                        presets: ['env', 'react'],
                        plugins: ['babel-plugin-transform-object-rest-spread', 'relay'],
                    },
                }],
            },
        ],
    },
};

module.exports = config;
