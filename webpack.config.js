const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === 'production';
const isDevelopment = !isProduction;

module.exports = {
    //https://webpack.js.org/configuration/devtool/
    devtool: isDevelopment ? 'source-map' : false,
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router"
        ],
        app: './@Client.js',
    },
    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve(__dirname, '_dist'),
        publicPath: '/',
        filename: "js/[name].js"
    },
    devServer: {
        contentBase: '_dist'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap!autoprefixer-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true']
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
        }),
        new LiveReloadPlugin()
    ]
};