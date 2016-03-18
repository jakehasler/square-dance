module.exports = {
	entry: "./animation.js",
	output: {
		filename: "animation.bundle.js",
		path: "./"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
		]
	}
};

