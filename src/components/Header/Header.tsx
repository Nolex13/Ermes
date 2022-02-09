import styled from 'styled-components';
import React, { FC } from 'react';
import { EnvironmentSelector } from './EnvironmentSelector';
import { MdOutlineUpload } from 'react-icons/md';

const StyledHeader = styled.header`
	background-color: ${props => props.theme.dark2};
	color: ${props => props.theme.light1};
	align-items: center;
	display: flex;
	padding: 16px 16px;
	justify-content: space-between;
`;

const RightHeader = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	gap: 16px;
`;

const UploadIcon = styled(MdOutlineUpload)`
	cursor: pointer;
	font-size: 20px;
`;

export const Header: FC = () => (
	<StyledHeader>
		<div>
			<h1>Ermes</h1>
		</div>
		<RightHeader>
			<UploadIcon title="Upload" />
			<EnvironmentSelector />
		</RightHeader>
	</StyledHeader>
);
