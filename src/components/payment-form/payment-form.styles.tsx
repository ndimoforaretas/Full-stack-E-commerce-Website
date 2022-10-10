import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
	/* height: 200px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f0f0f0;
	padding: 0 20px 100px 20px;
	margin-top: 50px;
	border-radius: 15px;
`;

export const FormContainer = styled.form`
	width: 90vw;
	height: 100px;

	/* min-width: 500px; */
	@media screen and (max-width: 800px) {
		width: 70vw;
	}
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
	background-color: #4285f4;
	color: white;
`;
