import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const useLanguages = () => {
	const allLanguages = ['English', 'German', 'Italian', 'Polish'];
	const [languages, setLanguages] = useState(allLanguages);
	const [language, setLanguage] = useLocalStorage('language', '');

	const selectDefaultLanguage = () => {
		switch (window.navigator.language) {
			case 'pl':
				return 'Polish';
			case 'de':
				return 'German';
			case 'it':
				return 'Italian';
			default:
				return 'English';
		}
	};

	useEffect(() => {
		if (language === '') {
			const selectedDefaultLang = selectDefaultLanguage();
			setLanguage(selectDefaultLanguage);
			setLanguages((prev) =>
				prev.filter((lang) => lang !== selectedDefaultLang)
			);
		}
	}, [language, setLanguage]);

	useEffect(() => {
		setLanguages(() => allLanguages?.filter((item) => item !== language));
	}, [language]);

	return { language, languages, setLanguage };
};

export default useLanguages;
