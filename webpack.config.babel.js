import ExtractTextPlugin from 'extract-text-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import path from 'path';
import webpack from 'webpack';

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === 'production';
const isDevelopment = !isProduction;

export default {
    //https://webpack.js.org/configuration/devtool/
    devtool: isDevelopment ? 'source-map' : false,
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router"
        ],
        'app': ['./@Client.js'],
    },
    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve(__dirname, '_dist'),
        publicPath: '',
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
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ["es2015", {
                            "modules": false
                        }],
                        "react",
                        "stage-2"
                    ],
                    "plugins": [
                        [
                            "transform-runtime",
                            {
                                "helpers": false, // defaults to true
                                "polyfill": false, // defaults to true
                                "regenerator": false, // defaults to true
                                "moduleName": "babel-runtime" // defaults to "babel-runtime"
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/img/[name][hash].[ext]"
            }

        ]
    },
    plugins: [
        // https://webpack.js.org/plugins/define-plugin/
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