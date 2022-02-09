import styled from 'styled-components';
import React, { FC } from 'react';
import { RequestPreview } from './RequestPreview';
import { MdAddCircleOutline } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../utils/Hooks';
import { add, createNewEmptyRequest } from '../data/slices/RequestSlice';
import { enqueue } from '../data/slices/PagesSlice';

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

	& div {
		display: flex;
		gap: 8px;
		align-items: center;
		cursor: pointer;
	}
`;

export const Sidebar: FC = () => {
	const requests = useAppSelector(state => state.requests);
	const dispatch = useAppDispatch();

	const addNewUrl = () => {
		const newRequest = createNewEmptyRequest();
		dispatch(add(newRequest));
		dispatch(enqueue(newRequest));
	};
	return (
		<SidebarWrapper>
			<Urls>
				{requests.map(request => (
					<RequestPreview request={request} key={request.index} />
				))}
			</Urls>
			<Controls>
				<div onClick={() => addNewUrl()}>
					Create a new request <MdAddCircleOutline />
				</div>
			</Controls>
		</SidebarWrapper>
	);
};
