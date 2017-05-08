const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main/main.js',

    output: {
        path: path.join(__dirname, '/../build/public/assets'),
        filename: 'index.js',
        publicPath: '/assets',
        sourceMapFilename: '[name].map',
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true,
            },
            compress: {
                screw_ie8: true,
            },
            comments: false,
        }),
    ],

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
