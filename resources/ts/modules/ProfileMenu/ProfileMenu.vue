<template>
	<div class="profile relative">
		<div>
			<button class="profile-avatars rounded-full cursor-pointer" @click="show = !show" v-click-away="handleClick">
				<div v-if="user.avatar !== 'user.png'" class="w-[45px]">
					<img :src="'/storage/avatars/' + user.avatar" alt="avatar">
				</div>
				<div v-else class="w-[45px]">
					<img src="/img/default/user.png" alt="avatar" class="rounded-full">
				</div>
			</button>
			<div v-auto-animate class="profile-blocks w-[200px] absolute top-[80px] left-[-400%] shadow-2xl rounded-lg bg-white p-4 model" v-if="show" ref="modal">
				<div class="pb-3">{{user.name}} {{user.surname}}</div>
				<profile-menu-list :links="{
					main: 'profile-list space-y-6',
					urls: [
						{
							icon: '',
							url: route('profile'),
							title: 'Профиль'
						},
						{
							icon: '',
							url: '#',
							title: 'Файлы'
						},
						{
							icon: '',
							url: logout,
							title: 'Выход'
						}
					]
				}"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, PropType, onMounted, ref, Ref} from 'vue'
import {Profile} from "@/model/model"
import ProfileMenuList from "./components/ProfileMenuList.vue";
import axios from "axios";
import route from "ziggy-js";

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

	setup() {
		const domainName : Ref<string | null> = ref( null);
		const loginError : Ref<string | null> = ref(null);

		onMounted(() => {
			domainName.value = window.location.protocol;
		});

		const logout = async () : Promise<void> => {
			try {
				await axios.post(route('signout'));
				window.location.href = '/'
			} catch (error: any) {
				loginError.value = error.response.data.message;
			}
		}

		const urlss = async (link: string) => {
			try {
				window.location.href = link
			} catch (error: any) {
				loginError.value = error.response.data.message;
			}
		}

		return { domainName, logout, urlss };
	},

	mounted() {
		// @ts-ignore
		this.user = JSON.parse(this.users);
	},

	methods: {
		handleClick(): void {
			this.show = false
		}
	}
})
</script>
