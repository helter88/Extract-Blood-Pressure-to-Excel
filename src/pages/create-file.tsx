import { useRef } from 'react';
import styled from 'styled-components';
import CenterBox from '../components/boxes/center-box';
import NewFileBox from '../components/boxes/new-file-box';
import InputBox from '../components/boxes/input-box';
import { useEffectOnce } from 'usehooks-ts';
import { createExcelAndExport } from '../utils/excel-create-export';
import { parse } from '../utils/parse-blood-pressure-text';

export const CreateFileContainer = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: space-between;
	padding: 0 25rem;
`;

const CreateFile = () => {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const handleCreateFile = () => {
		const parsedData = parse(inputRef?.current?.value || '');
		createExcelAndExport(parsedData);
	};

	return (
		<CreateFileContainer>
			<InputBox ref={inputRef} />
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
