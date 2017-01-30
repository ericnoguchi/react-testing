let path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        app: ['./@Client.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist/public/js'),
        publicPath: '/js/',
        filename: "[name].js"
    },
    devServer: {
        contentBase: 'dist/public/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "react",
                        "es2015",
                        "stage-2"
                    ]
                }
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin()
    ]
};