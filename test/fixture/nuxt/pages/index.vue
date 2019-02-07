<template>
	<div>
		<p v-for="(property, key) in sno2wman" :key="key" :class="key">
			{{ property }}
		</p>
	</div>
</template>

<script>
import sno2wman from '~~/src/index.js'

export default {
	data() {
		return {
			sno2wman
		}
	}
}
</script>
