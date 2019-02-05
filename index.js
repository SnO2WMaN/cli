import gravatar from 'gravatar'

import socials from './social'

export default {
	name: 'SnO2WMaN',
	icon(option = { s: 512 }) {
		return gravatar.url(socials.email, option)
	},
	birthday: new Date(2001, 6, 22),
	socials
}
