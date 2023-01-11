export const validateClientExcel = (data: any) => {
	if (data.some((item: any) => item.date === undefined)) return false;
	if (data.some((item: any) => item.systolic === undefined)) return false;
	if (data.some((item: any) => item.diastolic === undefined)) return false;
	if (data.some((item: any) => item.pulse === undefined)) return false;
	return true;
};
