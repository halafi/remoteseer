// @flow
import React from 'react';

type Props = {
  title: string,
  description: string,
  url: string,
};

const SEO = ({ title, description, url }: Props) => (
  <>
    <title>{title}</title>
    {description && <meta name="description" property="og:description" content={description} />}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content={`https://remoteseer.net${url !== '/' ? url : ''}`} />
    <meta
      property="og:image"
      content="https://remoteseer.net/images/icons/android-chrome-512x512.png"
    />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@remote_seer" />
    <meta name="twitter:creator" content="@remote_seer" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </>
);

export default SEO;
