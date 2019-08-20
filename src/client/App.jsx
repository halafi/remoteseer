// @flow
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import ThemeDefault from './records/Theme';
import Root from './scenes/Root';

const container = document.getElementById('container');

const GlobalStyle = createGlobalStyle`
  @import url('./semantic/dist/semantic.min.css');
  body {
    color: ${ThemeDefault.primary};
    background-color: ${ThemeDefault.secondary};
  }
`;

if (container) {
  render(
    <ThemeProvider theme={ThemeDefault}>
      <>
        <Normalize />
        <GlobalStyle />
        <Root />
      </>
    </ThemeProvider>,
    container,
  );
}
