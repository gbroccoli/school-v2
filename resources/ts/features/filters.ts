import { Value } from "@/model/model"

export const noAdmin = (value: Value[], args: string[]) => {
	return value.filter(item => {
		return !args.includes(item.group)
	})
}

export const numberLess = (time: number | string): number | string => {
	if (time < 10) {
		time = '0' + time;
	}

	return time;
}

export const numberHour = (time: number): number => {
	if (time > 12) {
		time = time - 12;
	}

	return time;
}
