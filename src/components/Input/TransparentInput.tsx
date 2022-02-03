import styled from 'styled-components';
import { Input } from './Input';

export const TransparentInput = styled(Input)`
	background-color: transparent;
	border: none;
	height: auto;
	padding: 0;
	width: 100%;

	&:focus {
		outline: none;
	}
`;
