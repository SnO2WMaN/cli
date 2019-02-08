import md5 from 'md5'
import queryString from 'query-string'

import ager from 'ager'

import socials from './social'

export const name = 'SnO2WMaN'
export function icon(option = {}) {
	return `//www.gravatar.com/avatar/${md5(
		socials.email
	)}?${queryString.stringify(option)}`
}
export const birthday = new Date(2001, 5, 22)
export const age = ager(birthday)
export const sex = 1
export const religion = 'Pastafarianism'
export const location = 'Japan, Nagoya'
export { default as socials } from './social'
export default { name, icon, birthday, age, socials, sex, religion, location }
