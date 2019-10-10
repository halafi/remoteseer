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
import Navbar from '../../../client/components/Navbar/index';
import Footer from '../../../client/components/Footer/index';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    color: ${Theme.primary};
    background-color: ${Theme.secondary};
    a {
      text-decoration: none;
    }
  }
`;

function markup(url: string) {
  const sheet = new ServerStyleSheet();
  let category = url !== '/' ? url.slice(1, url.length).split('-jobs')[0] : '';
  [, category] = category.split('remote-');
  let subcategory = url !== '/' ? url.slice(1, url.length).split('-jobs/')[1] : '';
  const [, subsubcategory] = subcategory ? subcategory.split('/') : ['', ''];
  [subcategory] = subcategory ? subcategory.split('/') : [''];
  const state = {
    jobs:
      url === '/' ||
      url === '/about/' ||
      url === '/companies-hiring-remotely/' || // this could be pre-computed on the server
      subsubcategory ||
      subcategory ||
      category
        ? data.getJobs(subsubcategory || subcategory || category)
        : [], // TODO: is this needed on stat page? probably does not increase page size anyway
    category,
    subcategory,
    subsubcategory: subsubcategory || '',
    stats: url === '/about/' ? data.getJobStats() : {}, // TODO: only needed on about page
  };
  const root = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <>
        <Normalize />
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <StateProvider initialState={state}>
            <Navbar />
            <StaticRouter location={url} context={{}}>
              <Routes />
            </StaticRouter>
            <Footer />
          </StateProvider>
        </ThemeProvider>
      </>
    </StyleSheetManager>,
  );

  const pass = new stream.PassThrough();
  pass.write(`<!DOCTYPE html>`);

  const htmlStream = renderToStaticNodeStream(
    <Html
      url={url}
      root={root}
      styleElement={sheet.getStyleElement()}
      state={state}
      category={category}
      subcategory={subcategory}
      subsubcategory={subsubcategory}
    />,
  );

  return htmlStream.pipe(pass);
}

export default markup;
