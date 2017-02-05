let LiveReloadPlugin = require('webpack-livereload-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack');

module.exports = {
    entry: {
        'app': './@Client.js',
        'vendor': [
            "react",
            "react-dom",
            "react-router"
        ],
    },
    output: {
        path: __dirname + '/_dist',
        publicPath: '/',
        filename: "[name].js"
    },
    // externals: {
    //     "react": 'React',
    //     "react-dom": 'ReactDOM',
    //     "react-router": 'ReactRouter'
    // },
    devServer: {
        contentBase: '_dist'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
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
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin("css/[name].css"),
        new LiveReloadPlugin()
    ]
};