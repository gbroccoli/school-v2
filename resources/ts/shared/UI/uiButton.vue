<script setup lang="ts">

import {PropType, Ref, ref} from "vue"

const colorItem : Ref<object> = ref({
	'accept': 'bg-green-600',
	'danger': 'bg-red-600',
	'primary': 'bg-blue-600 hover:bg-blue-600/50',
	'link': 'p-0 text-black',
	'secondary': 'bg-[#5c636a]',
	'warning': 'bg-yellow-400'
})

const sizeItem : Ref<object> = ref({
	"sm": "text-[]",
	"md": "text-[14px]",
	"lg": "text-[]",
	"xl": "text-[]",
	"2xl": "text-[]"
})

const roundedItem : Ref<object> = ref({
	'rounded-cray-all': 'rounded',
	'rounded-cray-left': 'rounded-l',
	'rounded-cray-right': 'rounded-r',
	'rounded-cray-top': 'rounded-t',
	'rounded-cray-bottom' : 'rounded-b',
	'rounded-cray-none': 'rounded-none',
	'rounded-full': 'rounded-full'
})

const props = defineProps({
	label: {
		type: String as PropType<string>,
		require: true
	},

	type: {
		type: String as PropType<'button' | 'reset' | 'submit'>,
		default: "button",
		require: true
	},

	color: {
		type: String as PropType<'accept' | 'danger' | 'primary' | 'link' | 'warning' | 'secondary'>,
		default: "primary",
		require: false
	},

	size: {
		type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl'>,
		default: "md",
		require: false
	},

	rank: {
		type: String as PropType<string>,
		require: false
	},

	rounded: {
		type: String as PropType<'rounded-cray-all' | 'rounded-cray-left' | 'rounded-cray-right' | 'rounded-cray-top' | 'rounded-cray-bottom' | 'rounded-cray-none'>,
		default: 'rounded-cray-all'
	},

	disabled: {
		type: Boolean as PropType<boolean>,
		default: false
	}
})

</script>

<template>
	<button
		:class="['btn text-white px-[15px] py-[7.5px] ',
		colorItem[color],
		sizeItem[size],
		rank,
		roundedItem[rounded]
		]"
		:type="type"
		:disabled="disabled"
	>
		{{label}}
	</button>
</template>

<style lang="scss">
.btn:disabled {
	cursor: default;
}
</style>
