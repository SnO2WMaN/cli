import gravatar from 'gravatar'
import ager from 'ager'

import socials from './socials'
import wishlist from './wishlist'

const name = 'SnO2WMaN'
const birthday = new Date(2001, 5, 22)
const age = ager(birthday)
const sex = 1
const religion = 'Pastafarianism'
const location = 'Japan, Nagoya'
const icon = (option = {}) => {
	return gravatar.url(socials.email, option)
}
export default {
	name,
	icon,
	birthday,
	age,
	socials,
	sex,
	religion,
	location,
	wishlist
}
