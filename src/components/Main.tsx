import styled from 'styled-components';
import React, { FC } from 'react';
import { useAppSelector } from '../data/Hooks';
import { getActivePage } from '../data/slices/PagesSlice';
import { Paginator } from './Paginator/Paginator';
import { RequestBody } from './RequestBody';

const Container = styled.div`
	background: ${props => props.theme.dark4};
	color: ${props => props.theme.light1};
	flex: 1 1;
	padding: 16px;
	min-height: 100%;
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
					<RequestBody request={getActivePage(pagination)} />
				)}
			</Container>
		</Wrapper>
	);
};
