const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack")

module.exports = {
    mode: process.env.WEBPACK_ENV == "production" ? "production" : "development",
    entry: {
        index: "./src/index.jsx",
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/docs",
        // publicPath: "./",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: ["babel-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/html/index.html",
        }),
        new Dotenv(),
    ],
    devServer: {
        inline: true,
        hot: true,
        host: "localhost",
        port: "8080",
        overlay: true,
        stats: "errors-only",
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            src: path.resolve("./src"),
            pages: path.resolve("./src/pages"),
            components: path.resolve("./src/components"),
            layout: path.resolve("./src/layout"),
            sass: path.resolve("./src/sass"),
        },
        extensions: ['.js', '.jsx'],
    },
};
