const path = require('path');
const common = require("./webpack.common")
const merge = require("webpack-merge")

module.exports = merge(common ,{
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
    },
    devServer : {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', "sass-loader"]
            },
        ]
    }
})