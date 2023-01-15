export interface Value {
	id: number
	group: string
	created_at?: string | Date
	updated_at?: string | Date
}

export interface User {
	name?: string;
	email?: string;
	picture?: string;
	id?: number;
	group?: string;
	created_at?: string | Date;
	updated_at?: string | Date;
}

export interface groups {
	id?: number;
	group?: string;
	created_at?: string | Date;
	updated_at?: string | Date;
}

export interface Cards {
	id: number;
	name: string;
	files: any[];
}

export interface Text {
	title: string
	text: string
	btn: string
}

export interface Clock {
	hour?: number|string|Date
	minute?: number|string|Date
	second?: number|string|Date
}

export interface InputOpt {
	title?: string
	type?: string
	name?: string
	placeholder?: string
}

export interface tasks {
	id?: number;
	title?: string;
	date?: string;
	group_id?: number;
	user_id?: number;
	files?: any[];
}

export interface args {

}
