import React, { useRef, useState } from 'react';
import CenterBox from '../components/boxes/center-box';
import FileBox from '../components/boxes/file-box';
import InputBox from '../components/boxes/input-box';
import { CreateFileContainer } from './create-file';

import { createExcelAndExport } from '../utils/excel-create-export';
import { parse } from '../utils/parse-blood-pressure-text';
import { mergeData } from '../utils/merge-excel-data-with-text';

const AddToFile = () => {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [fileBoxData, setFileBoxData] = useState<any>(null);
	const [fileSelectStatus, setFileSelectStatus] = useState<boolean | null>(
		null
	);
	const [inputError, setInputError] = useState(false);

	const handleExcelData = (excelData: any) => {
		setFileBoxData(excelData);
	};

	const handleFileSelectStatus = () => {
		setFileSelectStatus(true);
	};

	const handleFileSelected = () => {
		setFileSelectStatus(false);
	};

	const onInputError = (isError: boolean) => {
		setInputError(isError);
	};

	const handleClick = () => {
		if (inputError) return;

		if (fileBoxData === null) {
			handleFileSelectStatus();
			return;
		}
		if (!inputRef?.current?.value) {
			return;
		}
		const parsedData = parse(inputRef?.current?.value || '');
		const mergedData = mergeData(parsedData, fileBoxData);
		createExcelAndExport(mergedData);
	};

	return (
		<CreateFileContainer>
			<InputBox ref={inputRef} onIsErrorChange={onInputError} />
			<CenterBox
				onClick={handleClick}
				name="add"
				inputData={inputRef}
				excelData={fileBoxData}
				changeFileSelectStatus={handleFileSelectStatus}
			/>
			<FileBox
				excelData={handleExcelData}
				fileSelectStatus={fileSelectStatus}
				fileSelected={handleFileSelected}
			/>
		</CreateFileContainer>
	);
};

export default AddToFile;
