import React, { FC } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
	font-family: 'Raleway', sans-serif;
	display: flex;
	flex-direction: column;
	height: 100%;
`;
const Header = styled.header`
	align-items: center;
	display: flex;
	padding: 8px;
`;

const Container = styled.div`
	display: flex;
	flex: 2;
`;

const theme: DefaultTheme = {
	primary: '#2F3E46',
	secondary: '#354F52',
	light: '#CAD2C5',
	warning: '#84A98C',
	accent: '#52796F',
};

const App: FC = () => (
	<ThemeProvider theme={theme}>
		<Wrapper>
			<Header>
				<h1>Ermes</h1>
			</Header>
			<Container>
				<Sidebar />
				<Main />
			</Container>
		</Wrapper>
	</ThemeProvider>
);

export default App;
