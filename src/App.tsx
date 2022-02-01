import React, { FC } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';

const Wrapper = styled.div`
	font-family: 'Raleway', sans-serif;
	font-weight: 300;
	display: flex;
	flex-direction: column;
	height: 100%;
`;
const Header = styled.header`
	background-color: ${props => props.theme.dark2};
	border-bottom: thin solid ${props => props.theme.light2};
	color: white;
	align-items: center;
	display: flex;
	padding: 8px 16px;
`;

const Container = styled.div`
	display: flex;
	flex: 2;
`;

const theme: DefaultTheme = {
	dark1: '#06080A',
	dark2: '#0D1217',
	dark3: '#141C24',
	dark4: '#1C2631',
	dark5: '#23303E',
	dark6: '#2A3B4B',
	primary: '#212F45',
	secondary: '#1B3A4B',
	light1: '#dedede',
	light2: '#525252',
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
