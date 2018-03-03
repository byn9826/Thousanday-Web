const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: [
			path.join(__dirname, './src/index.js')	
		],
		vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux', 'redux-thunk']
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader?cacheDirectory=true'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		})
	]
};
