import styled from 'styled-components';
import MyExcelFile from './my-excel-file';
import NoExcelFile from './no-excel-file';

const OptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 6rem;
	padding: 0 25rem;
	@media (max-width: 1800px) {
		padding: 0 20rem;
	}
	@media (max-width: 1650px) {
		padding: 0 15rem;
	}
	@media (max-width: 1550px) {
		padding: 0 10rem;
	}
	@media (max-width: 1350px) {
		padding: 0 5rem;
	}
`;

const Options = () => {
	return (
		<OptionsContainer>
			<NoExcelFile />
			<MyExcelFile />
		</OptionsContainer>
	);
};

export default Options;
