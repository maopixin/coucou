const path = require('path');
module.exports = {
	configureWebpack: config => {
		config.module.rules.push(
			{
				test: /\.md$/,
				use: [
					{
						loader: 'vue-loader',
					},
					{
						loader: path.resolve(__dirname, './utils/md-loader'),
					},
				],
			},
		);
	},
}