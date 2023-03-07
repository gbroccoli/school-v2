<template>
	<Accordion :text="{title: 'asfsafsafa', body: 'dsfsdfhhjgdsfgsdgfkhjsgdkfgksdjgfksdgkfgskdgfkj'}"></Accordion>
</template>


<script lang="ts">

import {defineComponent} from "vue"
import Accordion from "@/shared/UI/Accordion.vue";

export default defineComponent({
	name: "CardItem",
	components: {Accordion}
})
</script>

<style scoped>

</style>
