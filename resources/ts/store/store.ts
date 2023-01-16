import {createStore} from "vuex";

// @ts-ignore
export default createStore({
	// @ts-ignore
	state () {
		return {
			// @ts-ignore
			csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
		}
	}
})

