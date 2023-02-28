<template>
	<div class="profile">
		<div class="profile-avatars">
			<div v-if="user.avatar !== 'default.png'">
<!--				<img :src=`@image/${user.avatar}` alt="avatar">-->
			</div>
		</div>
		<div v-auto-animate class="profile-blocks" v-if="show = !show">
			<ul class="profile-list">
				<li class="profile-item"><a :href="route('profile')" class="profile-link">Профиль</a></li>
				<li class="profile-item"><a href="#" class="profile-link">Файлы</a></li>
				<!--				<li class="profile-item"><a href="#" class="profile-link"></a></li>-->
				<li class="profile-item"><a href="#" class="profile-link">Настройки</a></li>
				<li class="profile-item"><a href="#" class="profile-link">Выход</a></li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Profile} from "@/model/model"

export default defineComponent({
	name: "ProfileMenu",
	data() {
		return {
			user: {} as Profile,
			show: false as boolean
		}
	},
	mounted() {
		// console.log(import("@image"))
	}
})
</script>

<style scoped>

</style>
