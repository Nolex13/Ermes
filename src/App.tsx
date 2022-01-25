import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";

const Text = styled.p`
  color: red;
`

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

function App() {
          console.log("ciao")
  return (
    <div className="App">
      <header className="App-header">
        <AppLogo src={logo} alt="logo" />
        <Text>
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
