import styled from 'styled-components';
import { FC } from 'react';
import { Method, Url } from './Url';

const SidebarWrapper = styled.div`
	background: ${props => props.theme.primary};
	background: linear-gradient(
		300deg,
		${props => props.theme.primary} 0%,
		${props => props.theme.accent} 100%
	);
	color: ${props => props.theme.light};
	padding: 16px;
	display: flex;
	flex: 0 0 20%;
	flex-direction: column;
	gap: 8px;
	min-height: 100%;
`;

export const Sidebar: FC = () => (
	<SidebarWrapper>
		<Url method={Method.GET} />
		<Url method={Method.POST} />
		<Url method={Method.PUT} />
		<Url method={Method.DELETE} />
		<Url method={Method.OPTION} />
	</SidebarWrapper>
);
