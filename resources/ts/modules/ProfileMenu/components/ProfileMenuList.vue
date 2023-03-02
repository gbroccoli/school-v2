<script setup lang="ts">

import { PropType } from "vue"

defineProps({
	links: {
		type: Object as PropType<Object>
	}
})

</script>

<template>
	<ul :class="links.main">
		<li :class="links.chiles" v-for="(link, i) in links.urls" :key="i">
			<component :is="link.icon" />
			<a :class="links.chiles2" :href="link.url">{{link.title}}</a>
		</li>
	</ul>
</template>
