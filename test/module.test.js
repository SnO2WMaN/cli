const consola = require('consola')
const getPort = require('get-port')

const sno2wman = require('../src/index')

jest.setTimeout(60 * 1000)

const setupNuxt = ({ Nuxt, Builder }) => async config => {
	const nuxt = new Nuxt(config)
	await new Builder(nuxt).build()
	const port = await getPort()
	await nuxt.listen(port)
	return { nuxt, port }
}

describe('sno2wman', () => {
	describe.each([
		['nuxt', require('nuxt')],
		['nuxt-edge', require('nuxt-edge')]
	])('%s', (_, nuxtImpl) => {
		let log, nuxtInstance, document
		beforeAll(async () => {
			const { nuxt, port } = await setupNuxt(nuxtImpl)(
				require('./fixture/nuxt/nuxt.config')
			)
			const url = `http://localhost:${port}/`
			const window = await nuxt.renderAndGetWindow(url)

			document = window.document
			nuxtInstance = nuxt
		})

		beforeEach(() => {
			log = jest.fn()
			consola.clear().add({ log })
		})

		describe('contain properties', () => {
			test.each(
				Object.keys(sno2wman)
					.filter(key => key !== 'default')
					.map(key => [key])
			)('%s', key => {
				expect(document.getElementById(key)).not.toBeNull()
			})
		})

		afterAll(() => {
			nuxtInstance.close()
		})
	})
})
