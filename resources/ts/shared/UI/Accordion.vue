<script setup lang="ts">

import {Ref, ref, PropType} from "vue"
import {Accordions} from "../../model/model"

let open : Ref<boolean> = ref(false)

defineProps({
	text: {
		type: Object as PropType<Accordions>
	}
})

</script>

<template>
	<div class="accordion">
		<div class="accordion-header">
			{{text.title}}
		</div>

		<div class="accordion-body">
			{{text.body}}
		</div>
	</div>
</template>
