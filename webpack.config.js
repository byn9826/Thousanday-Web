var webpack = require('webpack');

module.exports = {
    entry: {
        public: "./source/public/Public.jsx",
        explore: "./source/explore/Explore.jsx",
        moment: "./source/moment/Moment.jsx",
        add: "./source/add/Add.jsx",
        pet: "./source/pet/Pet.jsx",
        user: "./source/user/User.jsx",
        watch: "./source/watch/Watch.jsx",
        setting: "./source/setting/Setting.jsx",
        edit: "./source/edit/Edit.jsx",
        request: "./source/request/Request.jsx",
        react: "./source/react/React.jsx",
        about: "./source/about/About.jsx",
        terms: "./source/terms/Terms.jsx",
        403: "./source/error/403.jsx",
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
