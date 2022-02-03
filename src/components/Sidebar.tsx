import styled from 'styled-components';
import React, { FC, useContext } from 'react';
import { RequestPreview } from './RequestPreview';
import { MdAddCircleOutline } from 'react-icons/md';
import { ActionType } from '../context/ActionType';
import { DataContext } from '../context/DataContext';

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

export const Sidebar: FC = () => {
	const { state, dispatch } = useContext(DataContext);
	const addNewUrl = () => {
		dispatch({ type: ActionType.ADD_REQUEST });
	};
	return (
		<SidebarWrapper>
			<Urls>
				{state.requests.map(request => (
					<RequestPreview request={request} key={request.index} />
				))}
			</Urls>
			<Controls>
				<MdAddCircleOutline onClick={() => addNewUrl()} />
			</Controls>
		</SidebarWrapper>
	);
};
