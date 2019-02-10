import test from 'ava'
import { resolve } from 'path'

const rootDir = resolve(__dirname, '..')
const sno2wman = require(resolve(rootDir, './dist/index.js'))

test('name', t => t.is(sno2wman.name, 'SnO2WMaN'))
test('sex', t => t.is(sno2wman.sex, 1))
