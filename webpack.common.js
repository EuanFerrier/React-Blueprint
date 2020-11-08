const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: './src/index.js',
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif|svg|ico|ttf|otf|woff)$/,
				loader: 'file-loader',
				options: {
					name: "[name].[Contenthash].[ext]",
					outputPath: "Assets"
				},
      },
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html"
    })
	]
}