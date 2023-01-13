import { ReactComponent as RightArrow } from '../../assets/img/arrow-right-icon.svg';
import { useTranslation } from 'react-i18next';
import { ArrowContainer, CenterContainer } from './styles/center-box';
import { ActionButton } from './styles/file-box';
import { parse } from '../../utils/parse-blood-pressure-text';
import { createExcelAndExport } from '../../utils/excel-create-export';

interface CenterBoxType {
	name: 'create' | 'add';
	inputData: any;
	excelData?: any;
	changeFileSelectStatus: () => void;
	onClick: () => void;
}

const CenterBox: React.FC<CenterBoxType> = ({
	name,
	inputData,
	excelData,
	changeFileSelectStatus,
	onClick,
}) => {
	const { t } = useTranslation();

	return (
		<CenterContainer>
			<ActionButton onClick={onClick}>{t('Start exporting')}</ActionButton>
			<ArrowContainer>
				<RightArrow aria-label="right arrow" />
			</ArrowContainer>
		</CenterContainer>
	);
};

export default CenterBox;
