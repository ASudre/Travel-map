const babelLoaderRule = {
    test: /\.jsx?$/,
    exclude: [/node_modules/],
    use: [{
        loader: 'babel-loader',
        options: {
            presets: ['env', 'react'],
            plugins: ['babel-plugin-transform-object-rest-spread', 'relay'],
        },
    }],
};

const cssLoaderRule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

const fontLoaderRule = {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]',
};

const eslintLoaderRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
          // eslint options (if necessary)
    },
};

export default {
    babelLoaderRule,
    cssLoaderRule,
    fontLoaderRule,
    eslintLoaderRule,
};
