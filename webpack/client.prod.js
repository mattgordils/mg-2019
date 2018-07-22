const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const StatsWebpackPlugin = require('stats-webpack-plugin');

const config = merge(common, {

	mode: 'production',
	target: 'web',
	devtool: 'source-map',

	entry : './js/client.js',

	output : {
		chunkFilename: '[name].js',
		filename: 'client.js',
	},

	plugins : [

    new StatsWebpackPlugin('stats.json'),

		new CompressionPlugin({
				asset: '[path].gz[query]',
				algorithm: 'gzip',
				test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
				threshold: 10240,
				minRatio: 0.8
		})
	],

	resolve : {
		symlinks: false
	}

});

module.exports = config;
