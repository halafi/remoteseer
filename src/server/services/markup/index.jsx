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

import Theme from '../../../client/records/Theme';
import Routes from '../../../client/Routes';
import { StateProvider } from '../../../client/State';
import Html from './Html';
import * as data from '../dataFiles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    color: ${Theme.primary};
    background-color: ${Theme.secondary};
    a {
      text-decoration: none;
    }
  }
`;

function markup(url: string) {
  const sheet = new ServerStyleSheet();
  const category = url !== '/' ? url.slice(1, url.length).split('-jobs')[0] : '';
  const state = { jobs: data.getJobs(category), category };
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
    <Html root={root} styleElement={sheet.getStyleElement()} state={state} category={category} />,
  );

  return htmlStream.pipe(pass);
}

export default markup;