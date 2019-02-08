module.exports = {
	testEnvironment: 'node',
	collectCoverage: true,
	coveragePathIgnorePatterns: ['/node_modules/', '/test/fixture'],
	forceExit: true,
	transform: {
		'^.+\\.js$': 'babel-jest'
	}
}
