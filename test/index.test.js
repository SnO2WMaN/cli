import test from 'ava'
import isObject from 'isobject'
import axios from 'axios'

import sno2wman from '../dist/index'

test('name', t => t.is(sno2wman.name, 'SnO2WMaN'))

test('sex', t => t.true([1, 2, 9].includes(sno2wman.sex)))

test('icon', async t => {
	await axios
		.get(sno2wman.icon({ protocol: 'https' }))
		.then(() => {
			t.pass()
		})
		.catch(({ status, statusText }) => {
			t.fail(`HTTP Status: ${status} ${statusText}`)
		})
})

test('socials', t => t.true(isObject(sno2wman.socials)))
Object.entries(sno2wman.socials)
	.filter(entry => !['discord', 'email'].includes(entry[0]))
	.forEach(entry => {
		const key = entry[0],
			link = entry[1]
		test(`socials / ${key}`, async t => {
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
