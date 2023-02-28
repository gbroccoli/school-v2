import './bootstrap.js';
import '../scss/app.scss'
import {createApp} from "vue/dist/vue.esm-bundler";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import uiMain from './components/index'
import search from "./modules/SearchPost/index"
// @ts-ignore
import { ZiggyVue } from 'ziggy-js/dist/vue';
import store from "./store/store";
import cardItem from "./modules/CardItem";
import profileMenu from "./modules/ProfileMenu";

const app = createApp({})

/*-----------------------------------------------------------------------------------------*/

uiMain.forEach(ui=>{
    // @ts-ignore
    app.component(ui.name, ui)
})

app.component(search.name, search)
app.component(cardItem.name, cardItem)
app.component(profileMenu.name, profileMenu)

/*-----------------------------------------------------------------------------------------*/
app
    .use(ZiggyVue)
	.use(store)
    .use(autoAnimatePlugin)
    .mount('#app')
