import ExtractTextPlugin from 'extract-text-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === 'production';
const isDevelopment = !isProduction;

export default {
    //https://webpack.js.org/configuration/devtool/
    devtool: isDevelopment && 'source-map',
    context: path.resolve(__dirname),
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router",
            "es6-promise",
        ],
        app: './@Client.js',
        //  e2: './e2.js'
    },
    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve(__dirname, '_dist'),
        publicPath: '/',
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"

    },
    stats: {
        assetsSort: "size",
    },
    devServer: {
        contentBase: '_dist'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader'
                }],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            // https://github.com/webpack-contrib/css-loader
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer]
                            }
                        },
                        {
                            // https://github.com/jtangelder/sass-loader
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                                sourceMap: isDevelopment,
                                sourceMapContents: isDevelopment,
                                includePaths: [path.resolve(__dirname, 'common/scss')]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    cacheDirectory: true,
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
                                "helpers": true, // defaults to true
                                "polyfill": true, // defaults to true
                                "regenerator": true, // defaults to true
                                "moduleName": "babel-runtime" // defaults to "babel-runtime"
                            }
                        ],
                        // "external-helpers"

                    ]
                }
            },
            {
                // https://github.com/webpack-contrib/file-loader
                // https://github.com/webpack-contrib/url-loader
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: '10000',
                    name: 'img/[name].[ext]'
                }
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
        new webpack.ProvidePlugin({
            //   'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            //'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'webpack-bootstrap'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: (getPath) => getPath('css/[name].css'),
            disable: false,
            allChunks: true
        }),
        new LiveReloadPlugin({
            appendScriptTag: true
        })
    ]
};