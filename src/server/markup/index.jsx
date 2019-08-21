// @flow
import * as React from 'react';
import stream from 'stream';

import { renderToString, renderToStaticNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import {
  // $FlowFixMe
  ServerStyleSheet,
  // $FlowFixMe
  StyleSheetManager,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import Theme from '../../client/records/Theme';
import Routes from '../../client/Routes';
import { StateProvider } from '../../client/State';
import Html from './Html';
import * as data from '../dataFiles';

const GlobalStyle = createGlobalStyle`
  @import url('./semantic/semantic.min.css');
  body {
    color: ${Theme.primary};
    background-color: ${Theme.secondary};
  }
`;

function markup(url: string) {
  const sheet = new ServerStyleSheet();
  const state = { jobs: data.getJobs() };
  const root = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <>
        <Normalize />
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <StateProvider initialState={state}>
            <StaticRouter location={url} context={{}}>
              <Routes />
            </StaticRouter>
          </StateProvider>
        </ThemeProvider>
      </>
    </StyleSheetManager>,
  );

  const pass = new stream.PassThrough();
  pass.write(`<!DOCTYPE html>`);

  const htmlStream = renderToStaticNodeStream(
    <Html root={root} styleElement={sheet.getStyleElement()} state={state} />,
  );

  return htmlStream.pipe(pass);
}

export default markup;
