const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: process.env.WEBPACK_ENV == "production" ? "production" : "development",
    entry: {
        "js/index": "./src/index.js",
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ["css-loader", "sass-loader",]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new HtmlWebpackPlugin({
            title: "hello",
            filename: "index.html",
            template: "./src/html/index.html"
        }),
    ],
    devServer: {
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: "8080"
    }
}