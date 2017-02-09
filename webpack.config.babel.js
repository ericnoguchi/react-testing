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
                    use: [{
                            // https://github.com/webpack-contrib/css-loader
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
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
                                sourceMap: true,
                                sourceMapContents: true
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
                // https://github.com/webpack-contrib/file-loader
                // https://github.com/webpack-contrib/url-loader
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: '10000',
                    name: '/img/[name].[ext]'
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

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
            disable: false
        }),
        new LiveReloadPlugin()
    ]
};