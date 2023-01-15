import './bootstrap.js';
import '../scss/app.scss'
import {createApp} from "vue/dist/vue.esm-bundler";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import uiMain from './components/index'
// @ts-ignore
import { ZiggyVue } from 'ziggy-js/dist/vue';

const app = createApp({})

/*-----------------------------------------------------------------------------------------*/

uiMain.forEach(ui=>{
    // @ts-ignore
    app.component(ui.name, ui)
})

/*-----------------------------------------------------------------------------------------*/

app
    .use(ZiggyVue)
    .use(autoAnimatePlugin)
    .mount('#app')
