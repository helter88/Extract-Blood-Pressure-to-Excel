import { useState } from 'react';
import {
	FileNotChosen,
	FlieBoxContainer,
	ShowSelectedFile,
} from './styles/file-box';
import { useTranslation } from 'react-i18next';
import { excelExtractDataJSON } from '../../utils/excel-extract-data-JSON';
import { FileInput } from './styles/file-input';
import { validateFileType } from '../../utils/validate-file-type';

export interface FileBoxTypes {
	excelData: (recivedData: any) => void;
	fileSelectStatus: boolean | null;
	fileSelected: () => void;
}

const FileBox: React.FC<FileBoxTypes> = ({
	excelData,
	fileSelectStatus,
	fileSelected,
}) => {
	const { t } = useTranslation();
	const [selectedFileName, setSelectedFileName] = useState('');
	const handleFile = async (e: any) => {
		const recivedData = await excelExtractDataJSON(e);

		excelData(recivedData);
		if (e) {
			setSelectedFileName(e?.target?.files[0]?.name);
			fileSelected();
		}
	};

	const isVisibleFileNotChosen =
		fileSelectStatus === null || fileSelectStatus === false ? '' : 'visible';

	const statusShowSelectedFile = selectedFileName === '' ? 'hidden' : '';
	return (
		<FlieBoxContainer>
			<FileNotChosen className={isVisibleFileNotChosen}>
				<span>{t('Please choose file')}</span>
			</FileNotChosen>
			<FileInput>
				<input type="file" onChange={handleFile} />
				<span>{t('Choose your file')}</span>
			</FileInput>
			<ShowSelectedFile className={statusShowSelectedFile}>
				{t('Selected file:')} {selectedFileName}
			</ShowSelectedFile>
		</FlieBoxContainer>
	);
};

export default FileBox;
