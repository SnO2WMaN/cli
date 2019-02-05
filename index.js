import gravatar from 'gravatar'
import ager from 'ager'

import socials from './social'

const birthday = new Date(2001, 6, 22)

export default {
	name: 'SnO2WMaN',
	icon(option = { s: 512 }) {
		return gravatar.url(socials.email, option)
	},
	birthday,
	socials,
	age: ager(birthday)
}
