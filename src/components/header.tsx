import styled from 'styled-components';
import DropDownMenu from './dropdown-menu';
import { useTranslation } from 'react-i18next';
import useLanguages from '../hooks/use-languages';
import { useEffect } from 'react';
import { lngToISO } from '../utils/lng-to-iso';

export const HeaderStyle = styled.div`
	display: flex;
	margin: 2rem auto;
	align-items: center;
	& h1 {
		font-size: 3rem;
		@media (max-width: 1150px) {
			font-size: 2rem;
		}
	}
`;

const Header = () => {
	const { t, i18n } = useTranslation();
	const { language } = useLanguages();

	useEffect(() => {
		i18n.changeLanguage(lngToISO(language));
	}, [i18n, language]);

	return (
		<HeaderStyle>
			<h1>{t('Title')}</h1>
			<DropDownMenu />
		</HeaderStyle>
	);
};

export default Header;
