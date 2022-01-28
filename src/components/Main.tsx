import styled from 'styled-components';
import { FC } from 'react';
import {
	Dropdown,
	FormControl,
	InputGroup,
	Button,
	Tabs,
	Tab,
} from 'react-bootstrap';
import { ParamsTab } from './ParamsTab';
import { BodyTab } from './BodyTab';

const MainWrapper = styled.div`
	background: ${props => props.theme.light};
	background: linear-gradient(
		330deg,
		${props => props.theme.light} 0%,
		${props => props.theme.warning} 28%
	);
	flex: 1 1;
	padding: 16px;
	min-height: 100%;
`;

const Row = styled.div`
	margin-top: 16px;
	margin-bottom: 16px;
`;

export const Main: FC = () => (
	<MainWrapper>
		<Row>
			<InputGroup>
				<Dropdown>
					<Dropdown.Toggle variant="success">POST</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">GET</Dropdown.Item>
						<Dropdown.Item href="#/action-2">DELETE</Dropdown.Item>
						<Dropdown.Item href="#/action-3">PUT</Dropdown.Item>
						<Dropdown.Item href="#/action-3">OPTION</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<FormControl value="/a/random/url/for/example/{{id}}" />
				<Button>Send</Button>
			</InputGroup>
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
