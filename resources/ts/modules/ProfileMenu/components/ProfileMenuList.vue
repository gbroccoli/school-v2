<script setup lang="ts">

import { PropType } from "vue"
import {urlsAny} from "@/model/model"
import icon from "@/shared/icons/index"

const props = defineProps({
	links: {
		type: Object as PropType<urlsAny>
	}
})

const styleDefault = 'block'
</script>

<template>
	<ul :class="links.main">
		<li :class="links.chiles" v-for="(link, i) in links.urls" :key="i" class="cursor-pointer">
			<component :is="link.icon" />
			<a :class="styleDefault" v-if="typeof link.url !== 'function'" :href="link.url">{{link.title}}</a>
			<a v-if="typeof link.url !== 'string'" :class="[links.chiles2, styleDefault]" @click.prevent="link.url">{{link.title}}</a>
		</li>
	</ul>
</template>
