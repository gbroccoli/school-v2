<template>
	<div class="profile relative">
		<div v-if="user !== null">
			<button class="profile-avatars w-[45px] rounded-full cursor-pointer" @click="show = !show" v-click-away="handleClick">
				<div v-if="user.avatar !== 'user.png'">
					<!--				<img :src=`@image/${user.avatar}` alt="avatar">-->
				</div>
				<div v-else>
					<img src="img/default/user.png" alt="avatar" class="rounded-full">
				</div>
			</button>
			<div v-auto-animate class="profile-blocks absolute top-[50px] rounded bg-white p-4 model" v-if="show" ref="modal">
				<ul class="profile-list">
					<li class="profile-item">{{user.name}} {{user.surname}}</li>
					<li class="profile-item"><a href="#" class="profile-link">Профиль</a></li>
					<li class="profile-item"><a href="#" class="profile-link">Файлы</a></li>
					<!--				<li class="profile-item"><a href="#" class="profile-link"></a></li>-->
					<li class="profile-item"><a href="#" class="profile-link">Настройки</a></li>
					<li class="profile-item"><a href="#" class="profile-link">Выход</a></li>
				</ul>
				<profile-menu-list :links="{main: 'profile-list space-y-4', urls: [{
					icon: '',
					url: '/profile',
					title: 'Профиль'
				}]}" />
			</div>
		</div>
		<div v-else>

		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Profile} from "../../model/model"
import ProfileMenuList from "./components/ProfileMenuList.vue";
// @ts-ignore
import { VueClickOutside } from 'v-click-outside'

export default defineComponent({
	name: "ProfileMenu",
	components: {ProfileMenuList},
	data() {
		return {
			user: {} as Profile,
			show: false as boolean
		}
	},

	directives: {
		ClickOutside: VueClickOutside,
	},

	props: {
		users: {
			type: String as PropType<string>
		}
	},

	setup() {

	},

	mounted() {
		// document.addEventListener('click', this.hideModal)

		// @ts-ignore
		this.user = JSON.parse(this.users);
	},
	// beforeDestroy() {
	// 	document.removeEventListener('click', this.hideModal)
	// },
	methods: {
		handleClick(e: Event): void {
			this.show = false
		}
	}
})
</script>
