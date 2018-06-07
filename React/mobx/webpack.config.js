const path = require('path');

module.exports	=	{
	mode: "development",
	target: "web",
	devtool: "source-map",
	entry:	[
		'./src/index'
	],
	output:	{
		path:	path.join(__dirname, 'dist'),
		filename:	'bundle.js',
		publicPath:	'/static/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "src")
				],
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
	}
}