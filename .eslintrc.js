module.exports = {
	parser: 'babel-eslint',
	plugins: ['ava', 'flowtype'],
	extends: [
		'eslint:recommended',
		'plugin:ava/recommended',
		'plugin:flowtype/recommended'
	]
}
