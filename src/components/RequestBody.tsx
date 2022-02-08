import React, { FC } from 'react';
import { Method, Request } from '../data/Types';
import { Row } from './Row/Row';
import { Dropdown } from './Dropdown/Dropdown';
import { Button } from './Button/Button';
import { Tabs } from './Tab/Tabs';
import { Tab } from './Tab/Tab';
import { ParamsTab } from './Params/ParamsTab';
import { BodyTab } from './BodyTab';
import { useAppDispatch, useAppSelector } from '../utils/Hooks';
import { getRequestBy, update } from '../data/slices/RequestSlice';
import { Input } from './Input/Input';
import styled from 'styled-components';

interface Props {
	request: Request;
}

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
	const dispatch = useAppDispatch();

	const onMethodChange = (newMethod: string) => {
		const updatedRequest: Request = {
			...request,
			method: newMethod as Method,
		};
		dispatch(
			update({
				index: request.index,
				newValue: updatedRequest,
			}),
		);
	};
	return (
		<>
			<Dropdown
				initialValue={request.method.valueOf()}
				items={['POST', 'GET', 'PUT', 'DELETE', 'OPTION']}
				onChange={onMethodChange}
			/>
			<Url requestId={request.index} />
			<Button> Send </Button>
		</>
	);
};

const Separator = styled.hr`
	margin: 32px 0;
	border: thin solid ${p => p.theme.light2};
`;

export const RequestBody: FC<Props> = ({ request }) => {
	return (
		<>
			<Row>
				<h2>{request.description}</h2>
			</Row>
			<Row>
				<UrlBar request={request} />
			</Row>
			<Separator />
			<Row>
				<Tabs>
					<Tab title="Params">
						<ParamsTab requestId={request.index} />
					</Tab>
					<Tab title="Body">
						<BodyTab />
					</Tab>
					<Tab title="Headers">
						<ParamsTab requestId={request.index} />
					</Tab>
				</Tabs>
			</Row>
		</>
	);
};
