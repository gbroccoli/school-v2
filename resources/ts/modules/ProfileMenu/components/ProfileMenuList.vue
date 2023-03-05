<script setup lang="ts">

import { PropType } from "vue"
import {urlsAny} from "../../../model/model"

const props = defineProps({
	links: {
		type: Object as PropType<urlsAny>
	}
})
</script>

<template>
	<ul :class="links.main">
		<li :class="links.chiles" v-for="(link, i) in links.urls" :key="i" class="cursor-pointer">
			<component :is="link.icon" />
			<div v-if="typeof link.url">
				<a :class="links.chiles2" @click.prevent="link.url">{{link.title}}</a>
			</div>
		</li>
	</ul>
</template>
