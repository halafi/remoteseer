// @flow
/* eslint-disable react/no-danger */
// hreflang x hrefLang jsx issue
import * as React from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';
import { CATEGORIES_META, DEV_CATEGORIES_META } from '../../consts/categories';
import SEO from './components/SEO/index';

type Props = {
  url: string,
  root: string,
  styleElement: React.Node, // css
  state: any,
  category: string,
  subcategory: string,
};

const getTitle = (category: string, subcategory: string) => {
  if (subcategory) {
    return `${
      DEV_CATEGORIES_META[subcategory].seoIcon ? `${DEV_CATEGORIES_META[subcategory].img} ` : ''
    }Remote ${DEV_CATEGORIES_META[subcategory].headline ||
      DEV_CATEGORIES_META[subcategory].title} Jobs | Remote Seer - largest listing of remote jobs`;
  }
  if (category) {
    return `${
      CATEGORIES_META[category].seoIcon ? `${CATEGORIES_META[category].img} ` : ''
    }Remote ${CATEGORIES_META[category].headline ||
      CATEGORIES_META[category].title} Jobs | Remote Seer - largest listing of remote jobs`;
  }
  return `Remote Jobs | Remote Seer - largest listing of remote jobs`;
};

const getDescription = (category: string, subcategory: string) => {
  if (subcategory && DEV_CATEGORIES_META[subcategory]) {
    return DEV_CATEGORIES_META[subcategory].description;
  }
  if (CATEGORIES_META[category]) {
    return CATEGORIES_META[category].description;
  }

  return 'Remote Seer is an aggregator of remote job sites. Find remote work in development, design, customer support and more.';
};

const Html = ({ url, root, styleElement, state, category, subcategory }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {process.env.NODE_ENV === 'production' && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132360635-3" />
            <GoogleAnalytics />
          </>
        )}
        <SEO
          title={getTitle(category, subcategory)}
          description={getDescription(category, subcategory)}
          url={url}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Subscribe to Remote Jobs"
          href="https://remoteseer.net/remote-jobs.rss"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__STATE__ = ${JSON.stringify(state)};`,
          }}
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
