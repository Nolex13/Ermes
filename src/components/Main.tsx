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

const MainWrapper = styled.div`
	background: ${props => props.theme.dark4};
	flex: 1 1;
	padding: 16px;
	min-height: 100%;
`;

export const Main: FC = () => (
	<MainWrapper>
		<Row>
			<Dropdown
				defaultValue="POST"
				items={['POST', 'GET', 'PUT', 'DELETE', 'OPTION']}
			/>
			<Input defaultValue="/a/random/url/for/example/{{id}}" />
			<Button> Send </Button>
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
