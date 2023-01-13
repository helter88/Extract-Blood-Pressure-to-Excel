import { calculateAverage } from './calculate-average';

export interface BloodPressure {
	pulse: number;
	date: string;
	systolic: number;
	diastolic: number;
}

export const parse = (text: string): BloodPressure[] => {
	const lines = text.split('\n');
	const columns = lines.map((l) => l.split(' ')).filter((l) => l.length > 2);

	let items: BloodPressure[] = [];

	columns.forEach((c, i) => {
		let pulseTxt = c[2];
		let pulse: number = 0;

		if (pulseTxt.includes('p') && c?.length > 3) {
			pulseTxt = c[2] + c[3];
		}

		pulse = parseInt(pulseTxt.replace(/\D/g, ''));

		const pressure = c[1].split('/');
		const systolic = parseInt(pressure[0]);
		const diastolic = parseInt(pressure[1]);
		const date = c[0];

		items.push({
			date,
			systolic,
			diastolic,
			pulse,
		});
	});

	return calculateAverage(items);
};
