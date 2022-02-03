import styled from 'styled-components';
import React, { FC } from 'react';
import { ParamsTab } from './ParamsTab';
import { BodyTab } from './BodyTab';
import { Dropdown } from './Dropdown/Dropdown';
import { Input } from './Input/Input';
import { Button } from './Button/Button';
import { Row } from './Row/Row';
import { Tabs } from './Tab/Tabs';
import { Tab } from './Tab/Tab';
import { useParams } from 'react-router-dom';
import { Request } from '../data/Data';
import { useAppDispatch, useAppSelector } from '../data/Hooks';
import { getRequestBy, update } from '../data/slices/RequestSlice';

const MainWrapper = styled.div`
	background: ${props => props.theme.dark4};
	color: ${props => props.theme.light1};
	flex: 1 1;
	padding: 16px;
	min-height: 100%;
`;

type Params = {
	requestId: string;
};

const Url: FC<{ requestId: string }> = ({ requestId }) => {
	const request = useAppSelector(state => getRequestBy(state, requestId));
	const dispatch = useAppDispatch();

	const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedRequest = {
			...request,
			url: e.target.value,
		};
		dispatch(
			update({
				index: request.index,
				newValue: updatedRequest,
			}),
		);
	};

	return <Input value={request.url} onChange={e => onUrlChange(e)} />;
};

const UrlBar: FC<{ request: Request }> = ({ request }) => {
	return (
		<>
			<Dropdown
				initialValue={request.method.valueOf()}
				items={['POST', 'GET', 'PUT', 'DELETE', 'OPTION']}
			/>
			<Url requestId={request.index} />
			<Button> Send </Button>
		</>
	);
};

export const Main: FC = () => {
	const { requestId } = useParams<Params>();

	if (requestId === undefined) return <span>Ciaone</span>;

	const request = useAppSelector(state => getRequestBy(state, requestId));

	return (
		<MainWrapper>
			<Row>
				<h2>{request.description}</h2>
			</Row>
			<Row>
				<UrlBar request={request} />
			</Row>
			<Row>
				<Tabs>
					<Tab title="Params">
						<ParamsTab />
					</Tab>
					<Tab title="Body">
						<BodyTab />
					</Tab>
					<Tab title="Headers">
						<ParamsTab />
					</Tab>
				</Tabs>
			</Row>
		</MainWrapper>
	);
};
