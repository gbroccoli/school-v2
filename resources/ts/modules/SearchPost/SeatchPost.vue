<template>
	<div class="flex bg-white w-[550px] rounded-full items-center mt-6 justify-between relative">
		<input type="text" name="search" maxlength="50" class="font-[IBM_Plex_Sans] border-none rounded-l-full w-full outline-none px-[15px] py-[10px]" :value="value" @input.prevent="(e)=>value=e.target.value" @change.prevent="search" @keyup.enter="search">
		<button type="button" class="pr-[10px] rounded-r-full" @click.prevent="search"><SearchIcon></SearchIcon></button>
		<div class="search-list absolute bottom-[-45px] rounded-full p-2 bg-white w-full " v-if="result.length > 0">
			<ul>
				<li v-for="res in result">{{res.name}} {{res.surname}}</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchIcon from "../../shared/icons/SearchIcon.vue";
import Api from "../../features/server-api";

export default defineComponent({
	name: "search-post",
	data() {
		return {
			value: "" as string,
			result: [] as object,
			sort: [] as object
		}
	},
	components: {SearchIcon},
	methods: {
		search() {
			new Api().getUrl().then(res=>res.map((item, i)=>{
				if (i < 5) {
					this.result = res;
				}
			}))
		}
	}
})
</script>
