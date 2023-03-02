<template>
	<div class="profile relative">
		<div class="profile-avatars w-[45px] rounded-full cursor-pointer" @click.prevent="show = !show">
			<div v-if="user.avatar !== 'user.png'">
				<!--				<img :src=`@image/${user.avatar}` alt="avatar">-->
			</div>
			<div v-else>
				<img src="img/default/user.png" alt="avatar" class="rounded-full">
			</div>
		</div>
		<div v-auto-animate class="profile-blocks absolute bg-white" v-if="show">
			<ul class="profile-list">
				<li class="profile-item"><a href="#" class="profile-link">Профиль</a></li>
				<li class="profile-item"><a href="#" class="profile-link">Файлы</a></li>
				<!--				<li class="profile-item"><a href="#" class="profile-link"></a></li>-->
				<li class="profile-item"><a href="#" class="profile-link">Настройки</a></li>
				<li class="profile-item"><a href="#" class="profile-link">Выход</a></li>
			</ul>
			<profile-menu-list :links="{main: 'profile-list', urls: [
				{
					icon: '',
					url: '/profile',
					title: 'Профиль'
				}
			]}" />
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Profile} from "../../model/model"
import ProfileMenuList from "./components/ProfileMenuList.vue";

export default defineComponent({
	name: "ProfileMenu",
	components: {ProfileMenuList},
	data() {
		return {
			user: {} as Profile,
			show: false as boolean
		}
	},

	props: {
		users: {
			type: String as PropType<string>
		}
	},

	mounted() {
		// @ts-ignore
		this.user = JSON.parse(this.users);
	}
})
</script>
