import '@/bootstrap.ts';
// import '@style/app.scss'
import {createApp} from "vue/dist/vue.esm-bundler";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import uiMain from '@/components/index'
import search from "@/modules/SearchPost/index"
import AccountSetting from "@/modules/AccountSetting/index";
import { ZiggyVue } from 'ziggy-js/dist/vue';
import store from "@/store/store";
import cardItem from "@/modules/CardItem";
import profileMenu from "@/modules/ProfileMenu";
import VueClickAway from "vue3-click-away";
import loginForm from "@/modules/LoginForm";


// icon imports
/*-----------------------------------------------------------------------------------------*/
import ArrowRight from "@/shared/icons/ArrowRight.vue"
/*-----------------------------------------------------------------------------------------*/

const app = createApp({})


// components
/*-----------------------------------------------------------------------------------------*/
app.component(search.name, search)
app.component(cardItem.name, cardItem)
app.component(profileMenu.name, profileMenu)
app.component(AccountSetting.name, AccountSetting)
app.component(loginForm.name, loginForm)

// icon
/*-----------------------------------------------------------------------------------------*/
app.component('arrowRight', ArrowRight);
/*-----------------------------------------------------------------------------------------*/

// init
/*-----------------------------------------------------------------------------------------*/
app
	.use(ZiggyVue)
	.use(VueClickAway)
	.use(store)
	.use(autoAnimatePlugin)
	.mount('#app')

