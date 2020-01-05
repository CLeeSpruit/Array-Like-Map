const path = require('path');

const config = {
	entry: {
		arraylikemap: './array-like-map.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	target: 'web',
	output: {
		filename: 'array-like-map.js',
		library: 'array-like-map',
		libraryTarget: 'umd'
	},
	devtool: 'source-map',
	mode: 'production',
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
		extensions: ['.js', '.json']
	}
};

module.exports = [config];
