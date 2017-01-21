let path = require('path');

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