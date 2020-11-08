const path = require('path');
const common = require("./webpack.common")
const merge = require("webpack-merge")

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common ,{
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.[hash].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: "vendors.bundle.[hash].js",
                    chunks: "all"
                },
            }
        },
        minimizer: [
            new OptimizeCSSAssetPlugin(),
            new TerserPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ]
            },
        ]

    },
    plugins: [
        //new WebpackBundleAnalyzer,
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: "[name].bundle.[hash].css"
        })
    ]
})