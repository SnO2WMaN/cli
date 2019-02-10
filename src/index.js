import gravatar from 'gravatar'
import ager from 'ager'

/**
 * Name
 * @type {String}
 */
export const name = 'SnO2WMaN'

/**
 * Birthday
 * @type {Date}
 */
export const birthday = new Date(2001, 5, 22)

/**
 * Age
 * @type {Number}
 */
export const age = ager(birthday)

/**
 * Sex
 * @type {1|2|9}
 */
export const sex = 1

/**
 * Religion
 * @type {String}
 */
export const religion = 'Pastafarianism'

/**
 * Location
 * @type {String}
 */
export const location = 'Japan, Nagoya'

/**
 * Socials List
 * @typedef Socials
 */
export const socials = {
	twitter: 'https://twitter.com/SnO2WMaN',
	github: 'https://github.com/SnO2WMaN',
	spotify: 'https://open.spotify.com/user/sno2wman',
	qiita: 'https://qiita.com/SnO2WMaN',
	amazon:
		'https://www.amazon.co.jp/gp/profile/amzn1.account.AGNQ2CQRCY4BH6NT5KPADJFX4KKA',
	tumblr: 'https://sno2wman.tumblr.com',
	steam: 'https://steamcommunity.com/id/SnO2WMaN',
	discord: 'SnO2WMaN#9459',
	soundcloud: 'https://soundcloud.com/sno2wman',
	patreon: 'https://www.patreon.com/SnO2WMaN',
	email: 'sno2wman.official@gmail.com',
	website: 'https://sno2wman.graphics',
	annict: 'https://annict.jp/@SnO2WMaN',
	hatena: 'https://profile.hatena.ne.jp/SnO2WMaN/'
}

/**
 * Icon Url
 *
 * @param {gravatar.Options} option
 * @return {String} Icon url
 */
export function icon(option = {}) {
	return gravatar.url(socials.email, option)
}

/**
 * SnO2WMaN detail
 *
 * @typedef sno2wman
 */
export default {
	name,
	icon,
	birthday,
	age,
	socials,
	sex,
	religion,
	location
}
