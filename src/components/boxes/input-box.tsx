import { forwardRef, useEffect } from 'react';
import { InputBoxContainer } from './styles/input-box';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { TextareaValidation } from '../../utils/textarea-validation-format';

interface InputBoxProps {
	onIsErrorChange: (isError: boolean) => void;
}

const InputBox = forwardRef<HTMLTextAreaElement, InputBoxProps>(
	(props: InputBoxProps, ref) => {
		const { t } = useTranslation();
		const [error, setError] = useState<string>('');

		const handleBlur = (e: any) => {
			const invalidLines = TextareaValidation(e.target.value);
			if (invalidLines.length !== 0) {
				invalidLines.length > 3
					? setError(
							`${t('Wrong format lines')} ` +
								`${invalidLines.slice(0, 3).join(',')}` +
								', ...'
					  )
					: setError(
							`${t('Wrong format in line/lines')} ` +
								`${invalidLines.join(',')}`
					  );
			} else {
				setError('');
			}
		};

		const isError = error.length > 0;
		useEffect(() => {
			props.onIsErrorChange(isError);
		}, [isError, props]);

		return (
			<InputBoxContainer>
				<label htmlFor="results">{t('Add your results')}</label>
				<label className="format">Format: 01.01.2023 120/80 p 70</label>
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
	}
);

export default InputBox;
