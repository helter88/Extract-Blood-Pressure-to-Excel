import { forwardRef } from 'react';
import { InputBoxContainer } from './styles/input-box';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { callbackify } from 'util';

const InputBox = forwardRef<HTMLTextAreaElement>((props, ref) => {
	const { t } = useTranslation();
	const [error, setError] = useState<string>('');

	const handleBlur = (e: any) => {
		let inputArr = e.target.value.split('\n');
		console.log(inputArr);
		/*Logika do validacji */
		if (true) {
			setError('Wrong format');
		}
	};

	const isError = error.length > 0;

	return (
		<InputBoxContainer>
			<label htmlFor="results">{t('Add your results')}</label>
			<label className="format">Format: DD.MM.YYYY 120/80 p 70</label>
			<textarea
				onBlur={handleBlur}
				onFocus={() => setError('')}
				ref={ref}
				id="results"
				name="results"
				rows={23}
				cols={30}
				className={`${isError ? 'error' : ''}`}
			/>
			{isError && <span>{error}</span>}
		</InputBoxContainer>
	);
});

export default InputBox;
