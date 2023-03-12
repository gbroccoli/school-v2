import {createStore} from "vuex";
import {HTMLAttributes, readonly} from "vue";

// @ts-ignore
export default createStore({
	// @ts-ignore
	state () {
		return {
			// @ts-ignore
			// csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
		}
	}
})

