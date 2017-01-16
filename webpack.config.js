let path = require('path');
module.exports = {
    entry: { 
        app: ['./src/app/App.js'] },
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
            }
        ]
    }
};