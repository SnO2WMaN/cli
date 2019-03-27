import gravatar from 'gravatar'
import ager from 'ager'

import socials from './data/socials'
import wishlist from './data/wishlist'

/**
 * @param {gravatar.Options} option
 */
const icon = (option = {}) => gravatar.url(socials.email, option)

const birthday = new Date(2001, 5, 22)

export default {
	name: 'SnO2WMaN',
	sex: 1,
	icon,
	socials,
	locale: 'ja_JP',
	religion: 'FSMism',
	wishlist,
	birthday,
	age: ager(birthday)
}
