// @flow
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './records/Theme';
import Routes from './Routes';
import { StateProvider } from './State';

const container = document.getElementById('container');

if (container) {
  hydrate(
    <ThemeProvider theme={Theme}>
      <StateProvider initialState={window.__STATE__}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </StateProvider>
    </ThemeProvider>,
    container,
  );
}
