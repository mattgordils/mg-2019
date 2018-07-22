const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');

const config = merge(common, {

	mode : 'production',
	name : 'server',
	devtool: 'source-map',
	target : 'node',

	entry : './js/server.js',

	output: {
		filename : 'server.js',
		libraryTarget: 'commonjs2'
	},

	node: {
		__filename: false,
		__dirname: false
	},

	plugins : [
		new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1
		}),
	]

});

module.exports = config;
