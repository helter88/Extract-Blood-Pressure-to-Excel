import { useState } from 'react';
import styled from 'styled-components';
import DropdownMenuWithLanguages from './dropdown-menu-with-languages';
import ShowCurrentImgLang from './show-current-img-lang';
import { useTranslation } from 'react-i18next';

export const SelectLanguageContainer = styled.div`
	margin-left: 2rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	& p {
		font-size: 1rem;
	}
`;

export const ImageLanguageContainer = styled.div`
	position: relative;
	padding: 10px 0;

	&:hover {
		.language-dropdown {
			opacity: 1;
		}
	}
	.language-dropdown {
		opacity: 0;
		transition: opacity 0.3s;
	}
`;

const SelectLanguage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	const onHandleMouseEnter = () => setIsOpen(true);
	const onHandleMouseLeave = () => setIsOpen(false);

	return (
		<SelectLanguageContainer>
			<p>{t('Select Language')}</p>
			<ImageLanguageContainer
				onMouseEnter={onHandleMouseEnter}
				onMouseLeave={onHandleMouseLeave}
			>
				<ShowCurrentImgLang />
				<DropdownMenuWithLanguages openStatus={isOpen} />
			</ImageLanguageContainer>
		</SelectLanguageContainer>
	);
};

export default SelectLanguage;
