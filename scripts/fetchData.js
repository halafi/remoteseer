// @flow
/* eslint-disable no-console */
import 'core-js';
import 'regenerator-runtime/runtime';
import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs-extra';
import convert from 'xml-js';

const DATA_DIR = path.resolve(__dirname, '../data');

async function downloadJson(url, file) {
  const response = await fetch(url);
  const data = await response.json();
  if (data.type && data.type === 'error') {
    throw new Error(data.message);
  }
  const outputFile = path.join(DATA_DIR, file);
  await fs.outputJson(outputFile, data);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function downloadRss(url, file) {
  const response = await fetch(url);
  const data = await response.text();
  const xml = await convert.xml2js(data);
  const items = xml.elements[0].elements[0].elements;
  const jobs = items
    .map(x => x.elements)
    .reduce((acc, jobArr) => {
      acc.push(
        jobArr.reduce((subacc, prop) => {
          return { ...subacc, [prop.name]: prop.elements && prop.elements[0].text };
        }, {}),
      );
      return acc;
    }, [])
    .filter(x => x.link && (x.category || x.guid)); // link and category for soverflow, link and guid for wwr
  const outputFile = path.join(DATA_DIR, file);
  await fs.outputJson(outputFile, jobs);
  console.log(`[fetchData] downloaded ${url} -> ${outputFile}`);
}

async function fetchData() {
  console.log('[fetchData] start');
  await fs.ensureDir(DATA_DIR);
  // github
  await downloadJson(
    'https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=&location=remote',
    'githubJobs.json',
  );
  await downloadJson('https://remoteok.io/api', 'remoteOkJobs.json');
  // stackoverflow careers
  await downloadRss(
    'https://stackoverflow.com/jobs/feed?l=Remote&u=Km&d=20',
    'stackOverflowJobs.json',
  );
  await downloadRss('https://weworkremotely.com/remote-jobs.rss', 'wwrJobs.json');
  console.log('[fetchData] done');
}

fetchData();
