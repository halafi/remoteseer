// @flow
/* eslint-disable no-console */
import 'core-js';
import 'regenerator-runtime/runtime';
import path from 'path';
import fs from 'fs';
import getFilesizeInMegaBytes from './services/fileSize';
import { getJobs } from './services/dataFiles/index';

const PATH = path.join(__dirname, '../static/remote-jobs.rss');
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
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    '<atom:link href="http://dallas.example.com/rss.xml" rel="self" type="application/rss+xml" />',
    '<title>Remote Seer</title>',
    `<link>${DOMAIN}</link>`,
    '<description>Largest listing of Remote Jobs</description>',
    '<language>en</language>',
  ];

  const jobs = getJobs('').slice(0, 100);
  jobs.forEach(job => {
    // 2019-08-08T14:49:24-07:00
    xml.push(
      `<item><guid>${job.url}</guid><title>${job.title.replace(
        '&',
        'and',
      )}</title><description>${job.company
        .replace(/\s+/g, ' ')
        .replace('&', 'and')}</description><link>${job.url}</link><pubDate>${new Date(
        job.createdAt,
      ).toUTCString()}</pubDate></item>`,
    );
  });

  xml.push('</channel>');
  xml.push('</rss>');
  await storeXml(PATH, xml);
}

generateSitemap();
