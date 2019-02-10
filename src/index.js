/* @flow */
import gravatar from 'gravatar'
import ager from 'ager'

export const name: string = 'SnO2WMaN'
export const birthday: Date = new Date(2001, 5, 22)
export const age: number = ager(birthday)
export const sex: number = 1
export const religion: string = 'Pastafarianism'
export const location: string = 'Japan, Nagoya'
export const socials: { [key: string]: string } = {
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
export const icon: (option: gravatar.Options) => string = (option = {}) => {
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
	location
}
