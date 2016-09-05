var debug = process.env.NODE_ENV !== "production"
var webpack = require('webpack')

module.exports = {
	context: __dirname +"/app",
	devtool: debug? "inline-sourcemap": null,
	entry: ["./js/main.js",
	'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/'
		],

	module: {
		loaders:[
		{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query:{
				presets: ['react', 'es2015', 'stage-0'],
				plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
			}
		}]
	},

	output:{
		path: __dirname + "/app",
		filename: "client.min.js"
	},
	plugins:[
	new webpack.HotModuleReplacementPlugin()
	]
}