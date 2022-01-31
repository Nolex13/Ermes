import styled from 'styled-components';
import { FC } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { ParamsTab } from './ParamsTab';
import { BodyTab } from './BodyTab';
import { Dropdown } from './Dropdown/Dropdown';
import { Input } from './Input/Input';
import { Button } from './Button/Button';
import { Row } from './Row/row';

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
			<Input value="/a/random/url/for/example/{{id}}" />
			<Button> Send </Button>
		</Row>
		<Row>
			<Tabs defaultActiveKey="params">
				<Tab eventKey="params" title="Params">
					<Row>
						<ParamsTab />
					</Row>
				</Tab>
				<Tab eventKey="body" title="Body">
					<Row>
						<BodyTab />
					</Row>
				</Tab>
				<Tab eventKey="headers" title="Headers">
					<Row>
						<ParamsTab />
					</Row>
				</Tab>
			</Tabs>
		</Row>
	</MainWrapper>
);
