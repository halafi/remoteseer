// @flow strict
/* eslint-disable react/no-danger */
import React from 'react';

// if imported hot-loader fucks it up by appending js code
const script = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-132360635-3');`;

const GoogleAnalytics = () => <script dangerouslySetInnerHTML={{ __html: script }} />;

export default GoogleAnalytics;
