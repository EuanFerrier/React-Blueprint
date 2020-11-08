const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: './src/index.tsx',
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx','.ts','.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
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