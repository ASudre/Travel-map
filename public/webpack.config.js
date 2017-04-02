const config = {
    entry: './main.js',

    output: {
        path:'./',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080,
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'es2017', 'react'],
                    plugins: ['babel-plugin-transform-object-rest-spread'],
                },
            },
        ],
    },
};

module.exports = config;