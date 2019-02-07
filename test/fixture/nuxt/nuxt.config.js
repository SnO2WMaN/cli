const { resolve } = require('path')

module.exports = {
	rootDir: resolve(__dirname, '../../../'),
	srcDir: resolve(__dirname),
	build: {
		quiet: false
	}
}
