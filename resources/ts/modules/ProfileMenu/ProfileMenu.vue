<template>
	<div class="profile relative">
		<div v-if="user !== null">
			<button class="profile-avatars w-[45px] rounded-full cursor-pointer" @click="show = !show" v-click-away="handleClick">
				<div v-if="user.avatar !== 'user.png'">
					<!--				<img :src=`@image/${user.avatar}` alt="avatar">-->
				</div>
				<div v-else>
					<img src="/img/default/user.png" alt="avatar" class="rounded-full">
				</div>
			</button>
			<div v-auto-animate class="profile-blocks absolute top-[50px] rounded bg-white p-4 model" v-if="show" ref="modal">
<!--				<ul class="profile-list">-->
<!--					<li class="profile-item">{{user.name}} {{user.surname}}</li>-->
<!--					<li class="profile-item"><a href="#" class="profile-link">Профиль</a></li>-->
<!--					<li class="profile-item"><a href="#" class="profile-link">Файлы</a></li>-->
<!--					&lt;!&ndash;				<li class="profile-item"><a href="#" class="profile-link"></a></li>&ndash;&gt;-->
<!--					<li class="profile-item"><a href="#" class="profile-link">Настройки</a></li>-->
<!--					<li class="profile-item"><a href="#" class="profile-link">Выход</a></li>-->
<!--				</ul>-->
				<profile-menu-list :links="{main: 'profile-list space-y-6', urls: [
					{
						icon: '',
						url: '/profile',
						title: 'Профиль'
					},
					{
						icon: '',
						url: '#',
						title: 'Файлы'
					},
					{
						icon: '',
						url: '/logout',
						title: 'Выход'
					}
				]}" />
			</div>
		</div>
		<div v-else>
			<button class="profile-avatars w-[45px] rounded-full cursor-pointer shadow-lg" @click="show = !show" v-click-away="handleClick">
				<img :src="'/img/default/user.png'" alt="avatar" class="rounded-full">
			</button>
			<div v-auto-animate class="profile-blocks absolute top-[50px] left-[-50px] rounded bg-white p-4 model shadow-lg" v-if="show" ref="modal">
				<profile-menu-list :links="{
					main: 'profile-list space-y-6',
					urls: [
						{
							icon: '',
							url: '/auth/signin',
							title: 'Войти'
						},
					]
				}" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, PropType, onMounted, ref} from 'vue'
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

	setup() {
		const domainName = ref<string | null>(null);

		onMounted(() => {
			domainName.value = window.location.protocol;
		});

		return { domainName };
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
