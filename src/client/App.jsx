// @flow
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './records/Theme';
import Routes from './Routes';
import { StateProvider } from './State';
import Navbar from './components/Navbar';
import Footer from './components/Footer/index';

const container = document.getElementById('root');

if (container) {
  hydrate(
    <ThemeProvider theme={Theme}>
      <StateProvider initialState={window.__STATE__}>
        <Navbar />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Footer />
      </StateProvider>
    </ThemeProvider>,
    container,
  );
}
