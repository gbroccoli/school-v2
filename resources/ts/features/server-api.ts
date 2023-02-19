import server from 'axios'
import store from "../store/store";

class Api {

	#api_url_main = "/api/"
	#token = store.state.csrf
	#password = "hunter98";

	async #serverInit(
		methods = "GET" as string,
		url: string,
		params = "" as string,
		headers = {"content-type": "application/json"} as object,
		datas = {} as object
	) {
		const {data} = await server({
			method: methods,
			url: `${this.#api_url_main}${url}?_pass=${this.#password}${params}`,
			data: {
				_token: this.#token,
				...datas
			},
			headers: {
				...headers
			}
		});

		return data;
	}

	getUrl(url: string, params = "" as string, headers = {"content-type": "application/json"} as object) {
		return this.#serverInit("GET", url, params, headers);
	}

	postUrl(url: string, params = "" as string, headers = {"content-type": "application/json"} as object, datas: object) {
		return this.#serverInit("POST", url, params, datas);
	}

	anyUrl(methods: string, url: string, params: string, headers = {"content-type": "application/json"} as object, datas: object) {
		return this.#serverInit(methods, url, params, headers, datas);
	}
}

export default Api;
