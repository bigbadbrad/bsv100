import React, { Component } from 'react';
import './App.css';
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme } from "./styles/theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
        <Router />
    </ThemeProvider>
    );
  }
}

export default App;
