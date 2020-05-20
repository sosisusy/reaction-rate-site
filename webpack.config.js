const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.WEBPACK_ENV == "production" ? "production" : "development",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: ["css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: ["babel-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"],
        }),
        new HtmlWebpackPlugin({
            title: "hello",
            filename: "index.html",
            template: "./src/html/index.html",
        }),
    ],
    devServer: {
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: "8080",
    },
    resolve: {
        alias: {
            src: path.resolve("./src"),
            pages: path.resolve("./src/pages"),
            components: path.resolve("./src/components"),
        },
    },
};