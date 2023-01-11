import styled from 'styled-components';

export const InputBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	& textarea {
		outline: none;
		border-radius: 0.5rem;
		padding: 1rem;
		background-color: #107c41;
		color: white;
		&.error {
			border: 1px solid #cd3f2c;
			background: #cd3f2c;
		}
	}
	& label {
		font-size: 1.2rem;
		margin-bottom: 0.4rem;
	}
	.format {
		font-size: 0.8rem;
		opacity: 0.5;
	}
	span {
		color: #cd3f2c;
		font-size: 1.1rem;
	}
`;
