import { BloodPressure } from './parse-blood-pressure-text';
import i18next from 'i18next';

const totalDefault = { systolic: 0, diastolic: 0, pulse: 0 };

export const calculateAverage = (data: any) => {
	let total = totalDefault;
	let items: BloodPressure[] = [];

	data.forEach((item: any, i: number) => {
		const pulse = item.pulse;
		const systolic = item.systolic;
		const diastolic = item.diastolic;
		const date = item.date;

		total = {
			systolic: total.systolic + systolic,
			diastolic: total.diastolic + diastolic,
			pulse: total.pulse + pulse,
		};

		items.push({
			date,
			systolic,
			diastolic,
			pulse,
		});

		if ((i + 1) % 7 === 0) {
			const bp = {
				date: `${i18next.t('average')}`,
				systolic: Math.round(total.systolic / 7),
				diastolic: Math.round(total.diastolic / 7),
				pulse: Math.round(total.pulse / 7),
			};

			total = totalDefault;
			items.push(bp);
		}
	});

	return items;
};
