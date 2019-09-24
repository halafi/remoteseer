// @flow
/* eslint-disable no-console */
import 'core-js';
import 'regenerator-runtime/runtime';
import path from 'path';
import fs from 'fs';
import getFilesizeInMegaBytes from './services/fileSize';
import { CATEGORIES_META, DEV_CATEGORIES_META, SUBSUBCATEGORIES_META } from './consts/categories';

const PATH = path.join(__dirname, '../static/sitemap.xml');
const DOMAIN = 'https://remoteseer.net';

const lastmod = new Date().toISOString();

async function storeXml(filepath: string, xml: string[]) {
  return new Promise((resolve, reject) => {
    const filestream = fs.createWriteStream(filepath, { flags: 'w+', encoding: 'utf8' });
    filestream.once('open', () => {
      filestream.write(xml.join('\n'));
      filestream.end();
    });
    filestream.on('close', () => {
      // eslint-disable-next-line no-console
      console.log(`[sitemap] Success: ${getFilesizeInMegaBytes(filepath)}  ${filepath}`);
      resolve();
    });
    filestream.on('error', err => {
      // eslint-disable-next-line no-console
      console.error(`[sitemap] Error: ${err}`);
      reject(err);
    });
  });
}

async function generateSitemap() {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="https://remoteseer.net/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ];

  xml.push(`<url><loc>${DOMAIN}</loc><lastmod>${lastmod}</lastmod></url>`);
  xml.push(`<url><loc>${DOMAIN}/about/</loc><lastmod>${lastmod}</lastmod></url>`);
  xml.push(
    `<url><loc>${DOMAIN}/companies-hiring-remotely/</loc><lastmod>${lastmod}</lastmod></url>`,
  );

  Object.keys(CATEGORIES_META).forEach(category => {
    xml.push(
      `<url><loc>${DOMAIN}${CATEGORIES_META[category].link}</loc><lastmod>${lastmod}</lastmod></url>`,
    );
  });

  Object.keys(DEV_CATEGORIES_META).forEach(category => {
    xml.push(
      `<url><loc>${DOMAIN}${DEV_CATEGORIES_META[category].link}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq></url>`,
    );
  });

  Object.keys(SUBSUBCATEGORIES_META).forEach(category => {
    xml.push(
      `<url><loc>${DOMAIN}${SUBSUBCATEGORIES_META[category].link}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq></url>`,
    );
  });

  xml.push('</urlset>');
  await storeXml(PATH, xml);
}

generateSitemap();
