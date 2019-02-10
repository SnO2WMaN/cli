module.exports = {
	env: {
		build: {
			presets: ['@babel/preset-env', '@babel/flow'],
			ignore: ['dist/*.js', 'packages/**/*.js']
		}
	}
}
