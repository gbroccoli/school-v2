import server from 'axios'
import store from "../store/store";

export default class Api {

	#api_url_main: string = "/api/"
	#token = store.state.csrf
	#password = "hunter98";

	async #serverInit(
		methods = "GET" as string,
		url: string,
		params = "" as string,
		headers = {"content-type": "application/json"} as object,
		record = {} as object
	) {
		const { data } = await server({
			method: methods,
			url: `${this.#api_url_main}${url}?_pass=${this.#password}${params}`,
			data: {
				_token: this.#token,
				...record
			},
			headers: {
				...headers
			}
		});

		return data;
	}

	methodGetUrl(
		url: string,
		params = "GET" as string,
		headers = {"content-type": "application/json"} as object,
		record = {} as object
	) {
		return this.#serverInit("GET", url, params, headers);
	}

	methodPostUrl(
		url: string,
		params = "POST" as string,
		headers = {"content-type": "application/json"} as object,
		record: object
	) {
		return this.#serverInit("POST", url, params, record);
	}

	methodAnyUrl(
		methods: string,
		url: string, params: string,
		headers = {"content-type": "application/json"} as object,
		record: object
	) {
		return this.#serverInit(methods, url, params, headers, record);
	}
}
