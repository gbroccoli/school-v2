<template>
	<div class="flex bg-white w-[550px] rounded-full items-center mt-6 justify-between relative">
		<input type="text" name="search" maxlength="50" class="font-[IBM_Plex_Sans] border-none rounded-l-full w-full outline-none px-[15px] py-[10px]" @focus.prevent="search" :value="value" @input.prevent="(e)=>{
			value = e.target.value;
			sortBySearch(value)
		}" @keyup.enter="search">
		<button type="button" class="pr-[10px] rounded-r-full" @click.prevent="search"><SearchIcon></SearchIcon></button>
		<div class="search-list absolute bottom-[-45px] rounded-full p-2 bg-white w-full">
			<ul>
				<li v-for="res in result">
					<div class="materila">
						<div class="material-title">
							{{res.title}}
						</div>

						<div class="material-descr">
							{{res.descr}}
						</div>


					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchIcon from "../../shared/icons/SearchIcon.vue";
import Api from "../../features/server-api";
import { Posts } from 'resources/ts/model/model';

export default defineComponent({
	name: "search-post",
	data() {
		return {
			value: "" as string,
			result: [] as Posts[],
			sort: [] as Posts[]
		}
	},
	components: {SearchIcon},
	methods: {
		search() {

			this.result = []

			new Api().getUrl("material", ``).then(res=>res.map((item, i)=>{
				this.result = res;
			}))
		},

		sortBySearch(value) {

			this.sort = []

			this.result.map(sorts => {
				if (value === "") {
					this.sort.push(sorts)
				} else if (sorts.title.toLowerCase().includes(value.toLowerCase())) {
					this.sort.push(sorts)
				}
			})
		}

	},
})
</script>
