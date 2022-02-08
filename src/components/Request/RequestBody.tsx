import React, { FC } from 'react';
import { Request } from '../../data/Types';
import { Row } from '../Row/Row';
import { Tabs } from '../Tab/Tabs';
import { Tab } from '../Tab/Tab';
import { ParamsTab } from '../Params/ParamsTab';
import { BodyTab } from './BodyTab';
import styled from 'styled-components';
import { UrlBar } from './UrlBar';

interface Props {
	request: Request;
}

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
						<BodyTab requestId={request.index} />
					</Tab>
					<Tab title="Headers">
						<ParamsTab requestId={request.index} />
					</Tab>
				</Tabs>
			</Row>
		</>
	);
};
