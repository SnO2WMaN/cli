import request from 'request'
import { promisify } from 'util'
import sno2wman from './index'

const terminalImage = require('terminal-image')

const iconPath = sno2wman.icon({ protocol: 'https' })

;(async () => {
	const { body } = await promisify(request.get)(iconPath, {
		encoding: null
	})
	const image = await terminalImage.buffer(Buffer.from(body))
	console.log(image)
})()
