import styled from 'styled-components';
import React, { FC } from 'react';
import { useAppSelector } from '../../utils/Hooks';
import { getActivePage } from '../../data/slices/PagesSlice';
import { Paginator } from '../Paginator/Paginator';
import { OpenRequest } from './OpenRequest';
import { RequestAndResponseSplitter } from './RequestAndResponseSplitter';

const Container = styled.div`
	background: ${props => props.theme.dark4};
	color: ${props => props.theme.light1};
	flex: 1 1;
	padding: 16px;
`;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const Main: FC = () => {
	const pagination = useAppSelector(state => state.pagination);

	return (
		<Wrapper>
			<Paginator />
			<Container>
				{pagination.pages.length > 0 && (
					<RequestAndResponseSplitter request={getActivePage(pagination)} />
				)}
				{pagination.pages.length === 0 && <OpenRequest />}
			</Container>
		</Wrapper>
	);
};
