const excelFileRegex = /^.*(\.xlsx|\.XLS)$/;
export const validateFileType = (fileName: string) => {
	return excelFileRegex.test(fileName);
};
