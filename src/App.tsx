import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	border: 1px yellow solid;
	display: flex;
	flex-direction: column;
	height: 100%;
`;
const Header = styled.header`
	border: 1px solid red;
	align-items: center;
	height: 48px;
	display: flex;
	padding: 16px;
`;

const Container = styled.div`
	display: flex;
	flex: 2;
`;

const Sidebar = styled.div`
	border: 1px solid green;
	padding: 16px;
	display: flex;
	flex: 0 0 27%;
	min-height: 100%;
`;

const Main = styled.div`
	background-color: yellow;
	display: flex;
	flex: 1 1;
	padding: 16px;
	min-height: 100%;
`;

const App: FC = () => (
	<Wrapper>
		<Header>Ciao sono un header</Header>
		<Container>
			<Sidebar>Ciao sono una sidebar</Sidebar>
			<Main>Ciao sono un main</Main>
		</Container>
	</Wrapper>
);

export default App;
