var webpack = require('webpack');

module.exports = {
    entry: {
        public: "./source/public/Public.jsx",
        explore: "./source/explore/Explore.jsx",
        moment: "./source/moment/Moment.jsx",
        pet: "./source/pet/Pet.jsx",
        user: "./source/user/User.jsx",
        about: "./source/about/About.jsx",
        terms: "./source/terms/Terms.jsx",
        404: "./source/error/404.jsx",
        500: "./source/error/500.jsx"
    },
    output: {
        path: __dirname + '/public/js/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
	        {
	        	test: /\.(js|jsx)$/,
		        exclude: /(node_modules|bower_components)/,
		        loader: 'babel-loader',
		        query: {
		            presets: ["react", "es2015"]
		        }
	        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false
            }
        })
    ]
}
