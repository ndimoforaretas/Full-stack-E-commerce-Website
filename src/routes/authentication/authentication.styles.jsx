import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
	display: flex;
	width: 900px;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		gap: 80px;
		width: 90%;
		align-items: center;
	}
`;
