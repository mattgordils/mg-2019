const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');

const config = merge(common, {

	mode : 'development',
	name : 'server',
	devtool: 'inline-source-map',
	target : 'node',

	entry : './js/server.js',

	output: {
		filename: 'server.js',
		libraryTarget: 'commonjs2'
	},

	node: {
		__filename: false,
		__dirname: false
	}
})

module.exports = config;
