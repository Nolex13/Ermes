import styled from 'styled-components';

export const Input = styled.input`
	box-sizing: border-box;
	background-color: ${props => props.theme.dark5};
	color: ${p => p.theme.light1};
	border: thin solid ${p => p.theme.light2};
	border-right: none;
	border-left: none;
	height: 40px;
	padding: 8px 16px;
	flex: 1 1;
`;
