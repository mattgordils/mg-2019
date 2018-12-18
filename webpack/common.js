const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require('dotenv').config();

const config = {

	context: path.resolve(__dirname, '../src'),

	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[name].js',
		publicPath: '/'
	},

	plugins : [
		new webpack.DefinePlugin({
		  CONTENTFUL_SPACE: JSON.stringify(process.env.CONTENTFUL_SPACE),
			CONTENTFUL_TOKEN: JSON.stringify(process.env.CONTENTFUL_TOKEN)
		}),

    new ExtractTextPlugin('[name].css')
	],

	resolve : {
		modules: [
			path.resolve(__dirname, '../src'),
			path.resolve(__dirname, '../src/js'),
			path.resolve(__dirname, '../node_modules')
		],
		extensions: ['.js', '.json', '.hbs', '.jpg', '.png', '.svg', '.sass', '.scss', '.css']
	},

	module : {
		rules : [
			// javascript
			{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // css
			{
        test: /\.css$/,
        include: /node_modules/,
				use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
        })
      },

      // sass
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader : 'resolve-url-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						}
					]
				})
			},

      // images
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '',
              useRelativePath: false
            }
          }
        ]
      },

      // fonts
      {
      	test: /\.(woff|woff2|eot|ttf|otf)$/,
      	use: ['file-loader?name=fonts/[name].[ext]']
      },

      // svg
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	}
}

module.exports = config;


