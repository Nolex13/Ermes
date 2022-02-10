import React, { FC } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main/Main';
import { Provider } from 'react-redux';
import { Store } from './data/Store';
import { Header } from './components/Header/Header';

const Wrapper = styled.div`
	font-family: 'Raleway', sans-serif;
	font-weight: 300;
	display: flex;
	flex-direction: column;
	height: 100%;
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
		<Provider store={Store}>
			<Wrapper>
				<Header />
				<Container>
					<Sidebar />
					<Main />
				</Container>
			</Wrapper>
		</Provider>
	</ThemeProvider>
);

export default App;
