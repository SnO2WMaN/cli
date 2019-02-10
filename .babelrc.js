module.exports = {
	env: {
		build: {
			presets: ['@babel/preset-env'],
			ignore: ['dist/*.js', 'packages/**/*.js']
		}
	}
}
