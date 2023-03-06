<template>
	<form @submit.prevent="handleSubmit" class="flex flex-col bg-gray-300 p-4 rounded-xl">
		<h2 class="font-[IBM_Plex_Sans] text-[32px] font-bold text-center">Вход в личный кабинет</h2>
		<div class="grid grid-cols-3 gap-4 my-4">
			<label class="col-span-3 font-[IBM_Plex_Sans_Condensed]">
				Email:<br>
				<input class="w-full rounded-md px-5 py-1 font-[IBM_Plex_Sans_Condensed]" type="email" v-model.trim="email" required />
			</label>
			<label class="col-span-3">
				Password:<br>
				<input class="w-full rounded-md px-5 py-1 font-[IBM_Plex_Sans_Condensed]" type="password" v-model.trim="password" required />
			</label>
			<label>
				<input type="checkbox" class="login-remember" v-model="rememberMe" />
				Запомнить меня
			</label>
		</div>
		<ui-button label="Войти" type="submit" color="accept" :disabled="!isFormValid"></ui-button>
		<div v-if="loginError" class="text-red-500 mt-2">{{ loginError }}</div>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import axios from 'axios';
import route from 'ziggy-js';
import UiButton from "../../shared/UI/uiButton.vue";

export default defineComponent({
	name: 'LoginForm',
	components: {UiButton},
	setup() {
		const email: Ref<string> = ref('');
		const password: Ref<string> = ref('');
		const rememberMe: Ref<boolean> = ref(false);
		const loginError: Ref<string | null> = ref(null);

		const isFormValid = (): boolean => {
			return email.value.trim() !== '' && password.value.trim() !== '';
		};

		const handleSubmit = async (): Promise<void> => {
			try {
				const response = await axios.post(route('loginTo'), {
					email: email.value,
					password: password.value,
					remember_me: rememberMe.value,
				});

				if (response.status === 200) {
					if (response.data.authorization) {
						window.location.href = route("profile");
					} else  {
						loginError.value = "Не верно введёт email или пароль"
					}
				}
			} catch (error: any) {
				loginError.value = error.response.data.msg;
			}
		};

		return {
			email,
			password,
			rememberMe,
			loginError,
			isFormValid,
			handleSubmit,
		};
	},
});
</script>

<style lang="scss" scoped>
.login-remember:checked {
	background-color: green;
}
</style>
