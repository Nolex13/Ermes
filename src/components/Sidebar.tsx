import styled from 'styled-components';
import React, { FC } from 'react';
import { Method, Url } from './Url';
import { MdAddCircleOutline } from 'react-icons/md';

const SidebarWrapper = styled.div`
	background: ${props => props.theme.dark3};
	background: linear-gradient(
		300deg,
		${props => props.theme.dark2} 0%,
		${props => props.theme.dark4} 100%
	);
	color: ${props => props.theme.light1};
	padding: 16px;
	display: flex;
	flex-direction: column;
	flex: 0 0 20%;
`;

const Urls = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex: 1;
`;

const Controls = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Sidebar: FC = () => (
	<SidebarWrapper>
		<Urls>
			<Url method={Method.GET} />
			<Url method={Method.POST} />
			<Url method={Method.PUT} />
			<Url method={Method.DELETE} />
			<Url method={Method.OPTION} />
		</Urls>
		<Controls>
			<MdAddCircleOutline />
		</Controls>
	</SidebarWrapper>
);
