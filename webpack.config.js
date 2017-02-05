let LiveReloadPlugin = require('webpack-livereload-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router"
        ],
        app: './@Client.js',
        // about: './Components/About/about.scss',
        // layout: './Components/Layout/layout.scss'
    },
    output: {
        path: __dirname + '/_dist',
        publicPath: '/',
        filename: "js/[name].js"
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
        rules: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true']
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
            //allChunks: true
        }),
        new LiveReloadPlugin()
    ]
};