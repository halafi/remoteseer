// @flow
/* eslint-disable react/no-danger */
// hreflang x hrefLang jsx issue
import * as React from 'react';

type Props = {
  root: string,
  styleElement: React.Node, // css
  state: any,
};

const Html = ({ root, styleElement, state }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remote Seer - the ultimate aggregator of remote jobs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Remote seer is an aggregator of remote jobs. Find remote work in development, design and more."
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__STATE__ = ${JSON.stringify(state)};`,
          }}
        />
        {styleElement}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: root }} />
        <script src="bundle.js" />
      </body>
    </html>
  );
};

export default Html;