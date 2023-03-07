export interface Value {
	id: number
	group: string
	created_at?: string | Date
	updated_at?: string | Date
}

export interface Clock {
	hour?: number|string| Date
	minute?: number|string| Date
	second?: number|string| Date
}

export interface Opt {
	id: number,
	appellation: string,
	option?: string[]
}

export interface Profile {
	id: number,
	surname: string,
	name: string,
	patronymic?: string,
	email: string,
	email_verified_at?: boolean | Date | string,
	group_id: number | string,
	course_group: number | string,
	avatar?: string,
}

export interface Posts {
	id: number,
	title: string,
	descr: string,
	body: string,
	date: string | Date,
	endDate?: string,
	files?: string[] | string
}

export interface Accordions {
	title: string,
	body?: string
}

export interface urlsAny {
	main: string,
	chiles: string,
	chiles2: string,
	url: string[] | void | number[]
}
