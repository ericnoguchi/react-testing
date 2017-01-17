let path = require('path');
let webpack = require('webpack');
let fs = require('fs');
let nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: {
        app: ['./src/app/index.jsx']
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
            { test: /\.css$/, loader: "style!css" },
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
    }
};