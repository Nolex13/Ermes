import styled from 'styled-components';
import React, { FC } from 'react';
import { EnvironmentSelector } from './EnvironmentSelector';

const StyledHeader = styled.header`
	background-color: ${props => props.theme.dark2};
	color: ${props => props.theme.light1};
	align-items: center;
	display: flex;
	padding: 16px 16px;
	justify-content: space-between;
`;

export const Header: FC = () => (
	<StyledHeader>
		<h1>Ermes</h1>
		<EnvironmentSelector />
	</StyledHeader>
);
