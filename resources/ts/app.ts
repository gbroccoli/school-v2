import './bootstrap.js';
import '../scss/app.scss'
import {createApp} from "vue/dist/vue.esm-bundler";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp({})

/*-----------------------------------------------------------------------------------------*/



/*-----------------------------------------------------------------------------------------*/

app
    .use(autoAnimatePlugin)
    .mount('#app')
