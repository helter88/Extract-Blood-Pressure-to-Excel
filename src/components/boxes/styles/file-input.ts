import styled from 'styled-components';

export const FileInput = styled.label`
	padding: 1rem 2rem;
	background-color: #107c41;
	color: white;
	outline: none;
	cursor: pointer;
	border: none;
	border-radius: 0.5rem;
	@media (max-width: 1000px) {
		padding: 0.8rem 1.5rem;
	}
	input {
		display: none;
	}
	span {
		font-size: 0.83rem;
		font-family: Arial;
		font-weight: 400;
	}
`;
