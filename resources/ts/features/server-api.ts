import server from 'axios'
import store from "../store/store";

class Api {

	#api_url_main = "/api/"
	#token = store.state.csrf

	async #serverInit(methods = "GET" as string, url: string, params = "" as string) {
		const {data} = await server({
			method: methods,
			// @ts-ignore
			url: `${this.#api_url_main}${url}?_pass=${import.meta.env.AXIOS_PASSWORD}${params}`,
			data: {
				_token: this.#token
			}
		});

		return data
	}

	getUrl() {
		return this.#serverInit("GET", "users", "&search=ы");
	}

	postUrl() {

	}

	anyUrl() {

	}
}

export default Api;
