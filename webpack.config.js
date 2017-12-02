const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client', 'build')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    },
}
