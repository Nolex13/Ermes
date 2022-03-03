import React, { ChangeEvent, FC } from 'react';
import { Request } from '../../data/Types';
import { Row } from '../Row/Row';
import { Tabs } from '../Tab/Tabs';
import { Tab } from '../Tab/Tab';
import { ParamsTab } from './ParamsTab';
import { BodyTab } from './BodyTab';
import styled from 'styled-components';
import { UrlBar } from './UrlBar';
import { HeadersTab } from './HeaderTab';
import { TransparentInput } from '../Input/TransparentInput';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { getRequestBy, update } from '../../data/slices/RequestSlice';

interface Props {
	request: Request;
}

const Separator = styled.hr`
	margin: 32px 0;
	border: thin solid ${p => p.theme.light2};
`;

const DescriptionInput = styled(TransparentInput)`
	font-size: 2em;
`;

const Description: FC<{ requestId: string }> = ({ requestId }) => {
	const request = useAppSelector(state => getRequestBy(state, requestId));
	const dispatch = useAppDispatch();
	const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
		const updatedRequest = {
			...request,
			description: e.target.value,
		};
		dispatch(
			update({
				index: request.index,
				newValue: updatedRequest,
			}),
		);
	};
	return (
		<DescriptionInput
			value={request.description}
			onChange={onDescriptionChange}
		/>
	);
};

const RequestBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RequestBody: FC<Props> = ({ request }) => (
	<RequestBodyWrapper>
		<Row>
			<Description requestId={request.index} />
		</Row>
		<Row>
			<UrlBar requestId={request.index} />
		</Row>
		<Separator />
		<Row>
			<Tabs>
				<Tab title="Params">
					<ParamsTab requestId={request.index} />
				</Tab>
				<Tab title="Body">
					<BodyTab requestId={request.index} />
				</Tab>
				<Tab title="Headers">
					<HeadersTab requestId={request.index} />
				</Tab>
			</Tabs>
		</Row>
	</RequestBodyWrapper>
);
