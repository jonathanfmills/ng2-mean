var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		'app': './app/app.ts',
		'vendor': './app/vendor.ts'
	},
	output: {
		path: './app/dist',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	],

	resolve: {
		extensions: ['', '.ts', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		],
		noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
	},

	devServer: {
		historyApiFallback: true
	}
};
