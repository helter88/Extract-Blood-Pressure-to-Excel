import { useRef, useState } from 'react';
import styled from 'styled-components';
import CenterBox from '../components/boxes/center-box';
import NewFileBox from '../components/boxes/new-file-box';
import InputBox from '../components/boxes/input-box';
import { createExcelAndExport } from '../utils/excel-create-export';
import { parse } from '../utils/parse-blood-pressure-text';
import { useTranslation } from 'react-i18next';

export const CreateFileContainer = styled.div`
	margin-top: 8rem;
	display: flex;
	justify-content: space-between;
	padding: 0 25rem;
	@media (max-width: 1800px) {
		padding: 0 20rem;
	}
	@media (max-width: 1650px) {
		padding: 0 15rem;
	}
	@media (max-width: 1550px) {
		padding: 0 10rem;
	}
	@media (max-width: 1350px) {
		padding: 0 5rem;
	}
	@media (max-width: 1000px) {
		margin-top: 5rem;
	}
`;

const CreateFile = () => {
	const [inputError, setInputError] = useState(false);
	const { t } = useTranslation();

	const inputRef = useRef<HTMLTextAreaElement>(null);

	const onInputError = (isError: boolean) => {
		setInputError(isError);
	};

	const handleCreateFile = () => {
		const inputValue = inputRef?.current?.value;
		if (inputError) return;
		if (inputValue === '') {
			alert(`${t('Write formated data')}`);
			return;
		}
		const parsedData = parse(inputValue || '');
		createExcelAndExport(parsedData);
	};

	return (
		<CreateFileContainer>
			<InputBox ref={inputRef} onIsErrorChange={onInputError} />
			<CenterBox
				name="create"
				inputData={inputRef}
				changeFileSelectStatus={() => null}
				onClick={handleCreateFile}
			/>
			<NewFileBox />
		</CreateFileContainer>
	);
};

export default CreateFile;
