import { numberLess } from "./filters";

const date = new Date()

const dates = {
	years: date.getFullYear(),
	month: date.getMonth()+1,
	days: date.getDate()
} as any;

const DateFull = () => {
	dates.month = numberLess(dates.month);
	dates.days = numberLess(dates.days);

	return `${dates.years}-${dates.month}-${dates.days}`;
}

export default DateFull;
