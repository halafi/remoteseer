// @flow strict
/* eslint-disable react/no-danger */
import React from 'react';

// if imported hot-loader fucks it up by appending js code
const script = `window.$crisp=[];window.CRISP_WEBSITE_ID="285401c9-5eca-46bf-8534-99fcf4e2c9d4";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`;

const Crisp = () => <script dangerouslySetInnerHTML={{ __html: script }} />;

export default Crisp;
