const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');
const path = require('path');

const config = merge(common, {

	mode: 'development',
	name : 'client',
	target: 'web',
	devtool: 'inline-source-map',

	entry :  ['webpack-hot-middleware/client', './js/client.js'],

	output : {
		chunkFilename: '[name].js',
		filename: 'client.js',
	},


	plugins : [
		new webpack.HotModuleReplacementPlugin(),
	],

	resolve : {
		symlinks: false
	}

});

module.exports = config;
