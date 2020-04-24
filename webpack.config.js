const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, './bin'),
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'public',
			to: '../bin'
		}])
	]
}