<template>
	<div class="profile relative">
		<div>
			<button class="profile-avatars rounded-full cursor-pointer" @click="show = !show" v-click-away="handleClick">
				<div v-if="user.avatar === 'user.png'" class="w-[45px]">
					<img :src="profilePhoto" alt="avatar" class="rounded-full">
				</div>
				<div v-else class="w-[45px]">
					<img src="/img/default/user.png" alt="avatar" class="rounded-full">
				</div>
			</button>
			<transition name="profile-ani">
				<div v-auto-animate class="profile-blocks w-[200px] absolute top-[50px] left-[-400%] shadow-2xl rounded-lg bg-white p-4 model" v-if="show" ref="modal">
					<profile-menu-list :links="{
					main: 'profile-list space-y-4',
					urls: [
						{
							icon: 'search-icon',
							url: route('profile'),
							title: `${user.surname} ${user.name}`
						},
						{
							icon: '',
							url: '#',
							title: 'Цифровая хранилка'
						},
						{

							icon: '',
							url: route('setting'),
							title: 'Настройки профиля'
						},
						{
							icon: '',
							url: '#',
							title: 'Достижения на хранение'
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
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, Ref, onMounted, onBeforeUnmount} from 'vue'
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
			show: false as boolean,
			profilePhoto: null as string | null
		}
	},

	props: {
		users: {
			type: String,
			required: true
		}
	},

	setup(props) {
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
		this.user = JSON.parse(this.users);

		this.loadProfilePhoto(this.user.id)
	},

	methods: {
		handleClick(): void {
			this.show = false
		},

		async loadProfilePhoto(userId: number | string) {
			try {
				try {
					const response = await axios.get(route('avatar', userId), {
						responseType: 'blob'
					});

					if (response.status === 200)
					{
						const imageUrl = URL.createObjectURL(response.data);
						this.profilePhoto = imageUrl;
					}
				} catch (e) {
					console.error("Не полученно")
				}

			} catch (error) {
				console.error("Не получено");
			}
		},

	},

	beforeUnmount() {
		if (this.profilePhoto) {
			URL.revokeObjectURL(this.profilePhoto);
		}
	}
})
</script>

<style>
.profile-ani-enter-active,
.profile-ani-leave-active {
	transition: all 0.3s ease-in-out;
}

.profile-ani-enter,
.profile-ani-leave-to {
	transform: translateY(15px);
	opacity: 0;
}
</style>
