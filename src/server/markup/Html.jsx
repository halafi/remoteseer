// @flow
/* eslint-disable react/no-danger */
// hreflang x hrefLang jsx issue
import * as React from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';
import { CATEGORIES_META } from '../consts/categories';

type Props = {
  root: string,
  styleElement: React.Node, // css
  state: any,
  category: string,
};

const getDescription = (category: string) => {
  if (category === 'design') {
    return 'Browse through a listing of remote design, user experience and interaction jobs from multiple websites at once.';
  }
  if (category === 'development') {
    return 'Browse through a listing of remote software development jobs from multiple websites at once.';
  }
  if (category === 'customer-support') {
    return 'Browse through a listing of remote customer support jobs from multiple websites at once.';
  }
  return 'Remote Seer is an aggregator of remote job sites. Find remote work in development, design, customer support and more.';
};

const Html = ({ root, styleElement, state, category }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>
          {category ? `Remote ${CATEGORIES_META[category].title} Jobs` : 'Remote Jobs'} | Remote
          Seer - largest listing of remote jobs
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132360635-3" />
            <GoogleAnalytics />
          </>
        )}
        <meta name="description" content={getDescription(category)} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__STATE__ = ${JSON.stringify(state)};`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
        {styleElement}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: root }} />
        {process.env.NODE_ENV !== 'production' && <script src="bundle.js" />}
      </body>
    </html>
  );
};

export default Html;
