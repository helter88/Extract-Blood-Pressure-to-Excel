import moment from 'moment';
import { calculateAverage } from './calculate-average';

export const mergeData = (from: any, to: any) => {
	const newData: any = to;

	from.forEach((item: any) => {
		if (!to.some((toItem: any) => toItem.date === item.date))
			newData.push(item);
	});

	const newDataSorted = newData
		.filter((d: any) => d.date.match(/^\d/))
		.sort(
			(a: any, b: any) =>
				moment(a.date, 'DD.MM.YYYY').unix() -
				moment(b.date, 'DD.MM.YYYY').unix()
		);

	return calculateAverage(newDataSorted);
};
