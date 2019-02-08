<template>
	<div>
		<p
			v-for="(property, key) in {
				name,
				birthday,
				age,
				sex,
				religion,
				location
			}"
			:id="key"
			:key="key"
		>
			{{ property }}
		</p>
		<img id="icon" :src="icon" />
		<dl id="socials">
			<li v-for="(link, key) in socials" :key="key" :class="key">
				{{ key }} : {{ link }}
			</li>
		</dl>
	</div>
</template>

<script>
import {
	name,
	icon,
	birthday,
	age,
	sex,
	religion,
	location,
	socials
} from '@@/src/index.js'

export default {
	data() {
		return {
			name,
			icon: icon(),
			birthday,
			age,
			sex,
			religion,
			location,
			socials
		}
	}
}
</script>
