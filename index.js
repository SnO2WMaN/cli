import gravatar from 'gravatar'

const socials = require('./social.js')

module.exports = {
	name: 'SnO2WMaN',
	icon(option = { s: 512 }) {
		return gravatar.url(socials.email, option)
	},
	birthday: new Date(2001, 6, 22),
	socials
}
