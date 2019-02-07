const consola = require('consola')
const getPort = require('get-port')

const N = require('nuxt')

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
		const log = jest.fn()
		consola.clear().add({ log })

		test('contain properties', async () => {
			const { nuxt, port } = await setupNuxt(nuxtImpl)(
				require('./fixture/nuxt/nuxt.config')
			)
			const url = `http://localhost:${port}/`
			const window = await nuxt.renderAndGetWindow(url)

			const bodyHTML = window.document.body.innerHTML

			expect(bodyHTML).toContain('<p class="name">')

			nuxt.close()
		})
	})
})
