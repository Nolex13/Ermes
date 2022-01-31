import styled from 'styled-components';

export const Button = styled.button`
	height: 40px;
	border: none;
	padding: 8px 16px;
	background-color: ${p => p.theme.dark6};
	color: ${p => p.theme.light1};
	border: thin solid ${p => p.theme.dark6};
`;
