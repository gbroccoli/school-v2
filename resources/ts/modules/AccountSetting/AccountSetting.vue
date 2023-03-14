<template>
	<form action="#" @submit.prevent>
		<div class="grid grid-cols-8 gap-2">

			<div class="col-span-1">
				<img :src="profilePhoto" alt="avatar" class="w-[115px] h-[115px] rounded-full">
				<input type="file" id="avatar" class="hidden" ref="fileInput" @change="onFileSelected">
			</div>

			<div class="col-span-3">
				<label for="surname">
					<input id="surname" required type="text" v-model="surname" placeholder="Ваша фамилия" class="border w-full px-4 py-2 rounded-md">
				</label>
			</div>

			<div class="col-span-3">
				<label for="name">
					<input id="name" required type="text" v-model="names" placeholder="Ваше имя" class="border w-full px-4 py-2 rounded-md">
				</label>
			</div>

			<div class="col-span-4">
				<label for="patronymic">
					<input type="text" id="patronymic" v-model="patronymic" :placeholder="patronymic !== '' ? patronymic : 'Тут будет ваше отчество'" class="border w-full px-4 py-2 rounded-md">
				</label>
			</div>

			<div class="col-span-8 grid grid-cols-8 gap-2">
				<div class="col-span-4">
					<label for="email">
						<input id="email" @change="isEmail" type="email" v-model="email" :class='[isEmailValid === false ? "border-red-700 border-[2px]" : "", "border w-full px-4 py-2 rounded-md" ]'>
					</label>
				</div>
			</div>

			<dropdown-select />
		</div>
	</form>
</template>

<script lang="ts">

import {defineComponent, PropType, Ref, ref} from 'vue'
import DropdownSelect from "@/shared/UI/DropdownSelect.vue";
import { Profile } from '@/model/model';
import axios from "axios";
import route from "ziggy-js";
import {isValidEmail} from "@/features/authFilters"

export default defineComponent({
	name: "AccountSetting",
	components: {DropdownSelect},

	data()
	{
		return {
			isEmailValid: undefined as boolean | undefined
		}
	},

	props: {
		users: {
			type: String,
			required: true
		},
	},

	setup(props)
	{
		const user : Profile = JSON.parse(props.users)

		const surname : Ref<string> = ref(user.surname);
		const names : Ref<string> = ref(user.name);
		const patronymic : Ref<string|undefined> = ref(user.patronymic !== "" ? user.patronymic : "")
		const email : Ref<string> = ref(user.email);

		const profilePhoto : Ref<string> = ref('')

		const onFileSelected = (event: Event) => {
			const selectedFile = (event.target as HTMLInputElement).files?.[0];
			if (selectedFile) {
				const reader = new FileReader();
				reader.onload = () => {
					profilePhoto.value = reader.result as string;
				};
				reader.readAsDataURL(selectedFile);
			}
		};

		return {
			surname,
			names,
			patronymic,
			email,
			profilePhoto,
			onFileSelected,
		}
	},

	methods: {
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

		isEmail() {
			this.isEmailValid = isValidEmail(this.email)
		}
	},

	mounted() {
		this.loadProfilePhoto(JSON.parse(this.users).id)
	}
})
</script>
