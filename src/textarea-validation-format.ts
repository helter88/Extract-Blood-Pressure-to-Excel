const verifyLineRegex =
	/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d\s\d{2,3}\/\d{2}\sp.?\s*\d{2}$/;

export const TextareaValidation = (inputData: string) => {
	let inputArr = inputData.split('\n');
	const wrongLines = [];
	if (!verifyLineRegex.test(inputArr[0])) {
		wrongLines.push(1);
	}
	for (let i = 1; i <= inputArr.length - 1; i++) {
		if (inputArr[i] !== '' && !verifyLineRegex.test(inputArr[i])) {
			wrongLines.push(i + 1);
		}
	}

	return wrongLines;
};
