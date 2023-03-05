<template>
	<form @submit.prevent="handleSubmit" class="flex flex-col">
		<label>
			Email:
			<input type="email" v-model.trim="email" required />
		</label>
		<label>
			Password:
			<input type="password" v-model.trim="password" required />
		</label>
		<label>
			<input type="checkbox" v-model="rememberMe" />
			Запомнить меня
		</label>
		<button type="submit" :disabled="!isFormValid">Log in</button>
		<div v-if="loginError" class="text-red-500 mt-2">{{ loginError }}</div>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import axios from 'axios';
import route from 'ziggy-js';

export default defineComponent({
	name: 'LoginForm',
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
					// window.location.href = route("profile");
					console.log(response)
				}
			} catch (error: any) {
				loginError.value = error.response.data.message;
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
