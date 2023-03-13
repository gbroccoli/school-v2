<template>
	<form action="#" @submit.prevent>
		<div class="grid grid-cols-8">
			<div class="col-span-4">
				<label for="surname">
					<input id="surname" type="text" v-model="surname" class="border">
				</label>
			</div>

			<div class="col-span-4">
				<label for="name">
					<input id="name" type="text" v-model="names" class="border">
				</label>
			</div>

			<dropdown-select />
		</div>
	</form>
</template>

<script lang="ts">

import {defineComponent, Ref, ref} from 'vue'
import DropdownSelect from "@/shared/UI/DropdownSelect.vue";

export default defineComponent({
	name: "AccountSetting",
	components: {DropdownSelect},
	setup()
	{
		const surname : Ref<string> = ref('');
		const names : Ref<string> = ref('');
		return {
			surname,
			names
		}
	}
})
</script>
