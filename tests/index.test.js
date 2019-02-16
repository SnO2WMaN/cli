import test from 'ava'
import axios from 'axios'

import sno2wman from '../pkg'

test('check icon', async t => {
	await axios
		.get(sno2wman.icon({ protocol: 'https' }))
		.then(() => {
			t.pass()
		})
		.catch(({ status, statusText }) => {
			t.fail(`HTTP Status: ${status} ${statusText}`)
		})
})

// socials
Object.entries(sno2wman.socials)
	.filter(entry => !['discord', 'email'].includes(entry[0]))
	.forEach(entry => {
		const key = entry[0],
			link = entry[1]
		test(`check ${key} link`, async t => {
			await axios
				.get(link)
				.then(() => {
					t.pass()
				})
				.catch(({ status, statusText }) => {
					t.fail(`HTTP Status: ${status} ${statusText}`)
				})
		})
	})

// wishlist
Object.entries(sno2wman.wishlist).forEach(entry => {
	const key = entry[0],
		link = entry[1]
	test(`check ${key} wishlist link`, async t => {
		await axios
			.get(link)
			.then(() => {
				t.pass()
			})
			.catch(({ status, statusText }) => {
				t.fail(`HTTP Status: ${status} ${statusText}`)
			})
	})
})
