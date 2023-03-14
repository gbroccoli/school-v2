import { numberLess } from "./filters";
import {FullDate} from "@/model/model";

const date = new Date()

const dates : FullDate  = {
	years: date.getFullYear(),
	month: date.getMonth()+1,
	days: date.getDate()
};

export const DateFull = () => {
	dates.month = numberLess(dates.month);
	dates.days = numberLess(dates.days);

	return `${dates.years}.${dates.month}.${dates.days}`;
}
