import server from 'axios'
import store from "../store/store";

class Api {

	#api_url_main = "/api/"
	#token = store.state.csrf

	async #serverInit(methods = "GET" as string, url: string) {
		const {data} = await server({
			method: methods,
			url: `${this.#api_url_main}${url}?_pass=${process.env.AXIOS_PASSWORD}`,
			data: {
				_token: this.#token
			}
		});

		return data
	}

	getUrl() {
		return this.#serverInit("GET", "users");
	}

	postUrl() {

	}

	anyUrl() {

	}
}

export default Api;
